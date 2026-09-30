import { Play } from 'lucide-react';
import React, { useState, useRef } from 'react';

// You can add more video URLs to this array to replace the remaining placeholders
const TIKTOK_VIDEOS = [
  "https://images.maldives-serenitytravels.com/ssstik.io_@larmoiredesoso_1787766415142.mp4",
  "https://images.maldives-serenitytravels.com/ssstik.io_@juliagal__1787767281105.mp4", 
  "https://images.maldives-serenitytravels.com/ssstik.io_@theresortscollection_1787767387602.mp4", 
 "https://images.maldives-serenitytravels.com/ssstik.io_@sonevaofficial_1787767360572.mp4" 
];

function TikTokCard({ url, index }: { url: string | null; index: number; key?: React.Key }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="w-[75vw] sm:w-[320px] lg:w-[280px] xl:w-[300px] shrink-0 snap-center p-1">
      <div 
        className="w-full aspect-[9/16] bg-gray-900 rounded-2xl flex flex-col items-center justify-center overflow-hidden relative group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        style={{
          boxShadow: '-3px 3px 0px 0px #25F4EE, 3px -3px 0px 0px #FE2C55'
        }}
        onClick={url ? togglePlay : undefined}
      >
      {url ? (
        <>
          <video 
            ref={videoRef}
            src={url}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            loop
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity">
              <Play className="w-16 h-16 text-white/90 fill-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Play className="w-16 h-16 text-white/90 fill-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
          </div>
          <div className="absolute bottom-6 left-0 right-0 text-center px-4 text-white/70 text-sm font-medium drop-shadow-md">
            TikTok video placeholder {index + 1}
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default function TikToksSection() {
  return (
    <div className="py-12 border-b border-gray-200" id="tiktoks">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        <span className="text-[#732E24]">#sonevajani</span> on TikTok
      </h2>
      <p className="text-gray-600 mb-8">
        Get a glimpse of the ultimate luxury experience through these TikToks.
      </p>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {TIKTOK_VIDEOS.map((url, i) => (
          <TikTokCard key={i} url={url} index={i} />
        ))}
      </div>
    </div>
  );
}
