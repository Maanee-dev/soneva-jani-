const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('href="/')) {
    // replace <a href="/something" to <Link to="/something"
    content = content.replace(/<a href="\/(.*?)"(.*?)>(.*?)<\/a>/g, '<Link to="/$1"$2>$3</Link>');
    
    // add import { Link } from 'react-router-dom'; if not exists
    if (!content.includes("import { Link }")) {
      content = "import { Link } from 'react-router-dom';\n" + content;
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', filePath);
  }
}

processFile('src/components/Footer.tsx');
processFile('src/data/policies.tsx');
