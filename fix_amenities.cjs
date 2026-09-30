const fs = require('fs');

const amenities = [
  { "icon": "Wifi", "name": "Free High-Speed WiFi" },
  { "icon": "Waves", "name": "Private Pools" },
  { "icon": "Utensils", "name": "Multiple Dining Venues" },
  { "icon": "Wine", "name": "Wine Vault" },
  { "icon": "Activity", "name": "Fitness Center & Spa" },
  { "icon": "Baby", "name": "Kids Club (The Den)" }
];

const allAmenities = [
  {
    "category": "Property Amenities",
    "items": ["Free High-Speed WiFi", "Pool", "Fitness Center with Gym / Workout Room", "Free breakfast", "Beach", "Bicycles available", "Babysitting", "Children's Activities (Kid / Family Friendly)"]
  },
  {
    "category": "Room Features",
    "items": ["Allergy-free room", "Blackout curtains", "Air conditioning", "Private beach", "Desk", "Housekeeping", "Minibar", "Flatscreen TV"]
  },
  {
    "category": "Services",
    "items": ["24-hour security", "Baggage storage", "Concierge", "Currency exchange", "Non-smoking hotel", "Doorperson", "24-hour front desk", "Laundry service"]
  }
];

const fileContent = fs.readFileSync('src/data/resort.ts', 'utf8');

const endMarker = '  "rates": [';
const endIndex = fileContent.indexOf(endMarker);

if (endIndex !== -1) {
  const contentBefore = fileContent.substring(0, endIndex);
  const contentAfter = fileContent.substring(endIndex);

  const extraStr = '"amenities": ' + JSON.stringify(amenities, null, 4) + ',\n  "allAmenities": ' + JSON.stringify(allAmenities, null, 4) + ',\n';

  fs.writeFileSync('src/data/resort.ts', contentBefore + extraStr + contentAfter);
  console.log("Amenities added successfully!");
} else {
  console.log("Could not find marker.");
}
