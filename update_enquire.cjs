const fs = require('fs');

let code = fs.readFileSync('src/pages/Enquire.tsx', 'utf8');

// Add import
if (!code.includes('import SearchableSelect')) {
  code = code.replace(/import { supabase } from '\.\.\/lib\/supabase';/, "import { supabase } from '../lib/supabase';\nimport SearchableSelect from '../components/SearchableSelect';");
}

// Replace Nationality select
const nationalityRegex = /<select \s*id="nationality"[\s\S]*?<\/select>\s*<ChevronDown[^>]*>\s*<\/div>/;
const nationalityReplacement = `<SearchableSelect
                      options={countries.map(c => ({
                        value: c.code,
                        label: \`\${c.flag} \${c.name}\`,
                        searchStr: \`\${c.name} \${c.code}\`
                      }))}
                      value={nationality.code}
                      onChange={(val) => setNationality(countries.find(c => c.code === val) || countries[0])}
                    />`;

code = code.replace(nationalityRegex, nationalityReplacement);

// Replace Phone code select
const phoneRegex = /<div className="relative w-32 shrink-0 border-r border-gray-200">\s*<select[\s\S]*?<\/select>\s*<ChevronDown[^>]*>\s*<\/div>/;
const phoneReplacement = `<div className="relative w-36 shrink-0 border-r border-gray-200 pr-1">
                    <SearchableSelect
                      options={countries.map(c => ({
                        value: c.code,
                        label: \`\${c.flag} \${c.dialCode}\`,
                        subLabel: c.name,
                        searchStr: \`\${c.name} \${c.dialCode} \${c.code}\`
                      }))}
                      value={selectedCountry.code}
                      onChange={(val) => setSelectedCountry(countries.find(c => c.code === val) || countries[0])}
                      className="h-full border-b-0"
                      dropdownClassName="w-[280px]"
                    />
                  </div>`;

code = code.replace(phoneRegex, phoneReplacement);

fs.writeFileSync('src/pages/Enquire.tsx', code);
console.log('updated');
