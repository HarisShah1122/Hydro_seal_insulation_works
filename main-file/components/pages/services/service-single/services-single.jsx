"use client";
import { useMemo } from 'react';
import ServicesDetails from '../../../../public/assets/img/service/service-details.png';
import ThermalInsulation2 from '../../../../public/assets/img/Thermal Insulation 2.jpg';
import WaterproofingSolutions from '../../../../public/assets/img/Waterproofing Solutions.jpg';
import image1 from '../../../../public/assets/img/icon/service-details-icon-2.png';
import image2 from '../../../../public/assets/img/icon/service-details-icon.png';
import { ttlocksGalleryData } from '@/components/data/ttlocks-data';
import GalleryGrid from '@/components/pages/homes/home-5/ttlocks-gallery/GalleryGrid';
import VideoSection from '@/components/pages/homes/home-5/ttlocks-gallery/VideoSection';

const ServicesSingleMain = ({serviceDetails}) => {
    // Use custom images for specific services
    const getServiceImage = () => {
        switch(serviceDetails?.id) {
            case 'thermal-insulation':
                return ThermalInsulation2;
            case 'waterproofing-solutions':
                return WaterproofingSolutions;
            default:
                return ServicesDetails;
        }
    };
    
    const serviceImage = getServiceImage();
    
    return (
        <>
        <div className="service__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="service__details-thumb">
                            <img src={serviceImage.src} alt={serviceDetails.title} />
                            <div className="service__details-thumb-icon">
                                <div className="service__details-thumb-icon-wrapper">
                                    <img src={image1.src} alt="Service Icon" />
                                </div>
                            </div>
                        </div>
                        <div className="service__details-content">
                            <h2>{serviceDetails.title}: {serviceDetails.subtitle}</h2>
                            <p>{serviceDetails.overview}</p>
    
                            {/* Project Gallery for Thermal Insulation Service */}
                            {serviceDetails?.id === 'thermal-insulation' && (
                                <section className="ttlocks__gallery-section mt-5 mb-5" aria-label="Featured Insulation Projects">
                                    <header>
                                        <h3 className="sub-heading">Featured Insulation Projects</h3>
                                        <p>Explore our portfolio of successful insulation projects across healthcare, education, residential, and commercial sectors.</p>
                                    </header>
                                    <div className="row gy-5 mt-4">
                                        <GalleryGrid items={ttlocksGalleryData} headingTag="h4" />
                                    </div>
                                </section>
                            )}
    
                            <h3 className="sub-heading">Our {serviceDetails.title} Services</h3>
                            <p>We provide comprehensive {serviceDetails.title.toLowerCase()} solutions tailored to your project requirements. Our expert team delivers high-quality insulation services that ensure energy efficiency, structural protection, and long-term cost savings.</p>
    
                            <div className="service__details-content-box">
                                <div className="service__details-content-box-single">
                                    <h4>Key Features & Capabilities</h4>
                                    <p>Our {serviceDetails.title.toLowerCase()} services include a comprehensive range of solutions designed to meet UAE building standards and international quality requirements.</p>
                                    <ul className="service-qualities">
                                        {serviceDetails.features?.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="service__details-content-box-single">
                                    <div className="icon">
                                        <img src={image2.src} alt="Service Benefits" />
                                    </div>
                                    <h4 className="mb-4">Project Benefits</h4>
                                    <p className="m-0">Protect your property investment with our {serviceDetails.title.toLowerCase()} solutions that deliver superior performance, energy savings, and long-lasting protection.</p>
                                </div>
                            </div>

                            <h3 className="sub-heading">Why Choose Our {serviceDetails.title} Services?</h3>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    {serviceDetails.benefits?.slice(0, 3).map((benefit, index) => (
                                        <div key={index} className="benefit-item mb-4">
                                            <h5><i className="flaticon-check me-2"></i>{benefit}</h5>
                                            <p>Experience superior quality and performance with our proven {serviceDetails.title.toLowerCase()} expertise and premium materials.</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-md-6">
                                    {serviceDetails.benefits?.slice(3, 6).map((benefit, index) => (
                                        <div key={index} className="benefit-item mb-4">
                                            <h5><i className="flaticon-check me-2"></i>{benefit}</h5>
                                            <p>Leverage our 15+ years of experience to achieve your project goals with professional {serviceDetails.title.toLowerCase()} solutions.</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <h3 className="sub-heading">Our {serviceDetails.title} Process</h3>
                            <div className="process-steps mt-4">
                                <div className="row">
                                    {serviceDetails.process?.map((step, index) => (
                                        <div key={index} className="col-md-3 mb-4">
                                            <div className="process-step text-center">
                                                <div className="step-number">{index + 1}</div>
                                                <h6>{step}</h6>
                                                <p>Professional {serviceDetails.title.toLowerCase()} implementation with industry best practices.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}

                            <h3 className="sub-heading">Materials & Technologies We Use</h3>
                            <div className="technologies-section mt-4">
                                <div className="row">
                                    {serviceDetails.technologies?.map((tech, index) => (
                                        <div key={index} className="col-md-3 col-sm-6 mb-3">
                                            <div className="tech-item text-center p-3 border rounded">
                                                <span className="tech-name">{tech}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cta-section mt-5 p-4 bg-light rounded">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <h4>Ready to Start Your {serviceDetails.title} Project?</h4>
                                        <p className="mb-0">Let's discuss how our {serviceDetails.title.toLowerCase()} services can protect your property and deliver long-term value for your project.</p>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <a href="/contact" className="btn btn-primary">Get Free Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
};

export default ServicesSingleMain;