const fs = require('fs');

const newAllAmenities = [
  {
    category: "Internet & Wi-Fi",
    items: ["Wi-Fi"]
  },
  {
    category: "Other Facilities",
    items: ["Boat tours (surcharges apply)", "Designated smoking areas", "Library", "Garden"]
  },
  {
    category: "Cycling & Biking",
    items: ["Bicycles"]
  },
  {
    category: "Guest Services",
    items: ["Laundry service", "Concierge", "24-hour front desk", "Business centre", "24-hour business centre", "Luggage storage"]
  },
  {
    category: "Family-Friendly",
    items: ["Playground", "Kids' club"]
  },
  {
    category: "Activities",
    items: ["Water sports equipment", "Billiards or pool table", "Sailing", "Fishing", "Rowing/canoeing", "Kayaking", "Surfing/bodyboarding", "Snorkelling", "Tennis court", "Outdoor tennis court"]
  },
  {
    category: "Wellness & Relaxation",
    items: ["Yoga classes", "Fitness classes", "Fitness centre", "Spa treatment rooms"]
  },
  {
    category: "Pools",
    items: ["Children's pool", "Waterslide", "Outdoor pool"]
  },
  {
    category: "Dining & Drinks",
    items: ["BBQ facilities", "Snack bar/deli", "Cafe", "Bar", "Restaurants"]
  },
  {
    category: "Kids' Club",
    items: ["Babysitting or childcare (surcharges apply)"]
  }
];

const fileContent = fs.readFileSync('src/data/resort.ts', 'utf8');

// We need to replace the `allAmenities` array in resort.ts
// It is currently:
// "allAmenities": [
//   ...
// ],

const regex = /"allAmenities":\s*\[[\s\S]*?\]\,/;
if (regex.test(fileContent)) {
  const newContent = fileContent.replace(regex, `"allAmenities": ${JSON.stringify(newAllAmenities, null, 4)},`);
  fs.writeFileSync('src/data/resort.ts', newContent);
  console.log("Updated allAmenities successfully");
} else {
  console.log("Could not find allAmenities");
}
