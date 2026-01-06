import Faq from "@/components/pages/faq";

export const metadata = {
    title: "FAQ - Frequently Asked Questions | Hydro Seal Insulation Works",
    description: "Frequently asked questions about insulation and waterproofing services in Al Ain, Abu Dhabi, UAE. Get answers about thermal insulation, HVAC, waterproofing, and more.",
    keywords: ['insulation FAQ', 'waterproofing questions', 'insulation answers', 'common questions'],
    openGraph: {
        title: "FAQ - Frequently Asked Questions",
        description: "Get answers to common questions about insulation and waterproofing services.",
        url: "https://hydrosealinsulation.ae/faq",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'FAQ',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/faq',
    },
};

const FaqPage = () => {
    return (
        <>
            <Faq />
        </>
    );
};

export default FaqPage;