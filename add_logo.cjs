const fs = require('fs');
const fileContent = fs.readFileSync('src/data/resort.ts', 'utf8');

if (!fileContent.includes('"logo":')) {
  const newContent = fileContent.replace(
    /"name": "Soneva Jani",/,
    `"name": "Soneva Jani",\n  "logo": "https://images.maldives-serenitytravels.com/soneva-jani-logo.png",`
  );
  fs.writeFileSync('src/data/resort.ts', newContent);
  console.log("Logo added.");
} else {
  console.log("Logo already exists.");
}
