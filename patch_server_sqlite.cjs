const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const importSqlite = `import path from "path";
import fs from "fs";
import sqlite3 from "sqlite3";

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
});
`;

content = content.replace('import path from "path";\nimport fs from "fs";', importSqlite);

const insertSqlite = `
      // Store offline locally in SQLite
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
      );
`;

if (!content.includes('INSERT INTO inquiries')) {
  content = content.replace('res.status(200).json({ success: true });', insertSqlite + '\n      res.status(200).json({ success: true });');
}

fs.writeFileSync('server.ts', content, 'utf8');
