import ClientsMain from "@/components/pages/clients";

export const metadata = {
    title: "Our Clients - Trusted by Leading Companies in UAE",
    description: "Hydro Seal Insulation Works is trusted by leading companies across the UAE. View our prestigious client portfolio including major commercial and residential projects.",
    keywords: ['insulation clients', 'trusted insulation company', 'UAE clients', 'commercial insulation'],
    openGraph: {
        title: "Our Clients - Hydro Seal Insulation Works",
        description: "Trusted by leading companies across the UAE. View our prestigious client portfolio.",
        url: "https://hydrosealinsulation.ae/clients",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Our Clients',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/clients',
    },
};

const ClientsPage = () => {
    return (
        <>
            <ClientsMain />        
        </>
    );
};

export default ClientsPage;

