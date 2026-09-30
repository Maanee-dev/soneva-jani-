const fs = require('fs');
let content = fs.readFileSync('src/components/Logo.tsx', 'utf8');
content = content.replace(/fill="currentColor"/g, 'fill="#595858"');
content = content.replace(/<svg className="text-gray-900"/g, '<svg');
fs.writeFileSync('src/components/Logo.tsx', content, 'utf8');
