const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /bg-white/g, replace: 'bg-white dark:bg-gray-950' },
  { regex: /text-gray-900/g, replace: 'text-gray-900 dark:text-white' },
  { regex: /text-gray-800/g, replace: 'text-gray-800 dark:text-gray-200' },
  { regex: /text-gray-600/g, replace: 'text-gray-600 dark:text-gray-400' },
  { regex: /text-gray-500/g, replace: 'text-gray-500 dark:text-gray-400' },
  { regex: /bg-gray-50([^0-9])/g, replace: 'bg-gray-50 dark:bg-gray-900$1' },
  { regex: /bg-gray-100/g, replace: 'bg-gray-100 dark:bg-gray-900/50' },
  { regex: /border-gray-100/g, replace: 'border-gray-100 dark:border-gray-800' },
  { regex: /border-gray-200/g, replace: 'border-gray-200 dark:border-gray-800' },
  { regex: /border-b /g, replace: 'border-b border-gray-200 dark:border-gray-800 ' },
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walkDir('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Prevent double replacing if already run
  if (!content.includes('dark:bg-gray-950') || file === 'src/components/Footer.tsx') {
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replace);
    });
    // clean up duplicate dark classes in case they already existed
    content = content.replace(/dark:bg-gray-950 dark:bg-gray-950/g, 'dark:bg-gray-950');
    content = content.replace(/dark:text-white dark:text-white/g, 'dark:text-white');
    content = content.replace(/dark:text-gray-400 dark:text-gray-400/g, 'dark:text-gray-400');
    content = content.replace(/dark:border-gray-800 dark:border-gray-800/g, 'dark:border-gray-800');
    content = content.replace(/border-gray-200 dark:border-gray-800 border-gray-200 dark:border-gray-800/g, 'border-gray-200 dark:border-gray-800');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
