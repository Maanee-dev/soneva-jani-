const fs = require('fs');
let content = fs.readFileSync('src/pages/Enquire.tsx', 'utf8');
content = content.replace("import { useNavigate, useSearchParams } from 'react-router-dom';", "import { useNavigate, useSearchParams, Link } from 'react-router-dom';");
fs.writeFileSync('src/pages/Enquire.tsx', content, 'utf8');
