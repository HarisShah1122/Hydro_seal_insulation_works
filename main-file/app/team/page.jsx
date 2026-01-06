import TeamPage from '@/components/pages/teams/team';

export const metadata = {
    title: "Our Team - Expert Insulation Professionals | Hydro Seal Insulation Works",
    description: "Meet our expert team of insulation and waterproofing professionals in Al Ain, Abu Dhabi, UAE. Experienced technicians and engineers dedicated to quality service.",
    keywords: ['insulation team', 'expert technicians', 'professional team', 'insulation engineers'],
    openGraph: {
        title: "Our Team - Hydro Seal Insulation Works",
        description: "Meet our expert team of insulation and waterproofing professionals.",
        url: "https://hydrosealinsulation.ae/team",
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Our Team',
            },
        ],
    },
    alternates: {
        canonical: 'https://hydrosealinsulation.ae/team',
    },
};

const Team = () => {
    return (
        <>
            <TeamPage />
        </>
    );
};

export default Team;