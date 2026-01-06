import Testimonial from "@/components/pages/testimonial";

export const metadata = {
    title: "Client Testimonials - Customer Reviews | Hydro Seal Insulation Works",
    description: "Read testimonials and reviews from satisfied clients of Hydro Seal Insulation Works. See what our customers say about our insulation and waterproofing services in Al Ain, Abu Dhabi, UAE.",
    keywords: ['insulation testimonials', 'customer reviews', 'client feedback', 'insulation company reviews'],
    openGraph: {
        title: "Client Testimonials - Hydro Seal Insulation Works",
        description: "Read testimonials and reviews from satisfied clients.",
        url: "https://hydrosealinsulation.ae/testimonial",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Client Testimonials',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/testimonial',
    },
};

const TestimonialPage = () => {
    return (
        <>
            <Testimonial />
        </>
    );
};

export default TestimonialPage;