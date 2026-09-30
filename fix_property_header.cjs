const fs = require('fs');
let content = fs.readFileSync('src/components/PropertyHeader.tsx', 'utf8');
content = content.replace(/text-gray-700/g, 'text-gray-700 dark:text-gray-200');
fs.writeFileSync('src/components/PropertyHeader.tsx', content, 'utf8');
