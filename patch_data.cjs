const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'resort.ts');
let content = fs.readFileSync(file, 'utf8');

// The replacement mapping
const replacements = {
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa/Beach%20Villa.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa/Beach%20Villa.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa/Beach%20Villa%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa/Beach%20Villa%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa/Beach%20Villa%203.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa-with-pool/Beach%20Villa%20with%20Pool.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa-with-pool/Beach%20Villa%20with%20Pool.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa-with-pool/Beach%20Villa%20with%20Pool%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa-with-pool/Beach%20Villa%20with%20Pool%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/beach-villa-with-pool/Beach%20Villa%20with%20Pool%203.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/grand-beach-villa-with-pool/Grand%20Beach%20Villa%20with%20Pool.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/grand-beach-villa-with-pool/Grand%20Beach%20Villa%20with%20Pool.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/grand-beach-villa-with-pool/Grand%20Beach%20Villa%20with%20Pool%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/grand-beach-villa-with-pool/Grand%20Beach%20Villa%20with%20Pool%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/grand-beach-villa-with-pool/Grand%20Beach%20Villa%20with%20Pool%203.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/two-villa-residence-with-pool/Two%20Villa%20Residence%20with%20Pool.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/two-villa-residence-with-pool/Two%20Villa%20Residence%20with%20Pool.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/two-villa-residence-with-pool/Two%20Villa%20Residence%20with%20Pool%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/two-villa-residence-with-pool/Two%20Villa%20Residence%20with%20Pool%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/beach-villas/two-villa-residence-with-pool/Two%20Villa%20Residence%20with%20Pool%203.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa/Water%20Villa.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa/Water%20Villa.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa/Water%20Villa%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa/Water%20Villa%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa/Water%20Villa%203.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa-with-pool/Water%20Villa%20with%20Pool.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa-with-pool/Water%20Villa%20with%20Pool.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa-with-pool/Water%20Villa%20with%20Pool%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/water-villa-with-pool/Water%20Villa%20with%20Pool%202.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/grand-water-villa-with-pool/Grand%20Water%20Villa%20with%20Pool.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/grand-water-villa-with-pool/Grand%20Water%20Villa%20with%20Pool.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/grand-water-villa-with-pool/Grand%20Water%20Villa%20with%20Pool%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/grand-water-villa-with-pool/Grand%20Water%20Villa%20with%20Pool%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/water-villas/grand-water-villa-with-pool/Grand%20Water%20Villa%20with%20Pool%203.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-residence/Grand%20Residence.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-residence/Grand%20Residence.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-residence/Grand%20Residence%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-residence/Grand%20Residence%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-residence/Grand%20Residence%203.jpeg"
      ]`,
  '"https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-sunset-residence/Grand%20Sunset%20Residence.jpeg"': `[
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-sunset-residence/Grand%20Sunset%20Residence.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-sunset-residence/Grand%20Sunset%20Residence%201.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-sunset-residence/Grand%20Sunset%20Residence%202.jpeg",
        "https://media.avejourneys.com/resorts/one-and-only-reethi-rah/residence/grand-sunset-residence/Grand%20Sunset%20Residence%203.jpeg"
      ]`
};

// Also replace `image:` with `images:` for these cases
let patched = content;
Object.keys(replacements).forEach(key => {
  patched = patched.replace(`image: ${key}`, `images: ${replacements[key]}`);
});

fs.writeFileSync(file, patched);
console.log('Successfully patched resort.ts');
