/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookiePolicyButton from './components/CookiePolicyButton';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Enquire from './pages/Enquire';
import ThankYou from './pages/ThankYou';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';
import GenericPage from './pages/GenericPage';
import * as policies from './data/policies';

export default function App() {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <LoadingScreen />
      <div className="min-h-screen font-sans text-gray-900 relative flex flex-col">
        <Header />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/enquire" element={<Enquire />} />
            <Route path="/thank-you" element={<ThankYou />} />
            
            {/* Footer Pages */}
            <Route path="/booking-information" element={<GenericPage title="Booking Information" content={policies.BookingInformation} />} />
            <Route path="/about-us" element={<GenericPage title="About Us" content={policies.AboutUs} />} />
            <Route path="/contact" element={<GenericPage title="Contact Us" content={policies.ContactUs} />} />
            <Route path="/privacy-policy" element={<GenericPage title="Privacy Policy" content={policies.PrivacyPolicy} />} />
            <Route path="/terms-and-conditions" element={<GenericPage title="Terms and Conditions" content={policies.TermsAndConditions} />} />
            <Route path="/booking-policy" element={<GenericPage title="Booking Policy" content={policies.BookingPolicy} />} />
            <Route path="/cancellation-policy" element={<GenericPage title="Cancellation Policy" content={policies.CancellationPolicy} />} />
            <Route path="/payment-policy" element={<GenericPage title="Payment Policy" content={policies.PaymentPolicy} />} />
            <Route path="/travel-information" element={<GenericPage title="Travel Information" content={policies.TravelInformation} />} />
            <Route path="/cookie-policy" element={<GenericPage title="Cookie Policy" content={policies.CookiePolicy} />} />
            <Route path="/sitemap" element={<GenericPage title="Sitemap" content={policies.Sitemap} />} />
          </Routes>
        </div>

        <Footer />
        <CookiePolicyButton />
      </div>
    </BrowserRouter>
  );
}

