import project1 from "../../public/assets/img/hydro seal projects/Medical_Center_Main_Entrance.jpg";
import project2 from "../../public/assets/img/hydro seal projects/Garden_City_School_Wide_Angle.jpg";
import project3 from "../../public/assets/img/hydro seal projects/Residential_Villa_Street_View.jpg";
import project4 from "../../public/assets/img/hydro seal projects/Rooftop_AC_Installation_Overview.jpg";
import mosque1 from "../../public/assets/img/mosque/abu-dhabi-mosque-exterior-wide.jpeg";
import mosque2 from "../../public/assets/img/mosque/integrated-minaret-detail.jpeg";
import mosque3 from "../../public/assets/img/mosque/modern-masjid-side-perspective.jpeg";
import mosque4 from "../../public/assets/img/mosque/abu-dhabi-mosque-main-facade.jpeg";

export const TTLOCKS_VIDEO_PATH = "/assets/img/ttlocks/ttlock video1.mp4";

export const getTtlocksGalleryData = (t) => [
    {
        id: 'project1',
        image: project1,
        title: t('project1Title'),
        description: t('project1Description'),
        alt: t('project1Alt')
    },
    {
        id: 'project2',
        image: project2,
        title: t('project2Title'),
        description: t('project2Description'),
        alt: t('project2Alt')
    },
    {
        id: 'project3',
        image: project3,
        title: t('project3Title'),
        description: t('project3Description'),
        alt: t('project3Alt')
    },
    {
        id: 'project4',
        image: project4,
        title: t('project4Title'),
        description: t('project4Description'),
        alt: t('project4Alt')
    },
    {
        id: 'mosque1',
        image: mosque1,
        title: t('mosque1Title'),
        description: t('mosque1Description'),
        alt: t('mosque1Alt')
    },
    {
        id: 'mosque2',
        image: mosque2,
        title: t('mosque2Title'),
        description: t('mosque2Description'),
        alt: t('mosque2Alt')
    },
    {
        id: 'mosque3',
        image: mosque3,
        title: t('mosque3Title'),
        description: t('mosque3Description'),
        alt: t('mosque3Alt')
    },
    {
        id: 'mosque4',
        image: mosque4,
        title: t('mosque4Title'),
        description: t('mosque4Description'),
        alt: t('mosque4Alt')
    }
];

// For backward compatibility, export static data (will use English by default)
export const ttlocksGalleryData = [
    {
        id: 'project1',
        image: project1,
        title: "Healthcare Facility Insulation",
        description: "Comprehensive thermal insulation and waterproofing solution for a major medical center in Al Ain. This project included HVAC duct insulation, roof waterproofing, and acoustic treatment for patient comfort.",
        alt: "Medical Center Insulation Project"
    },
    {
        id: 'project2',
        image: project2,
        title: "Educational Institution Project",
        description: "Complete insulation system for Garden City School featuring energy-efficient thermal insulation, soundproofing for classrooms, and weather-resistant protective coatings for optimal learning environment.",
        alt: "School Building Insulation"
    },
    {
        id: 'project3',
        image: project3,
        title: "Luxury Residential Villa",
        description: "Premium insulation and waterproofing services for a high-end residential property. Includes comprehensive thermal barrier installation, roof waterproofing, and decorative protective coatings.",
        alt: "Residential Villa Insulation"
    },
    {
        id: 'project4',
        image: project4,
        title: "Commercial HVAC Insulation",
        description: "Specialized rooftop HVAC system insulation for a commercial complex. Features advanced pipe insulation, condensation control, and energy-efficient solutions reducing operational costs by 25%.",
        alt: "Rooftop HVAC Insulation Project"
    },
    {
        id: 'mosque1',
        image: mosque1,
        title: "Abu Dhabi Mosque Exterior Insulation",
        description: "Comprehensive thermal insulation and waterproofing system for a prestigious mosque in Abu Dhabi. This project featured advanced insulation materials for domes, minarets, and exterior walls, ensuring optimal temperature control and weather protection.",
        alt: "Abu Dhabi Mosque Exterior Wide View"
    },
    {
        id: 'mosque2',
        image: mosque2,
        title: "Mosque Minaret Detail Insulation",
        description: "Specialized insulation and protective coating system for mosque minarets. Applied high-performance thermal insulation with weather-resistant finishes to protect architectural details while maintaining energy efficiency.",
        alt: "Integrated Minaret Detail Insulation"
    },
    {
        id: 'mosque3',
        image: mosque3,
        title: "Modern Mosque Side Facade Insulation",
        description: "Complete thermal insulation and waterproofing solution for modern mosque architecture. Implemented advanced insulation systems for side facades, ensuring energy efficiency and structural protection in harsh UAE climate conditions.",
        alt: "Modern Masjid Side Perspective"
    },
    {
        id: 'mosque4',
        image: mosque4,
        title: "Mosque Main Facade Insulation Project",
        description: "Premium insulation and protective coating system for mosque main facade. Applied specialized thermal insulation with decorative finishes, ensuring both functional performance and aesthetic excellence for this iconic religious structure.",
        alt: "Abu Dhabi Mosque Main Facade"
    }
];

export const getTtlocksVideoData = (t) => ({
    title: t('videoTitle'),
    description: t('videoDescription'),
    src: TTLOCKS_VIDEO_PATH,
    alt: t('videoAlt')
});

// For backward compatibility
export const ttlocksVideoData = {
    title: "Our Insulation Process",
    description: "Discover our professional approach to insulation and waterproofing, showcasing quality materials, skilled craftsmanship, and commitment to excellence.",
    src: TTLOCKS_VIDEO_PATH,
    alt: "Hydro Seal Insulation Process"
};

