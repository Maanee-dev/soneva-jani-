const fs = require('fs');

let content = fs.readFileSync('src/pages/Enquire.tsx', 'utf8');

// Add import Link if not present
if (!content.includes("import { Link } from 'react-router-dom';")) {
  content = content.replace("import { useNavigate } from 'react-router-dom';", "import { useNavigate, Link } from 'react-router-dom';");
}

// Add state for privacy policy
if (!content.includes('const [agreedToPrivacy')) {
  content = content.replace(
    /const \[isSubmitting, setIsSubmitting\] = useState\(false\);/,
    "const [isSubmitting, setIsSubmitting] = useState(false);\n  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);"
  );
}

// Update canGoNext
if (!content.includes('agreedToPrivacy')) {
  content = content.replace(
    /if \(step === 3\) return fullName\.length > 0;/,
    "if (step === 3) return fullName.length > 0 && agreedToPrivacy;"
  );
}

// Add checkbox
const checkboxHtml = `
              <div className="pt-4 flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  required 
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor="privacy" className="text-sm font-light text-gray-600">
                  I agree to the <Link to="/privacy-policy" className="underline text-gray-900 hover:text-black">Privacy Policy</Link> and consent to being contacted regarding my enquiry.
                </label>
              </div>`;

if (!content.includes('id="privacy"')) {
  content = content.replace(
    /<\/textarea>\s*<\/div>\s*<\/div>\s*\)\}/,
    `</textarea>\n              </div>\n${checkboxHtml}\n            </div>\n          )}`
  );
}

fs.writeFileSync('src/pages/Enquire.tsx', content, 'utf8');
