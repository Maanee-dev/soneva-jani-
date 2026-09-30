const fs = require('fs');
let content = fs.readFileSync('src/components/Logo.tsx', 'utf8');
content = content.replace(/fill="#595858"/g, 'fill="currentColor"');
content = content.replace(/<svg/g, '<svg className="text-gray-900 dark:text-white"');
fs.writeFileSync('src/components/Logo.tsx', content, 'utf8');
