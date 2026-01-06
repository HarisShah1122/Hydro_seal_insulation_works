import PortfolioTwoColumns from "@/components/pages/portfolio/2-columns";

export const metadata = {
    title: "Our Portfolio - Completed Projects | Hydro Seal Insulation Works",
    description: "View our portfolio of completed insulation and waterproofing projects in Al Ain, Abu Dhabi, UAE. See our expertise in thermal insulation, HVAC, and specialized coatings.",
    keywords: ['insulation projects', 'waterproofing projects', 'completed projects UAE', 'portfolio insulation'],
    openGraph: {
        title: "Our Portfolio - Completed Projects",
        description: "View our portfolio of completed insulation and waterproofing projects in Al Ain, Abu Dhabi, UAE.",
        url: "https://hydrosealinsulation.ae/portfolio/2-columns",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Portfolio - Hydro Seal Insulation Works',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/portfolio/2-columns',
    },
};

const TwoColumns = () => {
    return (
        <>
            <PortfolioTwoColumns />
        </>
    );
};

export default TwoColumns;