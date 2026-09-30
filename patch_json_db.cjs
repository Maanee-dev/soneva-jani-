const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const oldSetup = `import sqlite3 from "sqlite3";

// Initialize SQLite database
const dbDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}
const dbPath = path.join(dbDir, 'inquiries.db');
const db = new sqlite3.Database(dbPath);

// Create table if not exists
db.serialize(() => {
  db.run(\`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      name TEXT,
      email TEXT,
      phone TEXT,
      nationality TEXT,
      dates TEXT,
      guests TEXT,
      primary_villa TEXT,
      alternative_villa TEXT,
      meal_plan TEXT,
      special_requests TEXT
    )
  \`);
});`;

const newSetup = `// Initialize local JSON database for offline storage
const dbDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}
const dbPath = path.join(dbDir, 'inquiries.json');
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify([]), 'utf8');
}`;

content = content.replace(oldSetup, newSetup);

const oldInsert = `      // Store offline locally in SQLite
      db.run(
        \`INSERT INTO inquiries (name, email, phone, nationality, dates, guests, primary_villa, alternative_villa, meal_plan, special_requests) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\`,
        [name, email, phone, nationality, dates, guests, primary_villa, alternative_villa, meal_plan, special_requests],
        function(err) {
          if (err) {
            console.error("Failed to insert into local SQLite DB:", err.message);
          } else {
            console.log(\`Successfully saved inquiry to local DB with rowid \${this.lastID}\`);
          }
        }
      );`;

const newInsert = `      // Store offline locally in JSON file
      try {
        const inquiries = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        const newInquiry = {
          id: Date.now(),
          created_at: new Date().toISOString(),
          name, email, phone, nationality, dates, guests, primary_villa, alternative_villa, meal_plan, special_requests
        };
        inquiries.push(newInquiry);
        fs.writeFileSync(dbPath, JSON.stringify(inquiries, null, 2), 'utf8');
        console.log(\`Successfully saved inquiry to local JSON DB\`);
      } catch (err) {
        console.error("Failed to insert into local JSON DB:", err.message);
      }`;

content = content.replace(oldInsert, newInsert);
fs.writeFileSync('server.ts', content, 'utf8');
