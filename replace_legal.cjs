const fs = require('fs');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/SP03132025/g, 'SP02722025');
  content = content.replace(/2025SP00110E/g, '2025SP00636E');
  content = content.replace(/BP09772025/g, 'BP22342025');
  content = content.replace(/MOT\.01\.RS\.TA\.25\.VC8401/g, 'MOT.01.RS.TA.25.PJ0482');
  content = content.replace(/sales@maldivesagents\.com/g, 'hello@maldives-serenitytravels.com');
  content = content.replace(/reservations@maldives-serenitytravels\.com/g, 'hello@maldives-serenitytravels.com');
  content = content.replace(/Malé, Maldives/g, 'FAITH, 19040, S. Feydhoo, Maldives');
  // Optional: update specific issue date if necessary "28 January 2025" -> "06 March 2025"
  content = content.replace(/28 January 2025/g, '06 March 2025');
  
  // Also change "Maldives Serenity Travels" to "MST Maldives Serenity Travels" if they want exact name matching
  // The user explicitly stated "MST Maldives Serenity Travels [ Sole Proprietorship ]"
  // Let's replace "Maldives Serenity Travels is a registered sole proprietorship" with "MST Maldives Serenity Travels is a registered sole proprietorship"
  content = content.replace(/Maldives Serenity Travels is a registered sole proprietorship/g, 'MST Maldives Serenity Travels is a registered sole proprietorship');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

['src/components/LocationSection.tsx', 'src/components/Footer.tsx', 'src/data/policies.tsx'].forEach(replaceInFile);

