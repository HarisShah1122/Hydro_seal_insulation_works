"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";

const FacilitiesPage = () => {
    const facilities = [
        {
            icon: "flaticon-coding",
            title: "Main Office & Workshop",
            location: "Al Ain, Abu Dhabi",
            description: "Our main facility houses administrative offices, training rooms, and a fully equipped workshop for equipment maintenance and material preparation."
        },
        {
            icon: "flaticon-desktop-pc",
            title: "Material Storage Facility",
            location: "Al Ain Industrial Area",
            description: "Climate-controlled warehouse for storing insulation materials, coatings, and waterproofing systems, ensuring product quality and readiness."
        },
        {
            icon: "flaticon-consultant",
            title: "Equipment Depot",
            location: "Al Ain",
            description: "Centralized depot housing specialized equipment including spray foam machines, welding equipment, lifting gear, and safety equipment."
        },
        {
            icon: "flaticon-mobile-app",
            title: "Training Center",
            location: "Main Office Building",
            description: "Dedicated training facility for staff development, safety training, and technical skill enhancement programs."
        }
    ];

    const equipment = [
        {
            category: "Application Equipment",
            items: [
                "High-pressure spray foam machines",
                "Polyurethane coating applicators",
                "Waterproofing membrane welders",
                "Industrial sprayers and rollers",
                "Thermal imaging cameras"
            ]
        },
        {
            category: "Safety Equipment",
            items: [
                "Fall protection systems",
                "Scaffolding and access equipment",
                "Personal protective equipment (PPE)",
                "Gas detection monitors",
                "First aid and emergency equipment"
            ]
        },
        {
            category: "Tools & Machinery",
            items: [
                "Power tools and hand tools",
                "Cutting and preparation equipment",
                "Material mixing equipment",
                "Testing and measurement devices",
                "Transportation vehicles"
            ]
        },
        {
            category: "Quality Control",
            items: [
                "Thickness measurement gauges",
                "Moisture detection equipment",
                "Adhesion testing devices",
                "Documentation and reporting systems",
                "Laboratory testing equipment"
            ]
        }
    ];

    const capabilities = [
        "24/7 Emergency Response Capability",
        "Mobile Workshop Units for On-site Support",
        "Material Testing Laboratory",
        "Computer-Aided Design (CAD) Systems",
        "Project Management Software",
        "GPS Fleet Tracking System",
        "Climate-Controlled Storage (5,000 sq ft)",
        "Equipment Maintenance Workshop"
    ];

    return (
        <>
            <SEO pageTitle="Our Facilities" />        
            <HeaderOne />
            <BreadCrumb title="Our Facilities" innerTitle="Facilities" />
            
            <div className="about__one section-padding">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-12">
                            <div className="about__one-title text-center">
                                <span className="subtitle-one">Our Facilities</span>
                                <h2>State-of-the-Art Infrastructure</h2>
                                <p className="mt-20">Hydro Seal Insulation Works maintains modern facilities and advanced equipment to deliver superior insulation and waterproofing services across the UAE.</p>
                            </div>
                        </div>
                    </div>

                    {/* Facilities Grid */}
                    <div className="row gy-4 mb-60">
                        {facilities.map((facility, idx) => (
                            <div key={idx} className="col-xl-6 col-lg-6">
                                <div className="services__one-single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className={facility.icon}></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>{facility.title}</h4>
                                        <span className="text-primary"><i className="fas fa-map-marker-alt"></i> {facility.location}</span>
                                        <p className="mt-15">{facility.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Equipment Section */}
                    <div className="row mb-60">
                        <div className="col-xl-12">
                            <div className="about__one-title text-center mb-40">
                                <h3>Equipment & Resources</h3>
                                <p>We invest in the latest equipment and technology to ensure efficient project execution and superior quality results.</p>
                            </div>
                        </div>
                        {equipment.map((equipmentCat, idx) => (
                            <div key={idx} className="col-xl-6 col-lg-6 mb-30">
                                <div className="skill__one-right-item">
                                    <h4>{equipmentCat.category}</h4>
                                    <ul className="mt-20">
                                        {equipmentCat.items.map((item, iidx) => (
                                            <li key={iidx}>
                                                <i className="fas fa-check-circle"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Capabilities */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="about__one-title text-center mb-40">
                                <h3>Our Capabilities</h3>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="row gy-3">
                                {capabilities.map((capability, idx) => (
                                    <div key={idx} className="col-xl-6 col-lg-6">
                                        <div className="why-choose-us__one-single-feature">
                                            <i className="fas fa-check-double"></i>
                                            <span>{capability}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="row mt-60">
                        <div className="col-xl-12">
                            <div className="text-center p-5" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                <h4 className="mb-20">Visit Our Facilities</h4>
                                <p className="mb-20">We welcome clients and partners to visit our facilities and see our capabilities firsthand.</p>
                                <a href="/contact" className="btn-one">Contact Us to Schedule a Visit <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default FacilitiesPage;

