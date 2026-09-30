const fs = require('fs');

const amenitiesData = {
  1: [
    { category: "Living Space", items: ["Lounge area"] },
    { category: "Entertainment", items: ["TV"] },
    { category: "Outdoors", items: ["Hammock", "Terrace"] },
    { category: "General", items: ["Air conditioning", "Direct ocean access", "Outdoor dining area", "Two queen beds", "Day beds", "Personal butler", "Ocean views", "Private pool", "Tea and coffee-making facilities", "Wi-Fi", "Ensuite bathroom with soaking bathtub", "Personal four-seater buggy", "Minibar (charges apply)"] }
  ],
  2: [
    { category: "Bedroom", items: ["Air conditioning", "Phone", "Desk", "Premium bedding", "Blackout drapes/curtains", "Rollaway/extra beds (free)", "Wardrobe or closet"] },
    { category: "Bathroom", items: ["Bathrobes", "Free toiletries", "Hair dryer", "Bidet", "Separate bathtub and shower", "Deep soaking bathtub", "Rainfall showerhead", "Towels provided"] },
    { category: "Entertainment", items: ["Television", "Video-game console", "Pay movies", "Premium TV channels", "Cable TV service", "First-run movies", "LED TV", "Netflix"] },
    { category: "Internet", items: ["Free WiFi", "Free wired internet"] },
    { category: "Food and Drink", items: ["Coffee/tea maker", "Espresso maker", "Room service (24 hours)", "Free bottled water", "Refrigerator (on request)", "Minibar (stocked, some free items)", "Electric kettle", "Champagne service"] },
    { category: "Family Friendly", items: ["In-room childcare (surcharge)", "Free cribs/infant beds"] },
    { category: "Accessible", items: ["Wheelchair accessible", "Accessible bathtub", "Visual fire alarm", "Doorbell/telephone notification", "Lever door handles", "Telephone accessibility kit"] },
    { category: "More", items: ["Free local calls", "In-room safe", "Turndown service", "Slippers", "TV size: 50", "TV size measurement: inch", "Private hot tub", "Non-Smoking", "Bedsheets provided", "Laptop-friendly workspace", "Private hot tub (indoor)"] }
  ],
  3: [
    { category: "Living Space", items: ["Lounge area"] },
    { category: "Entertainment", items: ["TV"] },
    { category: "Outdoors", items: ["Hammock", "Terrace"] },
    { category: "General", items: ["Minibar (charges apply)", "Air conditioning", "Outdoor dining area", "Two queen beds", "Direct beach access", "Personal butler", "Ocean views", "Tea and coffee-making facilities", "Wi-Fi", "Daybeds", "Ensuite bathroom with terrazzo bathtub"] }
  ],
  4: [
    { category: "Living Space", items: ["Lounge area"] },
    { category: "Entertainment", items: ["TV"] },
    { category: "Outdoors", items: ["Terrace", "Hammock"] },
    { category: "General", items: ["Minibar (charges apply)", "Ensuite bathroom with soaking bathtub", "Daybeds", "Wi-Fi", "Tea and coffee-making facilities", "Private pool", "Ocean views", "King bed", "Personal butler", "Outdoor dining area", "Air conditioning"] }
  ],
  5: [
    { category: "Living Space", items: ["Lounge area"] },
    { category: "Entertainment", items: ["TV"] },
    { category: "Outdoors", items: ["Terrace", "Hammock"] },
    { category: "General", items: ["Minibar (charges apply)", "One king bed in first bedroom and two queen beds in second bedroom", "Personal four-seater buggy", "Two bathrooms with soaking bathtubs", "Daybeds", "Wi-Fi", "Tea and coffee-making facilities", "Private pool", "Ocean views", "Personal butler", "Direct beach access", "Outdoor dining area", "Air conditioning", "Two bedrooms"] }
  ],
  6: [
    { category: "Living Space", items: ["Lounge area"] },
    { category: "Entertainment", items: ["TV"] },
    { category: "Outdoors", items: ["Hammock", "Terrace"] },
    { category: "General", items: ["Three bedrooms", "Air conditioning", "Outdoor dining area", "Direct beach access", "Personal butler", "Kitchenette", "Ocean views", "Private pool", "Tea and coffee-making facilities", "Wi-Fi", "Daybeds", "Three bathrooms with soaking bathtubs", "Two personal four-seater buggies", "Outdoor cinema", "One king bed in first and second bedroom and two queen beds in third bedroom", "Minibar (charges apply)", "2,000m2 private beach area"] }
  ],
  7: [
    { category: "Living Space", items: ["Lounge area"] },
    { category: "Entertainment", items: ["TV"] },
    { category: "Outdoors", items: ["Hammock"] },
    { category: "General", items: ["Outdoor cinema", "Two personal four-seater buggies", "Three bathrooms with soaking bathtubs", "Daybeds", "Wi-Fi", "Tea and coffee-making facilities", "Private pool", "Ocean views", "Personal butler", "Direct beach access", "Outdoor dining area", "Three bedrooms", "Air conditioning", "2,000m2 private beach area", "Minibar (charges apply)", "One king bed in first and second bedroom and two queen beds in third bedroom"] }
  ],
  8: [
    { category: "Bedroom", items: ["Air conditioning", "Phone", "Desk", "Premium bedding", "Blackout drapes/curtains", "Rollaway/extra beds (free)", "Wardrobe or closet"] },
    { category: "Bathroom", items: ["Bathrobes", "Free toiletries", "Hair dryer", "Bidet", "Separate bathtub and shower", "Deep soaking bathtub", "Rainfall showerhead", "Towels provided"] },
    { category: "Entertainment", items: ["Television", "Video-game console", "Pay movies", "Premium TV channels", "Cable TV service", "First-run movies", "LED TV", "Netflix"] },
    { category: "Internet", items: ["Free WiFi", "Free wired internet"] },
    { category: "Food and Drink", items: ["Coffee/tea maker", "Espresso maker", "Room service (24 hours)", "Free bottled water", "Refrigerator (on request)", "Minibar (stocked, some free items)", "Electric kettle", "Champagne service"] },
    { category: "Family Friendly", items: ["In-room childcare (surcharge)", "Free cribs/infant beds"] },
    { category: "Accessible", items: ["Wheelchair accessible", "Accessible bathtub", "Visual fire alarm", "Doorbell/telephone notification", "Lever door handles", "Telephone accessibility kit"] },
    { category: "More", items: ["Free local calls", "In-room safe", "Turndown service", "Slippers", "TV size: 50", "TV size measurement: inch", "Private hot tub", "Non-Smoking", "Bedsheets provided", "Laptop-friendly workspace", "Private hot tub (indoor)"] }
  ],
  9: [
    { category: "Bedroom", items: ["Air conditioning", "Phone", "Desk", "Premium bedding", "Blackout drapes/curtains", "Rollaway/extra beds (free)", "Wardrobe or closet"] },
    { category: "Bathroom", items: ["Bathrobes", "Free toiletries", "Hair dryer", "Bidet", "Separate bathtub and shower", "Deep soaking bathtub", "Rainfall showerhead", "Towels provided"] },
    { category: "Entertainment", items: ["Television", "Video-game console", "Pay movies", "Premium TV channels", "Cable TV service", "First-run movies", "LED TV", "Netflix"] },
    { category: "Internet", items: ["Free WiFi", "Free wired internet"] },
    { category: "Food and Drink", items: ["Coffee/tea maker", "Espresso maker", "Room service (24 hours)", "Free bottled water", "Refrigerator (on request)", "Minibar (stocked, some free items)", "Electric kettle", "Champagne service"] },
    { category: "Family Friendly", items: ["In-room childcare (surcharge)", "Free cribs/infant beds"] },
    { category: "Accessible", items: ["Wheelchair accessible", "Accessible bathtub", "Visual fire alarm", "Doorbell/telephone notification", "Lever door handles", "Telephone accessibility kit"] },
    { category: "More", items: ["Free local calls", "In-room safe", "Turndown service", "Slippers", "TV size: 50", "TV size measurement: inch", "Private hot tub", "Non-Smoking", "Bedsheets provided", "Laptop-friendly workspace", "Private hot tub (indoor)"] }
  ],
  10: [
    { category: "Bedroom", items: ["Air conditioning", "Phone", "Desk", "Premium bedding", "Separate sitting area", "Blackout drapes/curtains", "Rollaway/extra beds (free)", "Wardrobe or closet"] },
    { category: "Bathroom", items: ["Bathrobes", "Free toiletries", "Hair dryer", "Bidet", "Separate bathtub and shower", "Deep soaking bathtub", "Rainfall showerhead", "Towels provided"] },
    { category: "Entertainment", items: ["Television", "Video-game console", "Pay movies", "Premium TV channels", "Cable TV service", "First-run movies", "LED TV", "Netflix"] },
    { category: "Internet", items: ["Free WiFi", "Free wired internet"] },
    { category: "Food and Drink", items: ["Coffee/tea maker", "Espresso maker", "Room service (24 hours)", "Free bottled water", "Refrigerator (on request)", "Minibar (stocked, some free items)", "Electric kettle", "Champagne service"] },
    { category: "Family Friendly", items: ["In-room childcare (surcharge)", "Free cribs/infant beds"] },
    { category: "Accessible", items: ["Wheelchair accessible", "Bathroom grab bars", "Accessible bathtub", "Visual fire alarm", "Doorbell/telephone notification", "Lever door handles", "Telephone accessibility kit"] },
    { category: "More", items: ["Free local calls", "In-room safe", "Turndown service", "Slippers", "TV size: 50", "TV size measurement: inch", "Private hot tub", "Shared accommodation", "Non-Smoking", "Bedsheets provided", "Laptop-friendly workspace", "Private hot tub (indoor)"] }
  ],
  11: [
    { category: "Bedroom", items: ["Air conditioning", "Phone", "Desk", "Premium bedding", "Separate sitting area", "Blackout drapes/curtains", "Rollaway/extra beds (free)", "Wardrobe or closet"] },
    { category: "Bathroom", items: ["Bathrobes", "Free toiletries", "Hair dryer", "Bidet", "Separate bathtub and shower", "Deep soaking bathtub", "Rainfall showerhead", "Towels provided"] },
    { category: "Entertainment", items: ["Television", "Video-game console", "Pay movies", "Premium TV channels", "Cable TV service", "First-run movies", "LED TV", "Netflix"] },
    { category: "Internet", items: ["Free WiFi", "Free wired internet"] },
    { category: "Food and Drink", items: ["Coffee/tea maker", "Espresso maker", "Room service (24 hours)", "Free bottled water", "Refrigerator (on request)", "Minibar (stocked, some free items)", "Electric kettle", "Champagne service"] },
    { category: "Family Friendly", items: ["In-room childcare (surcharge)", "Free cribs/infant beds"] },
    { category: "Accessible", items: ["Wheelchair accessible", "Accessible bathtub", "Visual fire alarm", "Doorbell/telephone notification", "Lever door handles", "Telephone accessibility kit"] },
    { category: "More", items: ["Free local calls", "In-room safe", "Turndown service", "Slippers", "TV size: 50", "TV size measurement: inch", "Private hot tub", "Non-Smoking", "Bedsheets provided", "Laptop-friendly workspace", "Private hot tub (indoor)"] }
  ]
};

const content = fs.readFileSync('src/data/resort.ts', 'utf-8');

// I will parse the JS by executing it, but wait it has export const resortData.
// Better: Regex replace to inject roomAmenities
let newContent = content;

Object.keys(amenitiesData).forEach(id => {
  const replacementStr = `      images: [\n$1\n      ],\n      roomAmenities: ${JSON.stringify(amenitiesData[id], null, 6).trim()}`;
  
  // We need to match the images block for this specific id.
  // Actually, string replacement is tricky. Let's do it by loading the file, converting it to a JS object, injecting, then writing it out.
  // We can write a quick parser, or just use typescript compiler.
  // Actually, we can just split by "id: " + id + "," and find the "images: [" array end.
});

