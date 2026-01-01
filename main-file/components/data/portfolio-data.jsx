import image1 from "../../public/assets/img/hydro seal projects/Medical_Center_Main_Entrance.jpg";
import image2 from "../../public/assets/img/hydro seal projects/Medical_Center_Front_View.jpg";
import image3 from "../../public/assets/img/hydro seal projects/Medical_Center_Side_Facade.jpg";
import image4 from "../../public/assets/img/hydro seal projects/Garden_City_School_Wide_Angle.jpg";
import image5 from "../../public/assets/img/hydro seal projects/Garden_City_School_Main_Building.jpg";
import image6 from "../../public/assets/img/hydro seal projects/Garden_City_School_Entrance_CloseUp.jpg";
import image7 from "../../public/assets/img/hydro seal projects/Residential_Villa_Street_View.jpg";
import image8 from "../../public/assets/img/hydro seal projects/Residential_Villa_Front_Gate.jpg";
import image9 from "../../public/assets/img/hydro seal projects/Rooftop_AC_Installation_Overview.jpg";
import image10 from "../../public/assets/img/hydro seal projects/Rooftop_AC_Piping_and_Units.jpg";
import waterproofingImage1 from "../../public/assets/img/Rooftop Waterproofing & AC Protection/ac-unit-base-waterproofing.png";
import waterproofingImage2 from "../../public/assets/img/Rooftop Waterproofing & AC Protection/large-roof-hydroseal-application.png";
import waterproofingImage3 from "../../public/assets/img/Rooftop Waterproofing & AC Protection/luxury-villa-facade-moisture-protection.png";
import waterproofingImage4 from "../../public/assets/img/Rooftop Waterproofing & AC Protection/modern-villa-exterior-sealant.png";
import waterproofingImage5 from "../../public/assets/img/Rooftop Waterproofing & AC Protection/residential-boundary-wall-waterproofing.png";

const portfolioData = [
    {        
        id: 'medical-center-insulation-project',
        title: 'Medical Center Comprehensive Insulation',
        subtitle: 'Healthcare Facility - Al Ain',
        image: image1,
        client: 'Major Medical Center - Al Ain',
        scope: 'Complete thermal insulation and HVAC duct insulation for 5-story medical facility',
        solution: 'Installed high-performance thermal insulation in walls, ceilings, and HVAC systems. Applied specialized acoustic insulation for patient rooms and operating theaters.',
        result: 'Achieved 30% energy cost reduction, maintained optimal temperature control, and improved patient comfort',
        category: 'healthcare'
    },
    {        
        id: 'medical-center-waterproofing',
        title: 'Medical Facility Waterproofing System',
        subtitle: 'Healthcare Facility - Al Ain',
        image: image2,
        client: 'Major Medical Center - Al Ain',
        scope: 'Comprehensive waterproofing for roofs, terraces, wet areas, and basement',
        solution: 'Applied advanced polyurethane waterproofing membrane on roof deck, elastomeric coatings on external walls, and crystalline waterproofing for basement areas.',
        result: 'Zero water leakage issues, protected critical medical equipment, extended building lifespan',
        category: 'healthcare'
    },
    {        
        id: 'medical-center-facade-protection',
        title: 'Medical Center Facade Insulation & Protection',
        subtitle: 'Healthcare Facility - Al Ain',
        image: image3,
        client: 'Major Medical Center - Al Ain',
        scope: 'External wall insulation and protective coatings for building envelope',
        solution: 'Installed external thermal insulation finishing system (ETICS) with weather-resistant acrylic coating. Applied UV-resistant protective coatings on exposed surfaces.',
        result: 'Enhanced building aesthetics, improved thermal performance, reduced maintenance costs',
        category: 'healthcare'
    },
    {        
        id: 'garden-city-school-project',
        title: 'Garden City School Complete Insulation',
        subtitle: 'Educational Facility - Al Ain',
        image: image4,
        client: 'Garden City School - Al Ain',
        scope: 'Thermal and acoustic insulation for classroom buildings, auditorium, and administrative blocks',
        solution: 'Installed rock wool insulation in walls and ceilings, acoustic ceiling panels in classrooms, and HVAC duct insulation throughout the campus.',
        result: 'Created comfortable learning environment, reduced energy consumption by 35%, improved acoustic quality',
        category: 'education'
    },
    {        
        id: 'school-main-building-insulation',
        title: 'School Main Building Thermal Insulation',
        subtitle: 'Educational Facility - Al Ain',
        image: image5,
        client: 'Garden City School - Al Ain',
        scope: 'Comprehensive insulation for main academic building including roof, walls, and floors',
        solution: 'Applied spray polyurethane foam on roof deck, cavity wall insulation, and floor insulation to minimize heat transfer and condensation.',
        result: 'Consistent indoor temperature, lower HVAC operational costs, enhanced student comfort',
        category: 'education'
    },
    {        
        id: 'school-entrance-facade',
        title: 'School Entrance & Facade Enhancement',
        subtitle: 'Educational Facility - Al Ain',
        image: image6,
        client: 'Garden City School - Al Ain',
        scope: 'Insulation and weatherproofing for main entrance and facade areas',
        solution: 'Installed decorative insulated panels, applied weather-resistant coatings, and implemented proper vapor barriers.',
        result: 'Improved building appearance, enhanced thermal efficiency, reduced maintenance requirements',
        category: 'education'
    },
    {        
        id: 'luxury-residential-villa',
        title: 'Luxury Residential Villa Insulation',
        subtitle: 'Private Residence - Al Ain',
        image: image7,
        client: 'Private Villa Owner - Al Ain',
        scope: 'Complete thermal insulation, waterproofing, and acoustic treatment for luxury villa',
        solution: 'Applied premium insulation materials including spray foam, rock wool batts, and reflective insulation. Waterproofed roof, terrace, and wet areas.',
        result: 'Exceptional energy efficiency, soundproof living spaces, complete water protection, increased property value',
        category: 'residential'
    },
    {        
        id: 'villa-gate-entrance',
        title: 'Residential Villa Comprehensive Protection',
        subtitle: 'Private Residence - Al Ain',
        image: image8,
        client: 'Private Villa Owner - Al Ain',
        scope: 'Exterior wall insulation, decorative coatings, and waterproofing system',
        solution: 'Installed external insulation system with textured finish, applied protective coatings on boundary walls and gates.',
        result: 'Enhanced curb appeal, superior weather protection, minimal heat penetration',
        category: 'residential'
    },
    {        
        id: 'rooftop-ac-insulation-project',
        title: 'Commercial Building Rooftop HVAC Insulation',
        subtitle: 'Commercial Facility - Al Ain',
        image: image9,
        client: 'Commercial Complex - Al Ain',
        scope: 'Complete insulation of rooftop HVAC units, ductwork, and chilled water piping',
        solution: 'Applied elastomeric foam insulation on all chilled water pipes, insulated duct systems, and installed protective jackets on outdoor equipment.',
        result: 'Eliminated condensation issues, improved HVAC efficiency by 25%, extended equipment lifespan',
        category: 'commercial'
    },
    {        
        id: 'ac-piping-insulation',
        title: 'HVAC Piping & Ductwork Insulation System',
        subtitle: 'Commercial Facility - Al Ain',
        image: image10,
        client: 'Commercial Complex - Al Ain',
        scope: 'Specialized insulation for complex HVAC piping network and duct distribution system',
        solution: 'Installed PIR insulation on refrigerant lines, armaflex on chilled water pipes, and fiberglass duct wrap on air distribution systems.',
        result: 'Zero energy loss, no condensation dripping, optimal system performance, reduced operating costs',
        category: 'commercial'
    },
    {        
        id: 'ac-unit-base-waterproofing',
        title: 'AC Unit Base Waterproofing',
        subtitle: 'Rooftop Waterproofing & AC Protection',
        image: waterproofingImage1,
        client: 'Commercial & Residential Projects',
        scope: 'Specialized waterproofing for AC unit bases and surrounding areas to prevent water damage and leakage',
        solution: 'Applied premium waterproofing membrane around AC unit bases, created proper drainage systems, and installed protective barriers to prevent water infiltration.',
        result: 'Complete protection of AC equipment, eliminated water damage risks, extended equipment lifespan, reduced maintenance costs',
        category: 'waterproofing'
    },
    {        
        id: 'large-roof-hydroseal-application',
        title: 'Large Roof Hydroseal Application',
        subtitle: 'Rooftop Waterproofing & AC Protection',
        image: waterproofingImage2,
        client: 'Commercial & Industrial Facilities',
        scope: 'Comprehensive waterproofing application for large commercial and industrial roof surfaces using advanced hydroseal technology',
        solution: 'Applied high-performance hydroseal membrane system across entire roof surface, ensured proper adhesion and seamless coverage, implemented drainage solutions.',
        result: 'Complete roof protection, zero leakage issues, enhanced durability, significant reduction in maintenance requirements',
        category: 'waterproofing'
    },
    {        
        id: 'luxury-villa-facade-moisture-protection',
        title: 'Luxury Villa Facade Moisture Protection',
        subtitle: 'Rooftop Waterproofing & AC Protection',
        image: waterproofingImage3,
        client: 'Luxury Residential Properties',
        scope: 'Advanced moisture protection system for luxury villa facades and exterior walls',
        solution: 'Applied breathable waterproofing membrane, installed proper vapor barriers, used premium elastomeric coatings for long-lasting protection.',
        result: 'Complete moisture protection, preserved building aesthetics, prevented structural damage, enhanced property value',
        category: 'waterproofing'
    },
    {        
        id: 'modern-villa-exterior-sealant',
        title: 'Modern Villa Exterior Sealant Application',
        subtitle: 'Rooftop Waterproofing & AC Protection',
        image: waterproofingImage4,
        client: 'Modern Residential Developments',
        scope: 'Professional exterior sealant application for modern villa designs with emphasis on aesthetics and protection',
        solution: 'Applied high-quality exterior sealants, ensured proper surface preparation, used weather-resistant coatings suitable for harsh climate conditions.',
        result: 'Superior weather protection, maintained modern aesthetic appeal, long-lasting durability, reduced maintenance needs',
        category: 'waterproofing'
    },
    {        
        id: 'residential-boundary-wall-waterproofing',
        title: 'Residential Boundary Wall Waterproofing',
        subtitle: 'Rooftop Waterproofing & AC Protection',
        image: waterproofingImage5,
        client: 'Residential Communities',
        scope: 'Comprehensive waterproofing system for residential boundary walls and perimeter structures',
        solution: 'Applied waterproofing membrane on boundary walls, installed proper drainage systems, used protective coatings to prevent water penetration and damage.',
        result: 'Protected boundary structures, prevented water damage, extended wall lifespan, maintained structural integrity',
        category: 'waterproofing'
    },
];

export default portfolioData;
