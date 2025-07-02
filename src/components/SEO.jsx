import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage,
  structuredData 
}) => {
  const defaultTitle = "AlTawfeek Engineering - Fire Safety Equipment Supplier in Egypt";
  const defaultDescription = "Leading fire safety equipment supplier in 10th of Ramadan, Egypt. Authorized distributor of Bavaria Fire Fighting & Sectron alarm systems.";
  const defaultKeywords = "fire safety equipment Egypt, Bavaria fire fighting, Sectron alarms, firefighting supplier, 10th Ramadan";
  const baseUrl = "https://altawfeek-engineering.com";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical ? `${baseUrl}${canonical}` : baseUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="AlTawfeek Engineering" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title || defaultTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AlTawfeek Engineering" />
      <meta name="geo.region" content="EG-SHR" />
      <meta name="geo.placename" content="10th of Ramadan, Egypt" />
      <meta name="geo.position" content="30.2672;31.7618" />
      <meta name="ICBM" content="30.2672, 31.7618" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;