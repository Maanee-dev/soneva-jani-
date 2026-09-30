const fs = require('fs');
let content = fs.readFileSync('src/components/BookingSearch.tsx', 'utf8');

const target = `<div className="flex flex-col md:flex-row items-center gap-4 bg-white md:border md:border-gray-300 md:shadow-sm md:rounded-full md:p-2 md:w-fit mx-auto">`;

const replacement = `<div className="relative w-full md:w-fit mx-auto group mt-4 mb-2">
          <div className="absolute -inset-[1px] bg-gradient-to-br from-[#ffcfa8] via-[#e2c1ff] to-[#80c8ff] rounded-2xl md:rounded-full blur-[8px] md:blur-[10px] opacity-70"></div>
          <div className="relative p-[2px] bg-gradient-to-br from-[#ffcfa8] via-[#e2c1ff] to-[#80c8ff] rounded-2xl md:rounded-full">
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white md:shadow-sm rounded-[14px] md:rounded-full p-2 md:p-2 w-full mx-auto">`;

content = content.replace(target, replacement);

const buttonTarget = `<span>Check Availability</span>
          </button>
        </div>
      </div>`;

const buttonReplacement = `<span>Check Availability</span>
          </button>
            </div>
          </div>
        </div>
      </div>`;

content = content.replace(buttonTarget, buttonReplacement);
fs.writeFileSync('src/components/BookingSearch.tsx', content, 'utf8');
