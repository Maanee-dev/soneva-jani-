import { useState } from 'react';
import React from 'react';
import { resortData } from '../data/resort';

const platformLogos: Record<string, string> = {
  Google: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
  Tripadvisor: "https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg",
  "Trip.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trip.com_logo.svg/1280px-Trip.com_logo.svg.png"
};

function ReviewItem({ review }: { review: any; key?: React.Key }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200;
  const isLong = review.text.length > maxLength;
  const displayText = expanded ? review.text : (isLong ? review.text.substring(0, maxLength) + '...' : review.text);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600 shrink-0">
          {review.author.charAt(0)}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{review.author}</h4>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-0.5">
            <span>{review.date} on</span>
            {platformLogos[review.country] ? (
              <img src={platformLogos[review.country]} alt={review.country} className="h-4 object-contain" />
            ) : (
              <span>{review.country}</span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-sm leading-none ${i < (review.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
            <span className="text-xs font-medium text-gray-600 ml-1">{review.rating || 5}/5</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">
        "{displayText}"
        {isLong && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="ml-2 font-medium underline text-gray-900 hover:text-gray-600"
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </p>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <div className="py-12 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[#732E24] text-2xl leading-none">★</span>
        <h2 className="text-2xl font-semibold text-gray-900">
          {resortData.rating} Exceptional <span className="font-normal text-gray-500 text-xl">· {resortData.reviewsCount} reviews</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {resortData.reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
      
      <a 
        href="https://www.google.com/travel/search?q=soneva%20jani%20reviews&ved=0CAAQ5JsGahcKEwjoq6eX6b6WAxUAAAAAHQAAAAAQBQ"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-6 py-2.5 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
      >
        Show all {resortData.reviewsCount} reviews
      </a>
    </div>
  );
}
