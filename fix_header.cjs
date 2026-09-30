const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');
content = content.replace(/className="bg-\[#ebdcd1\] text-gray-900 dark:text-white text-xs/g, 'className="bg-[#ebdcd1] text-gray-900 text-xs');
fs.writeFileSync('src/components/Header.tsx', content, 'utf8');
