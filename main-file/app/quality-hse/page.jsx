import QualityHSEMain from "@/components/pages/quality-hse";

export const metadata = {
    title: "Quality & HSE - Health, Safety & Environmental Standards",
    description: "Hydro Seal Insulation Works is committed to the highest standards of quality, health, safety, and environmental protection. ISO certified insulation and waterproofing services in Al Ain, Abu Dhabi, UAE.",
    keywords: ['quality standards', 'HSE compliance', 'safety standards insulation', 'environmental protection', 'ISO certified insulation'],
    openGraph: {
        title: "Quality & HSE - Hydro Seal Insulation Works",
        description: "Committed to the highest standards of quality, health, safety, and environmental protection.",
        url: "https://hydrosealinsulation.ae/quality-hse",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Quality & HSE Standards',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/quality-hse',
    },
};

const QualityHSEPage = () => {
    return (
        <>
            <QualityHSEMain />        
        </>
    );
};

export default QualityHSEPage;

