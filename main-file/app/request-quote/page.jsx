import RequestQuote from "@/components/pages/request-quote";

export const metadata = {
    title: "Request a Quote - Free Insulation & Waterproofing Estimate",
    description: "Get a free quote for professional insulation and waterproofing services in Al Ain, Abu Dhabi, UAE. Fill out our form and receive a detailed estimate for your project.",
    keywords: ['insulation quote', 'waterproofing estimate', 'free quote', 'insulation pricing'],
    openGraph: {
        title: "Request a Quote - Hydro Seal Insulation Works",
        description: "Get a free quote for professional insulation and waterproofing services in Al Ain, Abu Dhabi, UAE.",
        url: "https://hydrosealinsulation.ae/request-quote",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Request a Quote',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/request-quote',
    },
};

const RequestQuotePage = () => {
    return (
        <>
            <RequestQuote />
        </>
    );
};

export default RequestQuotePage;