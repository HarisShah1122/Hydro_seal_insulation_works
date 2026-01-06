"use client";

export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema for homepage
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hydro Seal Insulation Works",
  "url": "https://hydrosealinsulation.ae",
  "logo": "https://hydrosealinsulation.ae/assets/img/logo/hydroseal logo.jpg",
  "description": "Professional Insulation & Waterproofing Solutions in Al Ain, Abu Dhabi, UAE",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Al Ain",
    "addressRegion": "Abu Dhabi",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "areaServed": "AE",
    "availableLanguage": ["en", "ar"]
  },
  "sameAs": []
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hydro Seal Insulation Works",
  "image": "https://hydrosealinsulation.ae/assets/img/logo/hydroseal logo.jpg",
  "description": "Professional Insulation & Waterproofing Solutions in Al Ain, Abu Dhabi, UAE",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Al Ain",
    "addressRegion": "Abu Dhabi",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "24.2075",
    "longitude": "55.7447"
  },
  "url": "https://hydrosealinsulation.ae",
  "telephone": "",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "areaServed": {
    "@type": "City",
    "name": "Al Ain"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Insulation and Waterproofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Thermal Insulation",
          "description": "Energy-efficient temperature control solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Waterproofing Solutions",
          "description": "Complete water damage protection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HVAC Insulation",
          "description": "Optimize climate control systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Acoustic Insulation",
          "description": "Professional soundproofing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fire Protection Insulation",
          "description": "Advanced fire-resistant materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Specialized Coatings",
          "description": "Protective coatings for durability"
        }
      }
    ]
  }
};

// Service Schema
export const serviceSchema = (serviceName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Hydro Seal Insulation Works",
    "url": "https://hydrosealinsulation.ae"
  },
  "areaServed": {
    "@type": "City",
    "name": "Al Ain"
  },
  "description": description,
  "url": url
});

