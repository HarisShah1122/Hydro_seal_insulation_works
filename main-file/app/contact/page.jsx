import ContactUs from '@/components/pages/contacts/contact';

export const metadata = {
    title: "Contact Us - Get a Free Quote | Hydro Seal Insulation Works",
    description: "Contact Hydro Seal Insulation Works in Al Ain, Abu Dhabi for professional insulation and waterproofing services. Get a free quote today. Phone, email, and location details.",
    keywords: ['contact insulation company', 'insulation quote', 'waterproofing contact', 'Al Ain insulation', 'Abu Dhabi insulation'],
    openGraph: {
        title: "Contact Us - Hydro Seal Insulation Works",
        description: "Get in touch with us for professional insulation and waterproofing services in Al Ain, Abu Dhabi, UAE.",
        url: "https://hydrosealinsulation.ae/contact",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Hydro Seal Insulation Works',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/contact',
    },
};

const ContactPage = () => {
    return (
        <>
            <ContactUs />
        </>
    );
};

export default ContactPage;