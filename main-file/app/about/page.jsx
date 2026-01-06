import AboutUs from "@/components/pages/about";

export const metadata = {
    title: "About Us - Hydro Seal Insulation Works",
    description: "Learn about Hydro Seal Insulation Works - a leading insulation and waterproofing company in Al Ain, Abu Dhabi, UAE. Years of experience in thermal insulation, HVAC, and specialized coatings.",
    keywords: ['about insulation company', 'insulation company history', 'waterproofing experts UAE', 'insulation contractors Al Ain'],
    openGraph: {
        title: "About Us - Hydro Seal Insulation Works",
        description: "Leading insulation and waterproofing company in Al Ain, Abu Dhabi, UAE with years of expertise.",
        url: "https://hydrosealinsulation.ae/about",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'About Hydro Seal Insulation Works',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/about',
    },
};

const About = () => {
    return (
        <>
            <AboutUs />
        </>
    );
};

export default About;