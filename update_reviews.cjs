const fs = require('fs');

const newReviews = [
  {
    "id": 1,
    "author": "Meng Jin",
    "country": "Google",
    "rating": 5,
    "date": "a month ago",
    "text": "This was our fourth trip to the Maldives and our first stay at Soneva Jani and it definitely lived up to its reputation. The island is really spacious, giving you a real sense of privacy. Whether you choose a beach villa or an overwater villa, the accommodations are incredibly generous in size. The villas are stunning and the private pools are also very large. If I had to mention one small point, it would be that there isn’t a main pool where guests naturally gather. But with such amazing private pools in every villa, it wasn’t something we really missed. The food deserves a special mention—it is absolutely outstanding. Every restaurant delivered exceptional quality, and every meal was a highlight. What truly makes Soneva Jani special, however, is the people. The staff was genuinely warm, kind, and attentive. They consistently went above and beyond what their job required, and to me, that is the true definition of luxury. We had an unforgettable stay and would happily return."
  },
  {
    "id": 2,
    "author": "Vacation777443",
    "country": "Tripadvisor",
    "rating": 1,
    "date": "4 weeks ago",
    "text": "Complete disappointment. We decided to spend a family vacation in the Maldives since we had already visited the islands several times before. …"
  },
  {
    "id": 3,
    "author": "Trip.com Member",
    "country": "Trip.com",
    "rating": 5,
    "date": "11 months ago",
    "text": "Hotel is nice and beautiful. Staff here are friendly and helpful"
  },
  {
    "id": 4,
    "author": "Jay Sond",
    "country": "Google",
    "rating": 5,
    "date": "3 weeks ago",
    "text": "We loved every moment at Soneva Jani! We came as a family of 5- 2 adults and 3 kids (10, 6 and 2 years old) our kids loved every moment at ‘The Den’ staff were warm, friendly and we felt reassured that our kids would be well looked after. The staff were so kind and attentive, nothing was too much trouble for them. A special thank you Assad who looked after us incredibly well. Our room was clean and well maintained, the kids had enough space to run around. Beautiful sunsets, great food and lots of activities for the kids and adults. We will definitely be coming back"
  },
  {
    "id": 5,
    "author": "Supox30",
    "country": "Tripadvisor",
    "rating": 5,
    "date": "3 months ago",
    "text": "Our second visit to Soneva Jani was just as magical as the first. We stayed on the south side of the island this time and were once again in awe of the beauty of the villa. …"
  },
  {
    "id": 6,
    "author": "ar.",
    "country": "Google",
    "rating": 5,
    "date": "9 months ago",
    "text": "I spent five unforgettable nights at Soneva Jani — a place that truly feels like a dream. The food was delicious, the atmosphere comforting, and the staff incredibly kind. A special thank you to Hollo for noticing the little details that completed the experience and made it truly perfect."
  },
  {
    "id": 7,
    "author": "dariosF9643AK",
    "country": "Tripadvisor",
    "rating": 5,
    "date": "4 months ago",
    "text": "Soneva Jani is not simply a hotel — it is an experience, and one that should not be missed if you are coming to the Maldives. …"
  },
  {
    "id": 8,
    "author": "ryanmS8860YL",
    "country": "Tripadvisor",
    "rating": 5,
    "date": "3 months ago",
    "text": "This was our fourth stay at Soneva Jani and our second visit in the last two years. We arrived after spending 10 nights at Soneva Fushi and were curious how the experience would compare coming directly from one property to the other. …"
  },
  {
    "id": 9,
    "author": "MehdiDXB",
    "country": "Tripadvisor",
    "rating": 3,
    "date": "2 months ago",
    "text": "5-night birthday celebration family stay at Jani mid-May this year. I’ll start by saying that the staff are all incredible and the highlight of our experience. …"
  },
  {
    "id": 10,
    "author": "130sad",
    "country": "Tripadvisor",
    "rating": 5,
    "date": "5 months ago",
    "text": "I’ve just returned home from a week at the most incredible resort Soneva Jani in the Maldives. This is the second time in the past 12 months that I’ve stayed there! Each time for seven days! …"
  },
  {
    "id": 11,
    "author": "Katie Santangelo",
    "country": "Google",
    "rating": 5,
    "date": "5 months ago",
    "text": "Soneva Jani is one of the most exceptional places I’ve ever had the pleasure of staying. It truly is such a peaceful and beautiful island. That aside, the service was unlike anything I’ve ever experienced. The staff are friendly, helpful, and the attention to detail is unmatched. I left my book on my nightstand with earmarked pages. Housekeeping leaves a Soneva bookmark for me inserted into my book. I ask our barefoot guardian for some hydrocortisone cream for a weird rash / sunburn that appeared overnight. He sends a doctor to our villa immediately to check it out just in case. I’ve never felt so cared for at a resort. The food quality is also next level. We had an in-villa omakase lunch prepared for us one day. It was the freshest I’ve ever had. Truly every meal was unbelievable. If there is anything you desire that is off menu, trust that they will find a way to make it for you. We did a sunset dolphin cruise which was great. Saw probably 50 dolphins. This wasn’t so much a “cruise” I would like to clarify however, we took an axopar going 50 mph dead straight out to sea to find the dolphins lol but it was worth it to see them playing and flipping right next to our boat. The overwater villa itself is just magical. We could have spent our entire 5 days confined to the villa without leaving and would have been happy. Multiple outdoor showers, lounge chairs for sunset, private pool, the list goes on. My ONLY gripe is with one very small detail; Soneva has their own time zone (+1 hr from Malé). Your iPhone doesn’t adjust to this +1 hr automatically because it’s made up timezone lol. We found to be confusing and annoying, but didn’t ruin our experience by any means. I would 10000% stay here again and hope one day we do return. Thank you so much to Soneva for making our honeymoon truly unforgettable."
  }
];

const fileContent = fs.readFileSync('src/data/resort.ts', 'utf8');

const regex = /"reviews":\s*\[[\s\S]*?\],\n  "similar":/m;
if (regex.test(fileContent)) {
  const newContent = fileContent.replace(regex, `"reviews": ${JSON.stringify(newReviews, null, 4)},\n  "similar":`);
  fs.writeFileSync('src/data/resort.ts', newContent);
  console.log("Updated reviews successfully");
} else {
  console.log("Could not find reviews regex match");
}
