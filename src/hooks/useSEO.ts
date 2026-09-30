import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

export function useSEO({ title, description, path, image }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    // Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      
      let twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    // Canonical & OG URL
    if (path !== undefined) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', `https://sonevajani.maldivesofficial.com${path}`);
      
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', `https://sonevajani.maldivesofficial.com${path}`);
    }

    // Image
    if (image) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute('content', image);
      
      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) twitterImage.setAttribute('content', image);
    }
  }, [title, description, path, image]);
}
