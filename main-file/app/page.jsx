import HomeFive from "@/components/pages/homes/home-5";
import StructuredData, { organizationSchema, localBusinessSchema } from "@/components/data/structured-data";

export const metadata = {
    title: "Hydro Seal Insulation Works - Professional Insulation & Waterproofing Solutions in Al Ain, Abu Dhabi",
    description: "Leading insulation and waterproofing company in Al Ain, Abu Dhabi, UAE. Expert thermal insulation, HVAC insulation, waterproofing, acoustic insulation, fire protection, and specialized coatings services. Get a free quote today!",
    keywords: ['insulation company UAE', 'waterproofing Al Ain', 'thermal insulation Abu Dhabi', 'HVAC insulation services', 'acoustic insulation UAE', 'fire protection insulation', 'specialized coatings', 'insulation contractors'],
    openGraph: {
        title: "Hydro Seal Insulation Works - Professional Insulation & Waterproofing Solutions",
        description: "Leading insulation and waterproofing company in Al Ain, Abu Dhabi, UAE. Expert services for commercial and residential projects.",
        url: "https://hydrosealinsulation.ae",
        siteName: "Hydro Seal Insulation Works",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Hydro Seal Insulation Works - Professional Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Hydro Seal Insulation Works - Professional Insulation & Waterproofing Solutions",
        description: "Leading insulation and waterproofing company in Al Ain, Abu Dhabi, UAE.",
        images: ['/assets/img/logo/hydroseal logo.jpg'],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae',
    },
};

export default function Home() {
    return (
        <>
            <StructuredData data={organizationSchema} />
            <StructuredData data={localBusinessSchema} />
            <HomeFive />
        </>
    );
}