import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { resortData } from '../data/resort';

interface GenericPageProps {
  title: string;
  content?: React.ReactNode;
}

export default function GenericPage({ title, content }: GenericPageProps) {
  const navigate = useNavigate();

  const formattedPath = `/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  
  useSEO({
    title: `${title} | Soneva Jani Maldives | Maldives Serenity Travels`,
    description: `Read the ${title} for booking your luxury stay at Soneva Jani Maldives through Maldives Serenity Travels.`,
    path: formattedPath,
    image: resortData.images[0]
  });

  return (
    <div className="pt-24 md:pt-32 pb-16 min-h-screen bg-[#F5F2EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="bg-[#F5F2EB] rounded-2xl shadow-none p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">{title}</h1>
          
          <div className="prose prose-gray max-w-none text-gray-600 font-light leading-relaxed">
            {content || (
              <p>
                This page is currently being updated. Please check back later for full {title.toLowerCase()} information.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
