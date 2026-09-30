const fs = require('fs');
let content = fs.readFileSync('src/components/BookingSearch.tsx', 'utf8');

const target = `<div className="py-8 border-b border-gray-200">
      <div className="relative px-4" ref={dropdownRef}>`;

const replacement = `<div className="py-12 border-b border-gray-200 relative overflow-hidden">
      {/* AI Chat-like subtle background shade/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="relative px-4" ref={dropdownRef}>`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/BookingSearch.tsx', content, 'utf8');
  console.log("Patched background shade!");
} else {
  const fallbackTarget = `<div className="py-8 border-b border-gray-200">
      <div className="relative" ref={dropdownRef}>`;
  const fallbackReplacement = `<div className="py-12 border-b border-gray-200 relative overflow-hidden">
      {/* AI Chat-like subtle background shade/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl h-[250px] bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 blur-[80px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-[40%] h-[150px] bg-gradient-to-tr from-cyan-50/40 to-teal-50/40 blur-[60px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="relative" ref={dropdownRef}>`;
  if (content.includes(fallbackTarget)) {
    content = content.replace(fallbackTarget, fallbackReplacement);
    fs.writeFileSync('src/components/BookingSearch.tsx', content, 'utf8');
    console.log("Patched background shade (fallback)!");
  } else {
    console.log("Could not find target string.");
  }
}
