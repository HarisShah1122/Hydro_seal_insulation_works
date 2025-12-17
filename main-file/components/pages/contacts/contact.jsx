"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />        
            <HeaderOne />
            <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">Contact us</span>
                                    <h2>Need Insulation or Waterproofing Services?</h2>
                                    <p>Get in touch with our experts for a free consultation and quote.</p>
                                </div>
                                <div className="contact__two-form">
                                    <FormArea />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact__two-contact-info">
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-1.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Email</h4>
                                        <span>hydroseal.insulation@gmail.com</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-2.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Contacts</h4>
                                        <span>052 859 5217<br/>
                                        052 757 1874<br/>
                                        052 757 1873
                                        </span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-3.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Timing</h4>
                                        <span>Sat - Thu : 8:00 AM - 6:00 PM</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon/service-4.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Location</h4>
                                        <span>Al Ain, Abu Dhabi, UAE</span>
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

export default ContactUs;