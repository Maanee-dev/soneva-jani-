const fs = require('fs');
let content = fs.readFileSync('src/components/OffersSection.tsx', 'utf8');
content = content.replace(/One&Only Reethi Rah/g, 'Soneva Jani');
fs.writeFileSync('src/components/OffersSection.tsx', content, 'utf8');
