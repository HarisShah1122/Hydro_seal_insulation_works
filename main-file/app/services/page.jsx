import ServicePageTwo from '@/components/pages/services/service-two';
import React from 'react';

export const metadata = {
    title: "Our Services - Insulation & Waterproofing Solutions",
    description: "Comprehensive insulation and waterproofing services in Al Ain, Abu Dhabi. Thermal insulation, HVAC insulation, waterproofing, acoustic insulation, fire protection, and specialized coatings.",
    keywords: ['insulation services', 'waterproofing services', 'thermal insulation UAE', 'HVAC insulation', 'acoustic insulation', 'fire protection insulation', 'specialized coatings'],
    openGraph: {
        title: "Our Services - Insulation & Waterproofing Solutions",
        description: "Comprehensive insulation and waterproofing services in Al Ain, Abu Dhabi, UAE.",
        url: "https://hydrosealinsulation.ae/services",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Insulation and Waterproofing Services',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/services',
    },
};

const Services = () => {
    return (
        <>
            <ServicePageTwo />
        </>
    );
};

export default Services;
