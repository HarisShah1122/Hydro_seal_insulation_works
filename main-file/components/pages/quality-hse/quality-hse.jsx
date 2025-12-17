"use client"
import { useTranslations } from 'next-intl';
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";

const QualityHSEPage = () => {
    const t = useTranslations('qualityHSEPage');
    const qualityPolicies = [
        {
            title: "Quality Management System",
            description: "ISO 9001:2015 certified quality management system ensuring consistent delivery of superior services and customer satisfaction.",
            icon: "flaticon-coding"
        },
        {
            title: "Material Quality Assurance",
            description: "We use only approved, tested materials from reputable manufacturers, with full traceability and certification documentation.",
            icon: "flaticon-consultant"
        },
        {
            title: "Workmanship Standards",
            description: "Highly trained technicians follow industry best practices and manufacturer specifications for all installations.",
            icon: "flaticon-mobile-app"
        },
        {
            title: "Quality Control Inspections",
            description: "Multi-stage inspection process including pre-work, in-progress, and final inspections with comprehensive documentation.",
            icon: "flaticon-cyber-security"
        }
    ];

    const hsePolicies = [
        "Zero Harm Philosophy - Our ultimate goal is zero accidents and zero environmental incidents",
        "Mandatory Safety Training - All personnel complete safety induction and role-specific training",
        "Personal Protective Equipment (PPE) - Strictly enforced PPE requirements for all site personnel",
        "Risk Assessment - Comprehensive risk assessments conducted before every project",
        "Safety Supervision - Dedicated HSE officers monitor compliance on all major projects",
        "Incident Reporting - Transparent reporting and investigation of all incidents and near-misses",
        "Environmental Protection - Proper waste management and environmental impact minimization",
        "Emergency Response Plans - Detailed emergency procedures for all work sites"
    ];

    const certifications = [
        {
            name: "ISO 9001:2015",
            description: "Quality Management System Certification"
        },
        {
            name: "ISO 14001:2015",
            description: "Environmental Management System"
        },
        {
            name: "ISO 45001:2018",
            description: "Occupational Health & Safety Management"
        },
        {
            name: "UAE Contractor License",
            description: "Approved contractor for insulation and waterproofing works"
        },
        {
            name: "Civil Defense Approved",
            description: "Licensed for fire protection system installation"
        },
        {
            name: "Municipality Approved",
            description: "Registered with Abu Dhabi and Al Ain municipalities"
        }
    ];

    const safetyStats = [
        {
            number: "Zero",
            label: "Lost Time Injuries (2024)",
            icon: "fas fa-shield-alt"
        },
        {
            number: "50,000+",
            label: "Man-hours without incident",
            icon: "fas fa-clock"
        },
        {
            number: "100%",
            label: "PPE Compliance Rate",
            icon: "fas fa-hard-hat"
        },
        {
            number: "500+",
            label: "Safety Training Hours (Annual)",
            icon: "fas fa-graduation-cap"
        }
    ];

    return (
        <>
            <SEO pageTitle="Quality & HSE" />        
            <HeaderOne />
            <BreadCrumb title="qualityHSE" innerTitle="Quality & HSE" />
            
            <div className="about__one section-padding">
                <div className="container">
                    {/* Introduction */}
                    <div className="row mb-60">
                        <div className="col-xl-12">
                            <div className="about__one-title text-center">
                                <span className="subtitle-one">Quality, Health, Safety & Environment</span>
                                <h2>Our Commitment to Excellence and Safety</h2>
                                <p className="mt-20">At Hydro Seal Insulation Works, quality and safety are not just policies – they are core values that guide every aspect of our operations. We are committed to protecting our people, our clients, and the environment while delivering world-class insulation solutions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Quality Policies */}
                    <div className="row mb-60">
                        <div className="col-xl-12 mb-40">
                            <div className="about__one-title text-center">
                                <h3>Quality Assurance</h3>
                            </div>
                        </div>
                        {qualityPolicies.map((policy, idx) => (
                            <div key={idx} className="col-xl-6 col-lg-6 mb-30">
                                <div className="services__one-single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className={policy.icon}></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>{policy.title}</h4>
                                        <p>{policy.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* HSE Policies */}
                    <div className="row mb-60">
                        <div className="col-xl-12 mb-40">
                            <div className="about__one-title text-center">
                                <h3>Health, Safety & Environmental Policies</h3>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="row gy-3">
                                {hsePolicies.map((policy, idx) => (
                                    <div key={idx} className="col-xl-6 col-lg-6">
                                        <div className="why-choose-us__one-single-feature">
                                            <i className="fas fa-check-double"></i>
                                            <span>{policy}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Safety Statistics */}
                    <div className="row mb-60" style={{background: '#f8f9fa', padding: '40px 0', borderRadius: '10px'}}>
                        <div className="col-xl-12 mb-40">
                            <div className="about__one-title text-center">
                                <h3>2024 Safety Performance</h3>
                            </div>
                        </div>
                        {safetyStats.map((stat, idx) => (
                            <div key={idx} className="col-xl-3 col-lg-6 mb-30">
                                <div className="text-center">
                                    <div className="mb-20">
                                        <i className={`${stat.icon} fa-3x text-primary`}></i>
                                    </div>
                                    <h2 className="text-primary">{stat.number}</h2>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="row mb-60">
                        <div className="col-xl-12 mb-40">
                            <div className="about__one-title text-center">
                                <h3>Certifications & Accreditations</h3>
                            </div>
                        </div>
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="col-xl-4 col-lg-6 mb-30">
                                <div className="services__one-single-service text-center">
                                    <div className="services__one-single-service-content">
                                        <i className="fas fa-certificate fa-3x mb-20 text-primary"></i>
                                        <h4>{cert.name}</h4>
                                        <p>{cert.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Safety Training */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="p-5" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                                <h4 className="mb-20">Continuous Training & Development</h4>
                                <p className="mb-20">We invest heavily in ongoing training to ensure our team maintains the highest standards of safety and quality:</p>
                                <div className="row gy-2">
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> Safety Induction Training
                                    </div>
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> Working at Heights Certification
                                    </div>
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> Confined Space Entry Training
                                    </div>
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> Fire Safety & Prevention
                                    </div>
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> First Aid & Emergency Response
                                    </div>
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> Equipment Operation Training
                                    </div>
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> Environmental Awareness
                                    </div>
                                    <div className="col-xl-6">
                                        <i className="fas fa-check-circle text-primary"></i> Quality Control Procedures
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

export default QualityHSEPage;

