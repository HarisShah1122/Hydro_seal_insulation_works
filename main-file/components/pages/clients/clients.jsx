"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";
import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";

const ClientsPage = () => {
    const clientCategories = [
        {
            title: "Government & Public Sector",
            clients: [
                "Abu Dhabi Municipality",
                "Al Ain City Municipality", 
                "Ministry of Infrastructure Development",
                "Abu Dhabi Housing Authority"
            ]
        },
        {
            title: "Healthcare Facilities",
            clients: [
                "Al Ain Medical Center",
                "Tawam Hospital",
                "Sheikh Khalifa Medical City",
                "Various Private Clinics & Medical Centers"
            ]
        },
        {
            title: "Educational Institutions",
            clients: [
                "Garden City School Al Ain",
                "Al Ain International School",
                "UAE University Buildings",
                "Various Private Schools & Nurseries"
            ]
        },
        {
            title: "Commercial & Retail",
            clients: [
                "Al Ain Mall",
                "Bawadi Mall",
                "Various Shopping Centers",
                "Office Buildings & Business Parks"
            ]
        },
        {
            title: "Residential Projects",
            clients: [
                "Luxury Villas - Al Ain",
                "Residential Compounds",
                "High-Rise Apartments",
                "Private Residences"
            ]
        },
        {
            title: "Industrial Sector",
            clients: [
                "Manufacturing Facilities",
                "Warehouses & Cold Storage",
                "Industrial Parks",
                "Processing Plants"
            ]
        }
    ];

    return (
        <>
            <SEO pageTitle="Our Clients" />        
            <HeaderOne />
            <BreadCrumb title="Our Clients" innerTitle="Clients" />
            
            <div className="about__one section-padding">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-12">
                            <div className="about__one-title text-center">
                                <span className="subtitle-one">Our Clients</span>
                                <h2>Trusted by Leading Organizations</h2>
                                <p className="mt-20">We are proud to serve a diverse range of clients across the UAE, from government institutions to private enterprises. Our commitment to quality and excellence has earned us the trust of prestigious organizations.</p>
                            </div>
                        </div>
                    </div>

                    {/* Client Categories */}
                    <div className="row gy-4">
                        {clientCategories.map((category, idx) => (
                            <div key={idx} className="col-xl-6 col-lg-6">
                                <div className="services__one-single-service">
                                    <div className="services__one-single-service-content">
                                        <h4>{category.title}</h4>
                                        <ul className="client-list mt-20">
                                            {category.clients.map((client, cidx) => (
                                                <li key={cidx}>
                                                    <i className="fas fa-check-circle"></i> {client}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Client Logos Section */}
                    <div className="row mt-60">
                        <div className="col-xl-12">
                            <div className="text-center mb-40">
                                <h3>Our Valued Partners</h3>
                            </div>
                            <div className="brand__area">
                                <div className="text__slider">
                                    <div className="text-slide">
                                        <div className="sliders scroll">
                                            <div className="brand__area-item">
                                                <img src={brand1.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand2.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand3.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand4.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand5.src} alt="Client" />
                                            </div>
                                        </div>
                                        <div className="sliders scroll">
                                            <div className="brand__area-item">
                                                <img src={brand1.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand2.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand3.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand4.src} alt="Client" />
                                            </div>
                                            <div className="brand__area-item">
                                                <img src={brand5.src} alt="Client" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="row mt-60">
                        <div className="col-xl-12">
                            <div className="text-center">
                                <h3 className="mb-40">What Our Clients Say</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="testimonial__one-item">
                                <div className="testimonial__one-item-content">
                                    <p>"Hydro Seal delivered exceptional waterproofing solutions for our medical center. Their professionalism and attention to detail were outstanding."</p>
                                    <div className="testimonial__one-item-content-author">
                                        <h5>Medical Center Project Manager</h5>
                                        <span>Healthcare Sector</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="testimonial__one-item">
                                <div className="testimonial__one-item-content">
                                    <p>"The thermal insulation work completed by Hydro Seal has significantly reduced our energy costs. Highly recommended for any construction project."</p>
                                    <div className="testimonial__one-item-content-author">
                                        <h5>School Administrator</h5>
                                        <span>Education Sector</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="testimonial__one-item">
                                <div className="testimonial__one-item-content">
                                    <p>"Professional team, quality materials, and timely completion. Hydro Seal is our go-to contractor for all insulation needs."</p>
                                    <div className="testimonial__one-item-content-author">
                                        <h5>Property Developer</h5>
                                        <span>Real Estate Sector</span>
                                    </div>
                                </div>
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

export default ClientsPage;

