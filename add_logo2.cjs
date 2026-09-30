const fs = require('fs');
let fileContent = fs.readFileSync('src/data/resort.ts', 'utf8');

if (!fileContent.includes('"logo": "https://images.maldives-serenitytravels.com/soneva-jani-logo.png"')) {
  fileContent = fileContent.replace(
    /"name": "Soneva Jani",/,
    `"name": "Soneva Jani",\n  "logo": "https://images.maldives-serenitytravels.com/soneva-jani-logo.png",`
  );
  fs.writeFileSync('src/data/resort.ts', fileContent);
  console.log("Soneva Jani Logo added.");
} else {
  console.log("Soneva Jani Logo already exists.");
}
