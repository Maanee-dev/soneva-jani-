import { Link } from 'react-router-dom';
import React from 'react';

export const BookingInformation = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Booking Information & Policies</h2>
    <p><strong>Platform:</strong> <a href="https://sonevajani.maldivesofficial.com" className="text-[#732E24] hover:underline font-medium">sonevajani.maldivesofficial.com</a></p>
    <p><strong>Operated by:</strong> Maldives Serenity Travels (Sole Proprietorship, Reg: SP02722025, Travel Agency Activity: BP22342025)</p>

    <p>Welcome to the Booking Information directory for <strong>sonevajani.maldivesofficial.com</strong>. This platform is an independent Maldivian travel agency booking and stay enquiry service dedicated to luxury escapes at <strong>Soneva Jani</strong>, Maldives. All bookings, quotations, and travel arrangements are facilitated directly through <strong>Maldives Serenity Travels</strong>.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Booking Policies & Travel Guides</h2>
    <p>Please review our official terms, payment schedules, cancellation provisions, and Maldives travel requirements:</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <Link to="/terms-and-conditions" className="block p-5 border border-gray-200 rounded-xl hover:border-[#732E24] transition-colors group bg-white/40">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#732E24] transition-colors mb-2">Terms and Conditions</h3>
        <p className="text-sm text-gray-600">Contractual terms, binding agreements, guest obligations, liability limitations, and dispute resolution under Maldivian law.</p>
      </Link>

      <Link to="/booking-policy" className="block p-5 border border-gray-200 rounded-xl hover:border-[#732E24] transition-colors group bg-white/40">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#732E24] transition-colors mb-2">Booking Policy</h3>
        <p className="text-sm text-gray-600">Enquiry workflows, quotation validity windows, reservation confirmation criteria, and villa availability terms.</p>
      </Link>

      <Link to="/cancellation-policy" className="block p-5 border border-gray-200 rounded-xl hover:border-[#732E24] transition-colors group bg-white/40">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#732E24] transition-colors mb-2">Cancellation Policy</h3>
        <p className="text-sm text-gray-600">Standard cancellation timelines, non-refundable promotional rates, early departures, and refund processing terms.</p>
      </Link>

      <Link to="/payment-policy" className="block p-5 border border-gray-200 rounded-xl hover:border-[#732E24] transition-colors group bg-white/40">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#732E24] transition-colors mb-2">Payment Policy</h3>
        <p className="text-sm text-gray-600">Deposit requirements, final settlement dates (60 days prior), accepted methods (Cards, Wire/SWIFT), and USD currency terms.</p>
      </Link>

      <Link to="/travel-information" className="block p-5 border border-gray-200 rounded-xl hover:border-[#732E24] transition-colors group bg-white/40 md:col-span-2">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#732E24] transition-colors mb-2">Travel Information</h3>
        <p className="text-sm text-gray-600">Passport validity rules, tourist visa on arrival, IMUGA traveller declaration, seaplane transfers, baggage restrictions, and resort check-in.</p>
      </Link>
    </div>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Independent Platform Notice</h2>
    <p><strong>sonevajani.maldivesofficial.com</strong> is operated independently by <strong>Maldives Serenity Travels</strong> and is <strong>not</strong> the official website of <strong>Soneva Jani</strong>.</p>
    <p>Maldives Serenity Travels acts as an independent Maldivian travel agency arranging luxury accommodation and associated transfer services with Soneva Jani and relevant suppliers.</p>

    <div className="bg-white/60 border border-gray-200 p-6 rounded-xl mt-8">
      <h3 className="text-base font-semibold text-gray-900 mb-2">Need Assistance With Your Booking?</h3>
      <p className="text-sm mb-4 text-gray-600">Our reservations specialists are available to provide personalized rate quotes, villa recommendations, and bespoke stay arrangements.</p>
      <Link to="/enquire" className="inline-block px-6 py-3 bg-[#732E24] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#954034] transition-colors rounded">
        Request a Personalised Quote
      </Link>
    </div>
  </div>
);

export const TermsAndConditions = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Terms of Service</h2>
    <p><strong>Last Updated: August 2026</strong></p>

    <p><strong>Maldives Serenity Travels</strong> is a registered sole proprietorship in the Republic of Maldives, operating under registration <strong>SP02722025</strong> and entity reference <strong>2025SP00636E</strong>.</p>

    <p>Maldives Serenity Travels is registered to conduct <strong>Travel Agency Activities (ISIC 7911)</strong> under Business Activity Registration <strong>BP22342025</strong>, issued on <strong>06 March 2025</strong>.</p>

    <p>All bookings, payments, quotations, confirmations, and contracts made through this Platform are entered into directly with <strong>Maldives Serenity Travels</strong>.</p>

    <p><strong>sonevajani.maldivesofficial.com</strong> is an online travel and booking platform owned and operated by <strong>Maldives Serenity Travels</strong> and is <strong>not</strong> the official website of <strong>Soneva Jani</strong>.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">1. Definitions</h2>
    <p>For the purposes of these Terms:</p>
    <p><strong>"Maldives Serenity Travels," "Company," "we," "us," or "our"</strong> refers to <strong>Maldives Serenity Travels</strong>, a sole proprietorship registered in the Republic of Maldives.</p>
    <p><strong>"Platform"</strong> refers to the website <strong>sonevajani.maldivesofficial.com</strong> and associated booking, enquiry, quotation, and travel services operated by <strong>Maldives Serenity Travels</strong>.</p>
    <p><strong>"You," "guest," "traveller," or "customer"</strong> refers to any individual making an enquiry, requesting a quotation, making a booking, or otherwise using the Platform.</p>
    <p><strong>"Resort"</strong> refers to <strong>Soneva Jani</strong>, an independent third-party accommodation and hospitality provider.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">2. Booking Process & Contract Formation</h2>
    <p>Submitting an enquiry, availability request, or quotation request through the Platform does <strong>not</strong> constitute a confirmed reservation.</p>
    <p>Prices and availability displayed or communicated prior to confirmation may be subject to change until the booking is formally confirmed.</p>
    <p>A binding booking agreement is formed only when:</p>
    <ol className="list-decimal pl-6 space-y-2 mb-4">
      <li><strong>Maldives Serenity Travels</strong> issues a formal booking confirmation; and</li>
      <li>The required deposit or full payment specified in the quotation or confirmation has been received.</li>
    </ol>
    <p>Payments for bookings made through the Platform are collected or arranged by <strong>Maldives Serenity Travels</strong> through its authorised payment channels.</p>
    <p>Where applicable, a separate confirmation, booking reference, or voucher from the Resort or supplier may also be issued.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">3. Payments & Pricing</h2>
    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Deposit Requirements</h3>
    <p>A deposit, typically <strong>30% of the total booking value</strong>, may be required at the time of confirmation unless a different payment requirement is stated in your quotation or booking confirmation.</p>

    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Final Payment</h3>
    <p>Unless otherwise stated in your quotation, the outstanding balance must generally be settled no later than <strong>60 days before the scheduled arrival date</strong>.</p>
    <p>Bookings made closer to the arrival date may require <strong>100% payment at the time of confirmation</strong>.</p>
    <p>The payment terms stated in your individual quotation or booking confirmation will take precedence.</p>

    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Currency</h3>
    <p>Unless otherwise specified, prices are quoted in <strong>United States Dollars (USD)</strong>.</p>
    <p>Where payment is processed in another currency, exchange rates and foreign currency charges may be determined by the relevant bank, card issuer, or payment processor.</p>

    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Payment Methods</h3>
    <p>Available payment methods may include:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Major credit or debit cards;</li>
      <li>Telegraphic Transfer / Bank Transfer; and</li>
      <li>Other authorised payment methods communicated by <strong>Maldives Serenity Travels</strong>.</li>
    </ul>
    <p>Credit card or payment processing charges may apply where permitted and will be disclosed where applicable.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">4. Cancellation, Amendment & Refund Policy</h2>
    <p>Cancellation and amendment conditions may vary depending on the Resort, travel dates, room category, promotional offer, meal plan, and supplier conditions.</p>
    <p>Unless different cancellation conditions are stated in your quotation or booking confirmation, the following standard policy may apply:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li><strong>90 days or more before arrival:</strong> Full refund less a <strong>USD 100</strong> administrative fee.</li>
      <li><strong>60–89 days before arrival:</strong> Up to <strong>75% refund</strong>.</li>
      <li><strong>30–59 days before arrival:</strong> Up to <strong>50% refund</strong>.</li>
      <li><strong>0–29 days before arrival:</strong> <strong>Non-refundable</strong>.</li>
    </ul>
    <p>Where the Resort or supplier applies stricter cancellation conditions, <strong>the cancellation terms stated in the customer's quotation or booking confirmation shall prevail</strong> over the standard policy above.</p>
    <p>Refunds, where applicable, will normally be returned through the original payment method wherever reasonably possible. Bank charges, payment processing fees, exchange-rate differences, and other non-refundable transaction costs may be deducted where applicable.</p>

    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">No-Shows and Early Departures</h3>
    <p>Failure to arrive for a confirmed booking, or early departure after check-in, may result in <strong>100% cancellation charges</strong> unless otherwise agreed by the Resort.</p>

    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Force Majeure</h3>
    <p>In circumstances outside the reasonable control of <strong>Maldives Serenity Travels</strong>, including but not limited to natural disasters, extreme weather, pandemics, government restrictions, political instability, transportation disruption, or other force majeure events, <strong>Maldives Serenity Travels</strong> will make reasonable efforts to coordinate with the Resort and relevant suppliers regarding:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Date changes;</li>
      <li>Credit vouchers;</li>
      <li>Alternative arrangements; or</li>
      <li>Refunds where permitted by the supplier.</li>
    </ul>
    <p>Any credit, amendment, or refund remains subject to the conditions imposed by the relevant Resort or supplier.</p>

    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Travel Insurance</h3>
    <p>Guests are strongly encouraged to obtain comprehensive travel insurance covering, where appropriate:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Trip cancellation;</li>
      <li>Medical emergencies;</li>
      <li>Flight disruption;</li>
      <li>Baggage loss;</li>
      <li>Travel delays; and</li>
      <li>Other unforeseen circumstances.</li>
    </ul>
    <p>Travel insurance is <strong>not automatically included</strong> with a booking unless specifically stated in your quotation.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">5. Resort, Transfers & Third-Party Services</h2>
    <p><strong>Maldives Serenity Travels</strong> facilitates reservations with resorts, transportation providers, and other travel suppliers.</p>
    <p><strong>Soneva Jani is an independent third-party service provider.</strong></p>
    <p><strong>Maldives Serenity Travels</strong> does not own or operate <strong>Soneva Jani</strong> and does not control the Resort's day-to-day operations.</p>
    <p>Resort facilities, restaurants, excursions, transfers, room configurations, operating hours, amenities, activities, and other services may be changed, suspended, or withdrawn by the Resort without prior notice.</p>
    <p>Where <strong>Maldives Serenity Travels</strong> has correctly booked the services requested by the guest, <strong>Maldives Serenity Travels</strong> shall not be responsible for operational failures, maintenance issues, service interruptions, injuries, accidents, or other matters occurring under the direct control of the Resort or another independent supplier, except where liability cannot legally be excluded.</p>
    <p>Nothing within these Terms is intended to exclude any liability that cannot lawfully be excluded under applicable Maldivian law.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">6. Guest Responsibilities</h2>
    <p>Guests are responsible for ensuring that all traveller information supplied to <strong>Maldives Serenity Travels</strong> is accurate.</p>
    <p>Guests are also responsible for ensuring they meet all applicable travel requirements, including:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Holding a valid passport;</li>
      <li>Meeting applicable passport validity requirements;</li>
      <li>Obtaining required visas or entry permissions;</li>
      <li>Meeting immigration requirements;</li>
      <li>Meeting customs requirements;</li>
      <li>Meeting applicable health or vaccination requirements; and</li>
      <li>Ensuring passenger names correspond with travel documents.</li>
    </ul>
    <p><strong>Maldives Serenity Travels</strong> is not responsible for denied boarding, denied entry, additional expenses, or cancellation charges arising from a guest's failure to meet applicable travel requirements.</p>
    <p>Guests should verify the latest entry requirements with the appropriate government authorities before travelling.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">7. Taxes, Green Tax & Government Charges</h2>
    <p>Applicable Maldives government taxes, service charges, Green Tax, transfer fees, and other mandatory charges will be included or clearly identified within the quotation where applicable.</p>
    <p>If a government authority introduces or changes a mandatory tax, fee, levy, or charge after a booking has been made, the guest may be required to pay the additional amount where the Resort, supplier, or applicable law requires it.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
    <p>Unless otherwise stated, the design, written content, branding, website elements, and original materials published on this Platform are owned by or licensed to <strong>Maldives Serenity Travels</strong>.</p>
    <p>Names, photographs, logos, trademarks, videos, and other intellectual property relating to <strong>Soneva Jani</strong> remain the property of their respective owners.</p>
    <p>The use of resort names, images, or information on this Platform is intended to identify and market travel services relating to the respective resort and does not imply that this Platform is the Resort's official website.</p>
    <p>Users may not copy, reproduce, distribute, modify, republish, or commercially exploit Platform content without appropriate permission.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">9. Independent Platform Disclaimer</h2>
    <p><strong>sonevajani.maldivesofficial.com</strong> is operated independently by <strong>Maldives Serenity Travels</strong>.</p>
    <p>It is a travel agency booking and enquiry platform and <strong>is not the official website of Soneva Jani</strong>.</p>
    <p>References to <strong>Soneva Jani</strong>, including its name, photographs, accommodation categories, amenities, and other resort information, are provided for travel planning, marketing, and booking purposes.</p>
    <p><strong>Soneva Jani</strong> remains responsible for the provision and operation of resort services supplied directly by the Resort.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">10. Accuracy of Information</h2>
    <p><strong>Maldives Serenity Travels</strong> makes reasonable efforts to ensure that prices, descriptions, photographs, facilities, inclusions, and other information displayed on the Platform are accurate.</p>
    <p>However, resort information and pricing may change from time to time.</p>
    <p>In the event of an obvious pricing, technical, or data-entry error, <strong>Maldives Serenity Travels</strong> reserves the right to correct the error before the booking is confirmed.</p>
    <p>The final quotation and booking confirmation issued by <strong>Maldives Serenity Travels</strong> will determine the services, inclusions, pricing, and conditions applicable to the booking.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">11. Governing Law & Dispute Resolution</h2>
    <p>These Terms of Service and any booking agreement entered into with <strong>Maldives Serenity Travels</strong> shall be governed by the <strong>laws of the Republic of Maldives</strong>.</p>
    <p>Guests are encouraged to contact <strong>Maldives Serenity Travels</strong> first if they experience any issue relating to their reservation so that reasonable efforts can be made to resolve the matter.</p>
    <p>Where a dispute cannot be resolved amicably, it shall be subject to the jurisdiction of the competent courts of the Republic of Maldives or another dispute-resolution mechanism agreed between the parties.</p>

    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Registered Business Details</h3>
    <p>
      <strong>Maldives Serenity Travels</strong><br />
      Sole Proprietorship<br />
      Registration: <strong>SP02722025</strong><br />
      Entity Reference: <strong>2025SP00636E</strong><br />
      Travel Agency Business Activity Registration: <strong>BP22342025</strong><br />
      Business Activity: <strong>7911 – Travel Agency Activities</strong>
    </p>

    <p className="mt-4">
      <strong>Registered/Business Address:</strong><br />
      H9-19-13, Buruzumagu<br />
      20139, K. Hulhumalé<br />
      Republic of Maldives
    </p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">12. Changes to These Terms</h2>
    <p><strong>Maldives Serenity Travels</strong> reserves the right to amend or update these Terms of Service from time to time.</p>
    <p>Updated Terms will become effective when published on the Platform unless otherwise stated.</p>
    <p>Changes made after a confirmed booking will not retrospectively replace the contractual terms applicable to that booking unless required by law or agreed between the parties.</p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <h2 className="text-xl font-medium text-gray-900 mb-4">Important Notice</h2>
      <p className="mb-4"><strong>Maldives Serenity Travels is an independent Maldivian travel agency. sonevajani.maldivesofficial.com is not the official website of Soneva Jani.</strong></p>
      <p className="mb-4">Bookings made through this Platform are arranged by <strong>Maldives Serenity Travels</strong> with the Resort and/or other travel suppliers.</p>
      <p className="mb-4">These Terms are intended to describe the general contractual relationship between <strong>Maldives Serenity Travels</strong> and its customers. Specific Resort, supplier, promotional, cancellation, and payment conditions stated in an individual quotation or booking confirmation may also apply.</p>
      <p><strong>Legal Review:</strong> These Terms should be reviewed by qualified legal counsel in the Republic of Maldives before final publication.</p>
    </div>
  </div>
);

export const BookingPolicy = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Booking Policy</h2>
    <p><strong>Last Updated: August 2026</strong></p>

    <p>This Booking Policy applies to reservations, enquiries, quotations, and booking requests made through <strong>sonevajani.maldivesofficial.com</strong>, operated by <strong>Maldives Serenity Travels</strong>.</p>
    <p><strong>Maldives Serenity Travels</strong> is a registered sole proprietorship in the Republic of Maldives under registration <strong>SP02722025</strong>, entity reference <strong>2025SP00636E</strong>, and Travel Agency Business Activity Registration <strong>BP22342025</strong>.</p>
    <p>The Platform is an independent travel agency booking platform and is <strong>not the official website of Soneva Jani</strong>.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">1. Booking Requests</h2>
    <p>Submitting an enquiry, quotation request, availability request, or booking request through the Platform does not constitute a confirmed reservation.</p>
    <p>All reservations are subject to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Resort availability;</li>
      <li>Applicable rates;</li>
      <li>Minimum-stay requirements;</li>
      <li>Room or villa availability;</li>
      <li>Meal-plan availability;</li>
      <li>Transfer availability;</li>
      <li>Applicable promotions;</li>
      <li>Guest nationality or residency restrictions where relevant; and</li>
      <li>Resort and supplier conditions.</li>
    </ul>
    <p>Prices and availability may change until the booking has been formally confirmed.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">2. Quotation Validity</h2>
    <p>Quotations issued by Maldives Serenity Travels are valid for the period stated in the quotation.</p>
    <p>Unless explicitly stated otherwise, a quotation:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Does not hold accommodation;</li>
      <li>Does not guarantee availability;</li>
      <li>Does not guarantee the quoted price beyond its stated validity period; and</li>
      <li>May be withdrawn or amended if the Resort changes its rates or conditions.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">3. Booking Confirmation</h2>
    <p>A reservation is considered confirmed only after:</p>
    <ol className="list-decimal pl-6 space-y-2 mb-4">
      <li>Maldives Serenity Travels receives the required deposit or full payment;</li>
      <li>The booking is accepted by the Resort or relevant supplier; and</li>
      <li>Maldives Serenity Travels issues a formal booking confirmation.</li>
    </ol>
    <p>Guests should not make irreversible travel arrangements based solely on an enquiry or quotation.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">4. Guest Information</h2>
    <p>Guests must provide accurate information when confirming a booking, including where required:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Full names as shown on passports;</li>
      <li>Nationality;</li>
      <li>Date of birth;</li>
      <li>Children's ages;</li>
      <li>Travel dates;</li>
      <li>Flight information;</li>
      <li>Contact information;</li>
      <li>Special dietary requirements; and</li>
      <li>Other information required by the Resort.</li>
    </ul>
    <p>Maldives Serenity Travels is not responsible for additional charges or complications caused by incorrect information supplied by the guest.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">5. Children and Occupancy</h2>
    <p>Child policies, maximum occupancy, extra-bed arrangements, and age classifications are determined by the Resort.</p>
    <p>A guest classified as a child by one travel provider may be classified as an adult by another.</p>
    <p>The final quotation will reflect the Resort's applicable occupancy and age policies.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">6. Special Requests</h2>
    <p>Requests for specific villa locations, adjoining rooms, dietary requirements, celebrations, early check-in, late check-out, or other preferences will be forwarded to the Resort.</p>
    <p>Unless explicitly confirmed in writing, special requests are not guaranteed.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">7. Transfers</h2>
    <p>Soneva Jani is generally accessed through a resort-arranged transfer from Velana International Airport.</p>
    <p>Transfer arrangements, schedules, prices, baggage allowances, and operating conditions are subject to Resort or transfer-provider rules.</p>
    <p>Guests must provide accurate international flight information where required.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">8. Changes to Confirmed Bookings</h2>
    <p>Any request to change:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Travel dates;</li>
      <li>Guest names;</li>
      <li>Villa category;</li>
      <li>Meal plan;</li>
      <li>Number of guests; or</li>
      <li>Other confirmed arrangements</li>
    </ul>
    <p>is subject to availability and approval by the Resort.</p>
    <p>Additional charges may apply.</p>
    <p>A booking amendment may also cause an existing promotion or rate to become unavailable.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">9. Resort Changes</h2>
    <p>Facilities, restaurants, activities, services, menus, operating hours, transfers, and amenities may be changed by the Resort without notice.</p>
    <p>Maldives Serenity Travels will make reasonable efforts to communicate significant changes where we are informed of them.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">10. Independent Platform Notice</h2>
    <p><strong>sonevajani.maldivesofficial.com is operated by Maldives Serenity Travels and is not the official website of Soneva Jani.</strong></p>
    <p>Maldives Serenity Travels acts as the travel agency facilitating the reservation.</p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <p><strong>Legal Review:</strong> This policy should be reviewed by qualified legal counsel before final publication.</p>
    </div>
  </div>
);

export const CancellationPolicy = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Cancellation Policy</h2>
    <p><strong>Last Updated: August 2026</strong></p>

    <p>This Cancellation Policy applies to bookings arranged through <strong>sonevajani.maldivesofficial.com</strong> by <strong>Maldives Serenity Travels</strong>.</p>
    <p>Cancellation conditions may differ depending on the Resort, travel period, room type, promotion, supplier, and rate selected.</p>
    <p>The conditions contained in the guest's final quotation or booking confirmation will take precedence where they differ from this general policy.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">1. Cancellation Requests</h2>
    <p>All cancellation requests must be submitted in writing to Maldives Serenity Travels.</p>
    <p>A cancellation is not considered processed until Maldives Serenity Travels confirms receipt of the request.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">2. Standard Cancellation Terms</h2>
    <p>Unless otherwise specified in the quotation or booking confirmation, the following general cancellation terms may apply:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li><strong>90 days or more before arrival:</strong> Refund less a USD 100 administrative fee.</li>
      <li><strong>60–89 days before arrival:</strong> Up to 75% refund.</li>
      <li><strong>30–59 days before arrival:</strong> Up to 50% refund.</li>
      <li><strong>0–29 days before arrival:</strong> Non-refundable.</li>
    </ul>
    <p>These are general terms only.</p>
    <p>Special promotional rates, festive-season bookings, early-bird rates, honeymoon offers, or other discounted rates may have stricter cancellation conditions.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">3. Supplier Cancellation Terms</h2>
    <p>Where Soneva Jani or another supplier applies more restrictive cancellation conditions, those conditions will apply to the booking.</p>
    <p>The cancellation policy shown in the final quotation or booking confirmation shall therefore take priority over any general cancellation conditions published on the Platform.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">4. Non-Refundable Rates</h2>
    <p>Certain bookings may be sold on a fully or partially non-refundable basis.</p>
    <p>Where a booking is marked non-refundable:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Cancellation may result in the loss of the full amount paid;</li>
      <li>Date changes may not be permitted; and</li>
      <li>Name changes may be subject to approval or fees.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">5. No-Shows</h2>
    <p>Failure to arrive on the confirmed check-in date without prior cancellation may be treated as a no-show.</p>
    <p>No-show bookings may be subject to <strong>100% cancellation charges</strong>.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">6. Early Departure</h2>
    <p>Guests who leave the Resort earlier than the confirmed departure date may not be entitled to a refund for unused nights, meals, transfers, or other booked services.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">7. Amendments</h2>
    <p>Date changes and booking amendments may be subject to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Revised rates;</li>
      <li>Additional charges;</li>
      <li>New cancellation conditions;</li>
      <li>Availability restrictions; and</li>
      <li>Loss of previously applied promotions.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">8. Refund Processing</h2>
    <p>Approved refunds will normally be processed through the original payment method where possible.</p>
    <p>Refund amounts may be reduced by:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Bank fees;</li>
      <li>Card-processing fees;</li>
      <li>Payment gateway fees;</li>
      <li>Foreign exchange differences;</li>
      <li>Administrative charges; and</li>
      <li>Non-refundable supplier charges.</li>
    </ul>
    <p>The time required for funds to appear in the guest's account may depend on the bank or payment provider.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">9. Force Majeure</h2>
    <p>If travel is affected by circumstances beyond reasonable control, such as:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Natural disasters;</li>
      <li>Severe weather;</li>
      <li>Government restrictions;</li>
      <li>Pandemics;</li>
      <li>Political instability;</li>
      <li>Airport closures; or</li>
      <li>Major transport disruptions,</li>
    </ul>
    <p>Maldives Serenity Travels will work with the Resort or supplier to explore reasonable options. These may include:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Date changes;</li>
      <li>Credit vouchers;</li>
      <li>Alternative arrangements; or</li>
      <li>Refunds where permitted.</li>
    </ul>
    <p>No specific refund or rebooking outcome can be guaranteed unless agreed by the relevant supplier.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">10. Travel Insurance</h2>
    <p>Guests are strongly advised to purchase travel insurance covering cancellation, medical emergencies, delays, and other unexpected events.</p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <p><strong>Legal Review:</strong> This policy should be reviewed by qualified legal counsel before final publication.</p>
    </div>
  </div>
);

export const PaymentPolicy = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Payment Policy</h2>
    <p><strong>Last Updated: August 2026</strong></p>

    <p>This Payment Policy applies to bookings made through <strong>sonevajani.maldivesofficial.com</strong>, operated by <strong>Maldives Serenity Travels</strong>.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">1. Payment Requirements</h2>
    <p>The deposit and payment schedule applicable to each reservation will be stated in the quotation or booking confirmation.</p>
    <p>Unless otherwise specified, Maldives Serenity Travels may require:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>A deposit at the time of booking; and</li>
      <li>Final payment before the guest's arrival.</li>
    </ul>
    <p>A typical deposit may be approximately <strong>30% of the total booking value</strong>.</p>
    <p>However, this amount may vary depending on the Resort's terms and the proximity of the arrival date.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">2. Final Payment</h2>
    <p>Unless different terms are stated in the quotation, final payment may be required no later than <strong>60 days before arrival</strong>.</p>
    <p>Bookings made close to the arrival date may require <strong>100% payment at the time of confirmation</strong>.</p>
    <p>The payment deadline shown in the guest's individual quotation or booking confirmation always takes precedence.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">3. Payment Methods</h2>
    <p>Maldives Serenity Travels may accept payment through:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Credit cards;</li>
      <li>Debit cards;</li>
      <li>Telegraphic Transfer;</li>
      <li>Bank Transfer; or</li>
      <li>Other authorised payment methods communicated to the guest.</li>
    </ul>
    <p>Available methods may vary depending on the booking value, guest location, currency, and payment provider.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">4. Currency</h2>
    <p>Unless otherwise stated, quotations are issued in <strong>United States Dollars (USD)</strong>.</p>
    <p>If payment is made in another currency, the final converted amount may vary due to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Bank exchange rates;</li>
      <li>Card-provider exchange rates;</li>
      <li>Currency conversion fees; and</li>
      <li>Payment processor charges.</li>
    </ul>
    <p>Maldives Serenity Travels is not responsible for exchange-rate differences imposed by banks or card issuers.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">5. Card Processing Charges</h2>
    <p>Credit or debit card payments may be subject to a processing fee where permitted.</p>
    <p>Any applicable surcharge will be disclosed before payment where practicable.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">6. Bank Transfers</h2>
    <p>For bank transfers:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Guests must ensure the full amount due is received;</li>
      <li>Bank charges should normally be borne by the sender unless stated otherwise;</li>
      <li>The booking may not be considered paid until cleared funds are received; and</li>
      <li>Proof of transfer may be requested.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">7. Payment Confirmation</h2>
    <p>A payment receipt or acknowledgement may be issued once payment has been received.</p>
    <p>Payment alone does not necessarily constitute confirmation of accommodation until the Resort has accepted the booking and Maldives Serenity Travels has issued a booking confirmation.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">8. Failed or Reversed Payments</h2>
    <p>If a transaction is:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Declined;</li>
      <li>Reversed;</li>
      <li>Charged back;</li>
      <li>Cancelled; or</li>
      <li>Otherwise not successfully settled,</li>
    </ul>
    <p>Maldives Serenity Travels may suspend or cancel the booking if payment is not resolved within the required period.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">9. Payment Deadlines</h2>
    <p>Failure to make payment by the deadline shown in the booking confirmation may result in:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Cancellation of the booking;</li>
      <li>Release of accommodation;</li>
      <li>Loss of promotional rates; or</li>
      <li>Application of cancellation charges.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">10. Fraud Prevention</h2>
    <p>Maldives Serenity Travels may request additional verification for transactions where necessary.</p>
    <p>This may include confirmation of the cardholder, billing information, identification, or other reasonable fraud-prevention checks.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">11. Taxes and Charges</h2>
    <p>The quotation will indicate whether applicable charges such as:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Maldives GST;</li>
      <li>Service charges;</li>
      <li>Green Tax;</li>
      <li>Transfers; and</li>
      <li>Other mandatory charges</li>
    </ul>
    <p>are included.</p>
    <p>If a government-mandated tax or fee changes after confirmation, the additional amount may be payable where legally required or imposed by the Resort or supplier.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">12. Refunds</h2>
    <p>Refunds are governed by the applicable Cancellation Policy and the terms of the individual booking.</p>
    <p>Approved refunds will generally be returned through the original payment method.</p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <p><strong>Legal Review:</strong> This policy should be reviewed by qualified legal counsel before publication.</p>
    </div>
  </div>
);

export const TravelInformation = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Travel Information</h2>
    <p><strong>Last Updated: August 2026</strong></p>

    <p>The following information is provided to help guests prepare for travel to the Maldives and stays booked through <strong>sonevajani.maldivesofficial.com</strong>.</p>
    <p>Travel requirements can change, so guests should always verify current requirements before departure.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">1. Passport Requirements</h2>
    <p>Guests are responsible for travelling with a valid passport accepted by Maldivian immigration authorities.</p>
    <p>Your passport should:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Be valid for the required period for entry;</li>
      <li>Be undamaged and machine-readable where required; and</li>
      <li>Match the name used on your booking and flight reservation.</li>
    </ul>
    <p>Guests should check official entry requirements before travelling.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">2. Visa and Entry Requirements</h2>
    <p>Tourists travelling to the Maldives may be subject to entry requirements including:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Immigration clearance;</li>
      <li>Confirmed accommodation;</li>
      <li>Proof of onward or return travel; and</li>
      <li>Other requirements imposed by Maldivian authorities.</li>
    </ul>
    <p>Visa requirements may vary depending on nationality.</p>
    <p>Maldives Serenity Travels cannot guarantee entry into the Maldives.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">3. Traveller Declaration</h2>
    <p>Visitors may be required to complete an official traveller or immigration declaration before arriving in or departing from the Maldives.</p>
    <p>Guests are responsible for completing any required declarations within the applicable timeframe.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">4. Health Requirements</h2>
    <p>Guests are responsible for checking current health requirements applicable to their nationality and travel history.</p>
    <p>This may include requirements relating to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Vaccinations;</li>
      <li>Yellow fever certificates;</li>
      <li>Health declarations; or</li>
      <li>Other public-health measures.</li>
    </ul>
    <p>Guests requiring prescription medication should travel with sufficient medication and supporting documentation where appropriate.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">5. Arrival at Velana International Airport</h2>
    <p>Most international guests arrive through <strong>Velana International Airport (MLE)</strong>.</p>
    <p>After clearing immigration and collecting luggage, guests with a confirmed Soneva Jani reservation should follow the transfer instructions provided with their booking.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">6. Transfers to Soneva Jani</h2>
    <p>Transfers between Velana International Airport and Soneva Jani are normally arranged through the Resort or its authorised transfer providers.</p>
    <p>Transfer arrangements may depend on:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>International flight arrival time;</li>
      <li>Weather;</li>
      <li>Sea conditions;</li>
      <li>Operational schedules; and</li>
      <li>Other Resort requirements.</li>
    </ul>
    <p>Guests must provide accurate flight information before arrival.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">7. Flight Changes and Delays</h2>
    <p>Guests should inform Maldives Serenity Travels promptly if their international flight:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Is cancelled;</li>
      <li>Changes arrival time;</li>
      <li>Is significantly delayed; or</li>
      <li>Changes flight number.</li>
    </ul>
    <p>Transfer arrangements may need to be amended.</p>
    <p>Additional charges imposed by the Resort or transfer provider may apply.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">8. Baggage</h2>
    <p>International airline baggage limits are determined by the airline.</p>
    <p>Any transfer operator may also impose separate baggage requirements.</p>
    <p>Guests should check baggage allowances before travel, particularly when travelling with:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Oversized luggage;</li>
      <li>Sports equipment;</li>
      <li>Diving equipment;</li>
      <li>Surfboards; or</li>
      <li>Excess baggage.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">9. Check-In and Check-Out</h2>
    <p>Standard Resort check-in and check-out times will be stated in your booking documents or determined by Soneva Jani.</p>
    <p>Early check-in and late check-out are subject to availability and may incur additional charges.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">10. Green Tax and Resort Charges</h2>
    <p>Visitors to the Maldives may be subject to Green Tax and other government charges.</p>
    <p>Your quotation should indicate whether these charges are included.</p>
    <p>Guests may also incur additional Resort charges for services not included in their booking.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">11. Weather</h2>
    <p>The Maldives has a tropical climate.</p>
    <p>Weather conditions can change quickly and may affect:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Sea transfers;</li>
      <li>Water activities;</li>
      <li>Excursions;</li>
      <li>Outdoor dining;</li>
      <li>Diving; and</li>
      <li>Other Resort activities.</li>
    </ul>
    <p>Unfavourable weather does not automatically create an entitlement to a refund unless stated in the booking terms.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">12. Dress and Cultural Considerations</h2>
    <p>Resort islands generally have relaxed dress standards.</p>
    <p>However, guests travelling through local islands or public areas should respect local customs and applicable Maldivian laws.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">13. Alcohol</h2>
    <p>Alcohol consumption is permitted at licensed tourist resorts.</p>
    <p>Guests should not bring prohibited alcoholic products into the Maldives in violation of customs regulations.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">14. Travel Insurance</h2>
    <p>We strongly recommend comprehensive travel insurance covering:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Medical emergencies;</li>
      <li>Trip cancellation;</li>
      <li>Flight disruption;</li>
      <li>Travel delays;</li>
      <li>Lost baggage;</li>
      <li>Emergency evacuation; and</li>
      <li>Other unexpected events.</li>
    </ul>
    <p>Travel insurance is not included unless specifically mentioned in your booking.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">15. Special Assistance</h2>
    <p>Guests requiring assistance for:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Reduced mobility;</li>
      <li>Medical conditions;</li>
      <li>Dietary requirements;</li>
      <li>Pregnancy;</li>
      <li>Allergies; or</li>
      <li>Other specific needs</li>
    </ul>
    <p>should advise Maldives Serenity Travels before confirming the reservation so that the relevant Resort or supplier can be informed.</p>
    <p>Requests remain subject to Resort capabilities and confirmation.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">16. Important Contact Information</h2>
    <p>Guests should keep copies of:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Passport details;</li>
      <li>Flight tickets;</li>
      <li>Travel insurance;</li>
      <li>Booking confirmation;</li>
      <li>Transfer instructions; and</li>
      <li>Emergency contact details</li>
    </ul>
    <p>available during travel.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">17. Independent Platform Notice</h2>
    <p><strong>sonevajani.maldivesofficial.com is operated by Maldives Serenity Travels and is not the official website of Soneva Jani.</strong></p>
    <p>Resort operations, facilities, transfers, and on-property services remain under the control of Soneva Jani and its appointed suppliers.</p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <h2 className="text-xl font-medium text-gray-900 mb-4">Important Notice</h2>
      <p>Travel and immigration rules can change. Guests should verify current requirements with the relevant government, airline, and Resort before departure.</p>
    </div>
  </div>
);
export const PrivacyPolicy = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Privacy Policy</h2>
    <p><strong>Last Updated: August 2026</strong></p>

    <p>This Privacy Policy explains how <strong>Maldives Serenity Travels</strong> collects, uses, stores, and protects personal information when you visit or use <strong>sonevajani.maldivesofficial.com</strong>.</p>
    <p><strong>Maldives Serenity Travels</strong> is a registered sole proprietorship in the Republic of Maldives, operating under registration <strong>SP02722025</strong> and entity reference <strong>2025SP00636E</strong>.</p>
    <p>Maldives Serenity Travels is registered to conduct <strong>Travel Agency Activities (ISIC 7911)</strong> under Business Activity Registration <strong>BP22342025</strong>.</p>
    <p><strong>sonevajani.maldivesofficial.com</strong> is an independent travel agency booking and enquiry platform owned and operated by <strong>Maldives Serenity Travels</strong>. It is <strong>not the official website of Soneva Jani</strong>.</p>
    <p>By using the Platform, submitting an enquiry, requesting a quotation, or making a booking, you acknowledge the practices described in this Privacy Policy.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
    <p>We may collect personal information that you provide directly to us when using the Platform. This may include:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Full name;</li>
      <li>Email address;</li>
      <li>Telephone or WhatsApp number;</li>
      <li>Country or nationality;</li>
      <li>Travel dates;</li>
      <li>Number of adults and children travelling;</li>
      <li>Children's ages where required for pricing;</li>
      <li>Preferred villa or room category;</li>
      <li>Meal plan preferences;</li>
      <li>Special occasion information;</li>
      <li>Special requests;</li>
      <li>Flight information;</li>
      <li>Passport information where required for confirmed travel arrangements;</li>
      <li>Billing and payment information;</li>
      <li>Communication history with Maldives Serenity Travels; and</li>
      <li>Any other information voluntarily provided when requesting or managing travel services.</li>
    </ul>
    <p>We only request information that is reasonably necessary to process enquiries, quotations, bookings, payments, transfers, and related travel arrangements.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">2. Information Collected Automatically</h2>
    <p>When you visit <strong>sonevajani.maldivesofficial.com</strong>, certain technical information may be collected automatically. This may include:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>IP address;</li>
      <li>Browser type;</li>
      <li>Device type;</li>
      <li>Operating system;</li>
      <li>Approximate geographic location;</li>
      <li>Pages visited;</li>
      <li>Date and time of visits;</li>
      <li>Referral source;</li>
      <li>Website interactions;</li>
      <li>Session information; and</li>
      <li>Cookie or similar technology identifiers.</li>
    </ul>
    <p>This information may be used to operate the Platform, improve performance, understand visitor behaviour, prevent misuse, and measure the effectiveness of advertising and marketing campaigns.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
    <p>Maldives Serenity Travels may use your personal information to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Respond to enquiries;</li>
      <li>Check resort availability;</li>
      <li>Prepare personalised quotations;</li>
      <li>Process and confirm bookings;</li>
      <li>Communicate with Soneva Jani and other relevant suppliers;</li>
      <li>Arrange airport or resort transfers;</li>
      <li>Process or coordinate payments;</li>
      <li>Send booking confirmations and travel documentation;</li>
      <li>Provide customer support;</li>
      <li>Manage amendments, cancellations, and refunds;</li>
      <li>Contact you regarding your booking;</li>
      <li>Improve our Platform and services;</li>
      <li>Prevent fraudulent or unauthorised activity;</li>
      <li>Maintain business and accounting records;</li>
      <li>Comply with legal or regulatory obligations; and</li>
      <li>Send marketing communications where permitted or where you have consented.</li>
    </ul>
    <p>We will not use your personal information for purposes that are materially unrelated to those described in this Privacy Policy without an appropriate legal basis or your consent where required.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">4. Resort and Supplier Information Sharing</h2>
    <p>To provide requested travel services, Maldives Serenity Travels may need to share relevant personal information with third parties involved in your booking. These may include:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li><strong>Soneva Jani</strong>;</li>
      <li>Resort operators;</li>
      <li>Accommodation providers;</li>
      <li>Transfer companies;</li>
      <li>Domestic airlines;</li>
      <li>Speedboat or seaplane operators;</li>
      <li>Excursion providers;</li>
      <li>Payment processors;</li>
      <li>Banks and financial institutions;</li>
      <li>Travel suppliers;</li>
      <li>Technology and booking service providers; and</li>
      <li>Government or regulatory authorities where legally required.</li>
    </ul>
    <p>Only information reasonably necessary to provide the relevant service will normally be shared. Third-party suppliers process personal information according to their own privacy policies and legal obligations.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">5. Soneva Jani</h2>
    <p><strong>Soneva Jani is an independent third-party hospitality provider.</strong></p>
    <p>When you request or confirm a booking involving Soneva Jani, certain information may be provided to the Resort to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Check availability;</li>
      <li>Confirm accommodation;</li>
      <li>Register guests;</li>
      <li>Arrange transfers;</li>
      <li>Record dietary requirements;</li>
      <li>Record special occasions or requests; and</li>
      <li>Deliver the services included in your reservation.</li>
    </ul>
    <p>Maldives Serenity Travels does not control how Soneva Jani independently processes personal information once it has been provided to the Resort for legitimate booking purposes.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">6. Payment Information</h2>
    <p>Payments made in connection with bookings may be processed through banks, credit card providers, payment gateways, or other authorised financial service providers.</p>
    <p>Maldives Serenity Travels does not necessarily store complete credit or debit card details on its own systems.</p>
    <p>Payment processors may independently collect and process information such as:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Cardholder name;</li>
      <li>Card number;</li>
      <li>Expiry information;</li>
      <li>Billing address;</li>
      <li>Transaction amount; and</li>
      <li>Fraud-prevention information.</li>
    </ul>
    <p>Payment information is subject to the security and privacy practices of the relevant payment provider.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">7. Cookies and Similar Technologies</h2>
    <p>The Platform may use cookies and similar technologies to improve functionality and understand how visitors interact with the website.</p>
    <p>Cookies may be used for purposes including:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Remembering user preferences;</li>
      <li>Maintaining website sessions;</li>
      <li>Measuring traffic;</li>
      <li>Analysing website performance;</li>
      <li>Understanding visitor behaviour;</li>
      <li>Preventing fraud or abuse; and</li>
      <li>Measuring advertising effectiveness.</li>
    </ul>
    <p>Where required, users may be provided with options to manage or consent to non-essential cookies. You may also control cookies through your browser settings. Disabling certain cookies may affect some Platform functionality.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">8. Analytics and Advertising</h2>
    <p>Maldives Serenity Travels may use third-party analytics and advertising services to understand website traffic and evaluate marketing performance.</p>
    <p>These services may collect information about your interaction with the Platform using cookies, pixels, tags, or similar technologies. This may include services used for:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Website analytics;</li>
      <li>Conversion tracking;</li>
      <li>Advertising measurement;</li>
      <li>Search advertising;</li>
      <li>Remarketing; and</li>
      <li>Campaign optimisation.</li>
    </ul>
    <p>Information collected through these technologies may be processed by the relevant technology provider in accordance with its own privacy practices. Where legally required, advertising or analytics cookies will only be used after obtaining appropriate consent.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">9. WhatsApp, Email and Other Communications</h2>
    <p>If you provide your telephone number, WhatsApp number, or email address when submitting an enquiry, Maldives Serenity Travels may use those contact details to respond to your request.</p>
    <p>Communications may include:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Availability updates;</li>
      <li>Quotations;</li>
      <li>Resort recommendations;</li>
      <li>Booking information;</li>
      <li>Payment instructions;</li>
      <li>Booking confirmations;</li>
      <li>Transfer information;</li>
      <li>Important travel updates; and</li>
      <li>Follow-up messages relating to your enquiry.</li>
    </ul>
    <p>Submitting an enquiry does not automatically mean you have agreed to receive unrelated promotional communications. Where marketing communications are sent, you may request to stop receiving them at any time.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">10. Data Retention</h2>
    <p>Maldives Serenity Travels retains personal information only for as long as reasonably necessary for the purpose for which it was collected.</p>
    <p>Information may be retained for longer where necessary to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Maintain booking records;</li>
      <li>Meet accounting requirements;</li>
      <li>Resolve disputes;</li>
      <li>Process refunds;</li>
      <li>Prevent fraud;</li>
      <li>Respond to legal claims; or</li>
      <li>Comply with applicable laws and regulatory requirements.</li>
    </ul>
    <p>When information is no longer required, we may securely delete or anonymise it where reasonably practicable.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">11. Data Security</h2>
    <p>Maldives Serenity Travels takes reasonable administrative, technical, and organisational measures to protect personal information from:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Unauthorised access;</li>
      <li>Loss;</li>
      <li>Misuse;</li>
      <li>Alteration;</li>
      <li>Disclosure; and</li>
      <li>Destruction.</li>
    </ul>
    <p>However, no internet transmission, electronic communication, or storage system can be guaranteed to be completely secure. Users should therefore avoid transmitting unnecessary sensitive information through unsecured communication channels.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">12. International Data Transfers</h2>
    <p>Travel bookings may require personal information to be processed by suppliers or technology providers located outside your country of residence.</p>
    <p>By requesting international travel services, you acknowledge that relevant information may need to be transmitted to the Maldives or other jurisdictions where travel suppliers and service providers operate.</p>
    <p>Maldives Serenity Travels will take reasonable steps to ensure that information is only shared where necessary for legitimate travel or business purposes.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">13. Your Privacy Rights</h2>
    <p>Depending on applicable law and your country of residence, you may have rights relating to your personal information. These may include the right to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Request access to personal information we hold about you;</li>
      <li>Request correction of inaccurate information;</li>
      <li>Request deletion of certain personal information;</li>
      <li>Withdraw consent where processing is based on consent;</li>
      <li>Object to certain marketing communications; or</li>
      <li>Request information about how your data has been used.</li>
    </ul>
    <p>Some information may need to be retained despite a deletion request where retention is required for legal, accounting, contractual, fraud-prevention, or regulatory purposes.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">14. Children's Information</h2>
    <p>The Platform is intended for use by adults making travel arrangements.</p>
    <p>Information relating to children may be collected where necessary to prepare quotations or bookings, including:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Name;</li>
      <li>Age;</li>
      <li>Date of birth; and</li>
      <li>Passport details where required.</li>
    </ul>
    <p>This information should be provided by a parent, guardian, or authorised adult responsible for the child's travel arrangements. Maldives Serenity Travels does not knowingly use children's information for independent marketing purposes.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">15. Third-Party Websites</h2>
    <p>The Platform may contain links to:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Soneva Jani;</li>
      <li>Airlines;</li>
      <li>Payment providers;</li>
      <li>Maps;</li>
      <li>Social media platforms;</li>
      <li>Travel providers; or</li>
      <li>Other external websites.</li>
    </ul>
    <p>Maldives Serenity Travels is not responsible for the privacy practices, security, content, or operation of third-party websites. Users should review the privacy policies of third-party services before providing personal information directly to them.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">16. Independent Platform Notice</h2>
    <p><strong>sonevajani.maldivesofficial.com is owned and operated by Maldives Serenity Travels and is not the official website of Soneva Jani.</strong></p>
    <p>Information submitted through this Platform is initially provided to <strong>Maldives Serenity Travels</strong>. Where necessary to fulfil an enquiry or booking, relevant information may subsequently be shared with <strong>Soneva Jani</strong> and other suppliers involved in providing the requested travel services.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">17. Changes to This Privacy Policy</h2>
    <p>Maldives Serenity Travels may update this Privacy Policy from time to time to reflect:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Changes to our services;</li>
      <li>Changes to the Platform;</li>
      <li>Changes in technology;</li>
      <li>Changes in our business practices; or</li>
      <li>Changes in applicable legal or regulatory requirements.</li>
    </ul>
    <p>The latest version will be published on the Platform with an updated revision date. Continued use of the Platform after an updated Privacy Policy is published constitutes acknowledgement of the revised policy where permitted by applicable law.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">18. Contact and Business Information</h2>
    <p>Questions, privacy requests, corrections, or concerns regarding personal information may be directed to <strong>Maldives Serenity Travels</strong>.</p>
    
    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Registered Business Details</h3>
    <p>
      <strong>Maldives Serenity Travels</strong><br />
      Sole Proprietorship<br />
      Registration: <strong>SP02722025</strong><br />
      Entity Reference: <strong>2025SP00636E</strong><br />
      Travel Agency Business Activity Registration: <strong>BP22342025</strong><br />
      Business Activity: <strong>7911 – Travel Agency Activities</strong>
    </p>
    <p className="mt-4">
      <strong>Registered/Business Address:</strong><br />
      H9-19-13, Buruzumagu<br />
      20139, K. Hulhumalé<br />
      Republic of Maldives
    </p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <h2 className="text-xl font-medium text-gray-900 mb-4">Important Notice</h2>
      <p className="mb-4"><strong>Maldives Serenity Travels is an independent Maldivian travel agency. sonevajani.maldivesofficial.com is not the official website of Soneva Jani.</strong></p>
      <p className="mb-4">Personal information submitted through the Platform is processed primarily for responding to enquiries, preparing quotations, arranging bookings, processing payments, communicating with travel suppliers, and providing travel-related services.</p>
      <p><strong>Legal Review:</strong> This Privacy Policy is intended as a general privacy framework and should be reviewed by qualified legal counsel before final publication, particularly where the Platform markets services to customers in jurisdictions with additional privacy requirements.</p>
    </div>
  </div>
);

export const CookiePolicy = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Cookie Policy</h2>
    <p><strong>Last Updated: August 2026</strong></p>

    <p>This Cookie Policy explains how <strong>Maldives Serenity Travels</strong> uses cookies and similar tracking technologies on our website, <strong>sonevajani.maldivesofficial.com</strong>.</p>
    
    <hr className="my-8 border-gray-100" />
    
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">1. What are cookies?</h2>
    <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>
    
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">2. How we use cookies</h2>
    <p>We use cookies for the following purposes:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li><strong>Essential Cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to securely navigate our site and utilize its features.</li>
      <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us improve the way our website works.</li>
      <li><strong>Functionality Cookies:</strong> These are used to recognise you when you return to our website, enabling us to personalise our content and remember your preferences.</li>
    </ul>
    
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">3. Managing cookies</h2>
    <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
  </div>
);

export const Sitemap = (
  <div className="space-y-8 text-gray-700 font-light leading-relaxed">
    <p>Navigate through our platform using the links below:</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 border-gray-100 pb-2">Main Pages</h3>
        <ul className="space-y-3">
          <li><Link to="/" className="hover:text-[#732E24] transition-colors">Home</Link></li>
          <li><Link to="/rooms" className="hover:text-[#732E24] transition-colors">Villas & Residences (Rooms)</Link></li>
          <li><Link to="/dining" className="hover:text-[#732E24] transition-colors">Dining</Link></li>
          <li><Link to="/enquire" className="hover:text-[#732E24] transition-colors">Enquire Now</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 border-gray-100 pb-2">Explore & Company</h3>
        <ul className="space-y-3">
          <li><Link to="/#offers" className="hover:text-[#732E24] transition-colors">Special Offers</Link></li>
          <li><Link to="/about-us" className="hover:text-[#732E24] transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-[#732E24] transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 border-gray-100 pb-2">Legal & Policies</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
          <li><Link to="/booking-information" className="hover:text-[#732E24] transition-colors font-medium">Booking Information (Overview)</Link></li>
          <li><Link to="/terms-and-conditions" className="hover:text-[#732E24] transition-colors">Terms and Conditions</Link></li>
          <li><Link to="/privacy-policy" className="hover:text-[#732E24] transition-colors">Privacy Policy</Link></li>
          <li><Link to="/cookie-policy" className="hover:text-[#732E24] transition-colors">Cookie Policy</Link></li>
          <li><Link to="/booking-policy" className="hover:text-[#732E24] transition-colors">Booking Policy</Link></li>
          <li><Link to="/cancellation-policy" className="hover:text-[#732E24] transition-colors">Cancellation Policy</Link></li>
          <li><Link to="/payment-policy" className="hover:text-[#732E24] transition-colors">Payment Policy</Link></li>
          <li><Link to="/travel-information" className="hover:text-[#732E24] transition-colors">Travel Information</Link></li>
        </ul>
      </div>
    </div>
  </div>
);
export const AboutUs = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Your Maldives Travel Partner</h2>
    <p><strong>Maldives Serenity Travels</strong> is a registered travel agency in the Republic of Maldives, specialising in helping travellers discover and book exceptional resort experiences across the Maldives.</p>
    <p>As a locally based travel agency, we combine destination knowledge with personalised service to help guests find the right resort, villa category, meal plan, transfers, and special offers for their stay.</p>
    <p><strong>sonevajani.maldivesofficial.com</strong> is an independent booking and enquiry platform operated by <strong>Maldives Serenity Travels</strong>, created specifically to help travellers explore and arrange stays at <strong>Soneva Jani</strong>.</p>
    <p>We are <strong>not the official website of Soneva Jani</strong>. Reservations made through this Platform are arranged by Maldives Serenity Travels as an independent Maldivian travel agency.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Why Book With Us?</h2>
    
    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Local Maldives Expertise</h3>
    <p>Being based in the Maldives gives us first-hand knowledge of the destination, resorts, transfers, seasonal offers, and the details that can make a Maldives holiday easier to plan.</p>

    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Personalised Service</h3>
    <p>Every trip is different.</p>
    <p>Our team can help you compare:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Villa categories;</li>
      <li>Meal plans;</li>
      <li>Transfer options;</li>
      <li>Special offers;</li>
      <li>Honeymoon benefits;</li>
      <li>Family arrangements; and</li>
      <li>Other Resort experiences.</li>
    </ul>
    <p>Rather than offering a one-size-fits-all package, we aim to recommend options that suit your travel dates, preferences, and budget.</p>

    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Competitive Resort Rates</h3>
    <p>We work with travel suppliers and resort partners to source competitive rates and promotional offers.</p>
    <p>Rates may vary depending on:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Travel dates;</li>
      <li>Length of stay;</li>
      <li>Nationality or market;</li>
      <li>Villa category;</li>
      <li>Meal plan;</li>
      <li>Seasonal promotions; and</li>
      <li>Resort availability.</li>
    </ul>
    <p>Our team can check available options and prepare a personalised quotation for your stay.</p>

    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Support Before and During Your Trip</h3>
    <p>Our service does not stop when your booking is confirmed.</p>
    <p>We can assist with matters relating to your reservation, including:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Booking confirmations;</li>
      <li>Resort transfers;</li>
      <li>Flight information;</li>
      <li>Special requests;</li>
      <li>Amendments;</li>
      <li>Payment queries; and</li>
      <li>Pre-arrival information.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Soneva Jani</h2>
    <p>Soneva Jani is one of the Maldives' renowned luxury island resorts, offering private villas, beaches, dining experiences, wellness, water activities, and personalised hospitality.</p>
    <p>Through this Platform, guests can explore information relating to Soneva Jani and request personalised rates from Maldives Serenity Travels.</p>
    <p>All Resort operations, facilities, services, and on-property experiences are provided and controlled by <strong>Soneva Jani</strong>.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">How It Works</h2>
    
    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">1. Explore</h3>
    <p>Browse villas, Resort features, offers, dining, and travel information through the Platform.</p>

    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">2. Request Your Quote</h3>
    <p>Send us your:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Travel dates;</li>
      <li>Number of adults and children;</li>
      <li>Preferred villa;</li>
      <li>Meal plan preference; and</li>
      <li>Any special requirements.</li>
    </ul>

    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">3. Receive Your Personalised Offer</h3>
    <p>Our team will check available rates and prepare a quotation based on your requirements.</p>

    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">4. Confirm Your Stay</h3>
    <p>Once you are happy with the offer, we will provide payment instructions and arrange your booking with the Resort or relevant supplier.</p>

    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">5. Travel to the Maldives</h3>
    <p>After confirmation, we will provide the relevant booking and transfer information required for your arrival.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Our Commitment</h2>
    <p>Our aim is to make planning a Maldives holiday simple, transparent, and personal.</p>
    <p>We strive to provide:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Clear pricing;</li>
      <li>Responsive communication;</li>
      <li>Accurate booking information;</li>
      <li>Personalised recommendations;</li>
      <li>Transparent payment terms; and</li>
      <li>Reliable assistance throughout the booking process.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Registered Business Information</h2>
    <p>
      <strong>Maldives Serenity Travels</strong><br />
      Sole Proprietorship<br />
      Registration: <strong>SP02722025</strong><br />
      Entity Reference: <strong>2025SP00636E</strong><br />
      Travel Agency Business Activity Registration: <strong>BP22342025</strong><br />
      Business Activity: <strong>7911 – Travel Agency Activities</strong>
    </p>
    <p className="mt-4">
      <strong>Registered/Business Address:</strong><br />
      H9-19-13, Buruzumagu<br />
      20139, K. Hulhumalé<br />
      Republic of Maldives
    </p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <p><strong>Independent Platform Notice:</strong> sonevajani.maldivesofficial.com is owned and operated by Maldives Serenity Travels and is not the official website of Soneva Jani. Maldives Serenity Travels acts as an independent travel agency arranging accommodation and associated travel services with the Resort and other relevant suppliers.</p>
    </div>
  </div>
);

export const ContactUs = (
  <div className="space-y-6 text-gray-700 font-light leading-relaxed">
    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">We're Here to Help</h2>
    <p>Planning your stay at <strong>Soneva Jani</strong>?</p>
    <p>Our team at <strong>Maldives Serenity Travels</strong> can assist you with availability, personalised quotations, villa options, meal plans, transfers, special offers, and booking questions.</p>
    <p>Whether you are beginning your search or already have specific travel dates, send us your requirements and we will help you explore the available options.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Request a Quote</h2>
    <p>For the most accurate quotation, please provide:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Your travel dates;</li>
      <li>Number of adults;</li>
      <li>Number and ages of children;</li>
      <li>Nationality;</li>
      <li>Preferred villa category;</li>
      <li>Preferred meal plan;</li>
      <li>International flight details, if already booked;</li>
      <li>Whether you are travelling for a honeymoon, anniversary, birthday, or another special occasion; and</li>
      <li>Any additional requests.</li>
    </ul>
    <p>Our team will use this information to check the most suitable available rates and offers.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">General Enquiries</h2>
    <p>You can contact us regarding:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Resort availability;</li>
      <li>Villa recommendations;</li>
      <li>Rates and special offers;</li>
      <li>Honeymoon packages;</li>
      <li>Family stays;</li>
      <li>Meal plans;</li>
      <li>Airport transfers;</li>
      <li>Booking confirmations;</li>
      <li>Payment questions;</li>
      <li>Booking amendments;</li>
      <li>Cancellations;</li>
      <li>Special requests; and</li>
      <li>General Maldives travel information.</li>
    </ul>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Existing Bookings</h2>
    <p>If you already have a confirmed reservation with Maldives Serenity Travels, please include your:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Lead guest name;</li>
      <li>Booking reference, if available;</li>
      <li>Arrival and departure dates; and</li>
      <li>Details of your request.</li>
    </ul>
    <p>Providing these details will help us identify your reservation and assist you more efficiently.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Before You Contact Us</h2>
    <p>Please remember that Resort prices and availability can change until a reservation is formally confirmed.</p>
    <p>Submitting an enquiry through the Platform does <strong>not</strong> automatically reserve a villa or guarantee the displayed or quoted rate.</p>
    <p>A booking becomes confirmed only after the applicable payment requirements have been completed and formal confirmation has been issued.</p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Contact Form</h2>
    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Send Us Your Enquiry</h3>
    
    <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm space-y-6 mt-6 mb-8">
      <div>
        <p className="font-medium text-gray-900">Full Name</p>
        <p className="text-sm text-gray-500">Enter your full name.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Email Address</p>
        <p className="text-sm text-gray-500">Enter the email address where you would like to receive your quotation.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Phone / WhatsApp Number</p>
        <p className="text-sm text-gray-500">Include your international country code.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Nationality</p>
        <p className="text-sm text-gray-500">Select or enter your nationality.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Check-In Date</p>
        <p className="text-sm text-gray-500">Enter your preferred arrival date.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Check-Out Date</p>
        <p className="text-sm text-gray-500">Enter your preferred departure date.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Adults</p>
        <p className="text-sm text-gray-500">Enter the number of adult guests.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Children</p>
        <p className="text-sm text-gray-500">Enter the number and ages of children travelling.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Preferred Villa</p>
        <p className="text-sm text-gray-500">Select your preferred villa category or choose "Not Sure".</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Meal Plan</p>
        <p className="text-sm text-gray-500">Select your preferred meal plan or choose "Recommend One".</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Special Occasion</p>
        <p className="text-sm text-gray-500">Let us know if you are travelling for a honeymoon, anniversary, birthday, or another celebration.</p>
      </div>
      <div>
        <p className="font-medium text-gray-900">Message</p>
        <p className="text-sm text-gray-500">Tell us anything else we should know about your trip.</p>
      </div>
      <div className="pt-4">
        <Link to="/enquire" className="inline-block px-8 py-4 bg-[#732E24] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#954034] transition-colors">Request My Quote</Link>
      </div>
    </div>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Registered Business Information</h2>
    <p>
      <strong>Maldives Serenity Travels</strong><br />
      Sole Proprietorship<br />
      Registration: <strong>SP02722025</strong><br />
      Entity Reference: <strong>2025SP00636E</strong><br />
      Travel Agency Business Activity Registration: <strong>BP22342025</strong><br />
      Business Activity: <strong>7911 – Travel Agency Activities</strong>
    </p>
    <p className="mt-4">
      <strong>Registered/Business Address:</strong><br />
      H9-19-13, Buruzumagu<br />
      20139, K. Hulhumalé<br />
      Republic of Maldives
    </p>

    <hr className="my-8 border-gray-100" />

    <h2 className="text-xl font-medium text-gray-900 mt-8 mb-4">Platform Information</h2>
    <p><strong>Website:</strong> sonevajani.maldivesofficial.com</p>
    <p>This website is operated by <strong>Maldives Serenity Travels</strong> as an independent Maldives travel agency booking and enquiry platform.</p>

    <hr className="my-8 border-gray-100" />

    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <h2 className="text-xl font-medium text-gray-900 mb-4">Important Notice</h2>
      <p className="mb-4"><strong>sonevajani.maldivesofficial.com is not the official website of Soneva Jani.</strong></p>
      <p className="mb-4">Maldives Serenity Travels independently facilitates accommodation bookings and travel arrangements with Soneva Jani and other relevant suppliers.</p>
      <p>For matters concerning a booking made through this Platform, guests should contact <strong>Maldives Serenity Travels</strong> directly rather than contacting the Resort as their first point of contact.</p>
    </div>
  </div>
);
