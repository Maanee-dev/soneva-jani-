import { useSEO } from '../hooks/useSEO';
import { resortData } from '../data/resort';
import PropertyHeader from '../components/PropertyHeader';
import PropertyGallery from '../components/PropertyGallery';
import BookingSearch from '../components/BookingSearch';
import AboutSection from '../components/AboutSection';
import RateComparison from '../components/RateComparison';
import RoomsList from '../components/RoomsList';
import AmenitiesSection from '../components/AmenitiesSection';
import ThingsToKnow from '../components/ThingsToKnow';
import ReviewsSection from '../components/ReviewsSection';
import LocationSection from '../components/LocationSection';
import TikToksSection from '../components/TikToksSection';

export default function Home() {
  useSEO({
    title: "Book Soneva Jani Maldives | Exclusive Offers & Villas",
    description: "Book Soneva Jani Maldives water villas with slides. Claim exclusive resort deals, VIP transfers, and personalized service with Maldives Serenity Travels.",
    path: "/",
    image: resortData.images[0]
  });

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <PropertyHeader />
        <PropertyGallery />
        <BookingSearch />
        
        <div className="flex flex-col gap-8 lg:gap-12 relative min-w-0 w-full overflow-hidden">
          <div className="w-full min-w-0 space-y-12">
            <AboutSection />
            <RateComparison />
            <RoomsList />
            <AmenitiesSection />
            <ThingsToKnow />
            <ReviewsSection />
            <LocationSection />
            <TikToksSection />
          </div>
        </div>
      </main>
    </>
  );
}
