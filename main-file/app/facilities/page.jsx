import FacilitiesMain from "@/components/pages/facilities";

export const metadata = {
    title: "Our Facilities - State-of-the-Art Equipment & Infrastructure",
    description: "Explore our state-of-the-art facilities and advanced equipment for professional insulation and waterproofing services in Al Ain, Abu Dhabi, UAE.",
    keywords: ['insulation facilities', 'equipment insulation', 'infrastructure insulation company'],
    openGraph: {
        title: "Our Facilities - Hydro Seal Insulation Works",
        description: "State-of-the-art facilities and equipment for professional insulation and waterproofing services.",
        url: "https://hydrosealinsulation.ae/facilities",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Our Facilities',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/facilities',
    },
};

const FacilitiesPage = () => {
    return (
        <>
            <FacilitiesMain />        
        </>
    );
};

export default FacilitiesPage;

