const fs = require('fs');
let content = fs.readFileSync('src/components/DarkModeToggle.tsx', 'utf8');
content = content.replace(/\|\|\s*\(!\('theme' in localStorage\) && window\.matchMedia\('\(prefers-color-scheme: dark\)'\)\.matches\)/, `|| (localStorage.getItem('theme') === 'dark')`);
fs.writeFileSync('src/components/DarkModeToggle.tsx', content, 'utf8');
