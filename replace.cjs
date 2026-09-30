const fs = require('fs');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/One&Only Reethi Rah/g, 'Soneva Jani');
  content = content.replace(/One&Only/g, 'Soneva Jani'); // Just in case there is One&Only
  content = content.replace(/oneandonlyreethirah\.maldivesagents\.com/g, 'sonevajani.maldivesserenitytravels.com');
  content = content.replace(/MA Maldives Agent/g, 'Maldives Serenity Travels');
  content = content.replace(/sales@maldivesagents\.com/g, 'sales@maldivesagents.com');
  fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('src/data/policies.tsx');
replaceInFile('src/data/resort.ts');
replaceInFile('src/components/LocationSection.tsx'); // Double check if anything left
replaceInFile('src/pages/Enquire.tsx');
replaceInFile('src/pages/Home.tsx');
