const fs = require('fs');

let homeContent = fs.readFileSync('src/pages/Home.tsx', 'utf8');
homeContent = homeContent.replace("import OfferPopups from '../components/OfferPopups';\n", "");
homeContent = homeContent.replace("      <OfferPopups />\n", "");
fs.writeFileSync('src/pages/Home.tsx', homeContent, 'utf8');

let rateContent = fs.readFileSync('src/components/RateComparison.tsx', 'utf8');
const oldWrapper = `<div className="relative group mt-2 md:mt-0">
          {/* Blurred Glow Background */}                              {/* Gradient Border Wrapper */}
          <div className="relative p-[1px] bg-gray-200 rounded-xl h-full">
            {/* Inner Content Box */}
            <div className="bg-white rounded-[10px] p-6 h-full flex flex-col justify-between">`;

const newWrapper = `<div className="relative group mt-2 md:mt-0">
          <div className="absolute -inset-[1px] bg-gradient-to-br from-[#ffcfa8] via-[#e2c1ff] to-[#80c8ff] rounded-xl blur-[6px] opacity-40"></div>
          <div className="relative p-[2px] bg-gradient-to-br from-[#ffcfa8] via-[#e2c1ff] to-[#80c8ff] rounded-xl h-full">
            <div className="bg-white rounded-[10px] p-6 h-full flex flex-col justify-between">`;

if (rateContent.includes(oldWrapper)) {
    rateContent = rateContent.replace(oldWrapper, newWrapper);
} else {
    // try a more resilient replace
    rateContent = rateContent.replace(/<div className="relative group mt-2 md:mt-0">[\s\S]*?<div className="bg-white rounded-\[10px\] p-6 h-full flex flex-col justify-between">/, newWrapper);
}

fs.writeFileSync('src/components/RateComparison.tsx', rateContent, 'utf8');
