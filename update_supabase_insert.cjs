const fs = require('fs');
let content = fs.readFileSync('src/pages/Enquire.tsx', 'utf8');

const oldInsert = `.from('one and only inquries')
          .insert([
            {
              name: fullName,
              email: emailValue,
              phone: fullPhone,
              dates: datesStr,
              guests: guestsStr,
              primary_villa: roomChoice1,
              alternative_villa: roomChoice2,
              meal_plan: mealPlan,
              nationality: nationality.name,
              message: notesValue
            }
          ]);`;

const newInsert = `.from('soneva_jani_inquiries')
          .insert([
            { 
              full_name: fullName,
              email: emailValue,
              nationality: nationality.name,
              phone: fullPhone,
              check_in_date: checkInDate?.toISOString() || null,
              check_out_date: checkOutDate?.toISOString() || null,
              adults: adults,
              children: children,
              infants: infants,
              room_choice_1: roomChoice1,
              room_choice_2: roomChoice2,
              meal_plan: mealPlan,
              special_requests: notesValue,
              agreed_to_privacy: agreedToPrivacy
            }
          ]);`;

content = content.replace(oldInsert, newInsert);
fs.writeFileSync('src/pages/Enquire.tsx', content, 'utf8');
