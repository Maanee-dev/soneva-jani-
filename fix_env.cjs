const fs = require('fs');

function fixEnv(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/HOSTINGER_SMTP_HOST=hello@maldives-serenitytravels\.com/g, 'HOSTINGER_SMTP_HOST=smtp.hostinger.com');
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

fixEnv('.env');
fixEnv('.env.example');
