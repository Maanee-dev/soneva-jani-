const fs = require('fs');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/maldivesserenitytravels\.com/g, 'maldives-serenitytravels.com');
  fs.writeFileSync(filePath, content, 'utf8');
}

['src/data/policies.tsx', 'src/hooks/useSEO.ts', 'index.html', 'public/robots.txt', 'public/sitemap.xml'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    replaceInFile(filePath);
  }
});
