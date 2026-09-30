const fs = require('fs');
let content = fs.readFileSync('src/components/RateComparison.tsx', 'utf8');

// Replace the glow background with nothing or a subtle border
content = content.replace(/<div className="absolute -inset-1 bg-gradient-to-r from-\[#f7d8d2\] via-\[#e5dcf4\] to-\[#c5e1fb\] rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"><\/div>/g, '');
content = content.replace(/<div className="relative p-\[2px\] bg-gradient-to-r from-\[#f7d8d2\] via-\[#e5dcf4\] to-\[#c5e1fb\] rounded-xl h-full">/g, '<div className="relative p-[1px] bg-gray-200 dark:bg-gray-800 rounded-xl h-full">');

fs.writeFileSync('src/components/RateComparison.tsx', content, 'utf8');
