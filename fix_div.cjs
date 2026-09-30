const fs = require('fs');

let code = fs.readFileSync('src/pages/Enquire.tsx', 'utf8');

code = code.replace(
  'onChange={(val) => setNationality(countries.find(c => c.code === val) || countries[0])}\n                    />\n                </div>\n              </div>',
  'onChange={(val) => setNationality(countries.find(c => c.code === val) || countries[0])}\n                    />\n                  </div>\n                </div>\n              </div>'
);

fs.writeFileSync('src/pages/Enquire.tsx', code);
console.log('fixed');
