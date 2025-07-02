// SEO utility functions
export const generateStructuredData = (type, data) => {
  const baseData = {
    "@context": "https://schema.org"
  };

  switch (type) {
    case 'organization':
      return {
        ...baseData,
        "@type": "Organization",
        name: "AlTawfeek Engineering",
        url: "https://altawfeek-engineering.com",
        logo: "https://altawfeek-engineering.com/logo.png",
        description: "Leading fire safety equipment supplier in Egypt, authorized distributor of Bavaria Fire Fighting and Sectron alarm systems",
        address: {
          "@type": "PostalAddress",
          addressLocality: "10th of Ramadan",
          addressRegion: "Sharqia",
          addressCountry: "Egypt"
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+20-XXX-XXX-XXXX",
          contactType: "customer service"
        },
        sameAs: [
          "https://www.facebook.com/altawfeek-engineering",
          "https://www.linkedin.com/company/altawfeek-engineering"
        ],
        ...data
      };

    case 'product':
      return {
        ...baseData,
        "@type": "Product",
        brand: {
          "@type": "Brand",
          name: data.brand || "Bavaria"
        },
        manufacturer: {
          "@type": "Organization",
          name: data.manufacturer || "Bavaria Fire Fighting"
        },
        category: "Fire Safety Equipment",
        ...data
      };

    case 'service':
      return {
        ...baseData,
        "@type": "Service",
        provider: {
          "@type": "Organization",
          name: "AlTawfeek Engineering"
        },
        areaServed: {
          "@type": "Country",
          name: "Egypt"
        },
        ...data
      };

    case 'breadcrumb':
      return {
        ...baseData,
        "@type": "BreadcrumbList",
        itemListElement: data.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      };

    default:
      return baseData;
  }
};

export const generateMetaDescription = (page, customDescription) => {
  if (customDescription) return customDescription;

  const descriptions = {
    home: "Leading fire safety equipment supplier in 10th of Ramadan, Egypt. Authorized distributor of Bavaria Fire Fighting & Sectron alarm systems. Professional installation & maintenance services.",
    about: "Learn about AlTawfeek Engineering, Egypt's trusted fire safety equipment supplier since 2010. Based in 10th of Ramadan, we're authorized distributors of Bavaria & Sectron systems.",
    products: "Comprehensive fire safety products including Bavaria fire extinguishers, Sectron alarm systems, detection systems & suppression equipment. Professional installation in Egypt.",
    services: "Professional fire safety services in Egypt: installation, maintenance, consultation & training. 24/7 support, certified technicians, compliance with Egyptian fire codes.",
    contact: "Contact AlTawfeek Engineering for fire safety solutions in Egypt. Located in 10th of Ramadan. Free consultation, 24/7 emergency support. Call now for expert service.",
    bavaria: "Authorized distributor of Bavaria Fire Fighting equipment in Egypt. Premium fire extinguishers: water, foam, CO2, dry powder & wet chemical. Professional installation & service.",
    sectron: "Authorized distributor of Sectron fire alarm systems in Egypt. Advanced smoke detectors, heat detectors, control panels & wireless systems. Professional installation & monitoring."
  };

  return descriptions[page] || descriptions.home;
};

export const generateKeywords = (page, additionalKeywords = []) => {
  const baseKeywords = [
    "fire safety equipment Egypt",
    "AlTawfeek Engineering",
    "10th Ramadan fire safety",
    "Bavaria fire fighting",
    "Sectron alarm systems"
  ];

  const pageKeywords = {
    home: ["firefighting equipment supplier", "fire safety consultation", "emergency fire support"],
    about: ["fire safety company Egypt", "engineering company 10th Ramadan", "Bavaria Sectron distributor"],
    products: ["fire extinguishers Egypt", "fire detection equipment", "fire suppression systems"],
    services: ["fire safety installation", "fire equipment maintenance", "fire safety training"],
    contact: ["fire safety consultation Egypt", "emergency fire support", "fire safety quote"],
    bavaria: ["Bavaria fire extinguishers", "premium fire fighting equipment", "water foam CO2 extinguishers"],
    sectron: ["Sectron fire alarms", "fire detection systems", "smoke heat detectors"]
  };

  return [...baseKeywords, ...(pageKeywords[page] || []), ...additionalKeywords].join(", ");
};