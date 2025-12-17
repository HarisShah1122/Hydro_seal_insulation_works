"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import TestimonialMain from "./testimonial";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Testimonial = () => {
    return (
        <>
            <SEO pageTitle='Testimonials' />
            <HeaderOne />
            <BreadCrumb title='Testimonials' innerTitle='Testimonials' />
            <TestimonialMain />
            <FooterTwo />
            <ScrollToTop
             />         
        </>
    );
};

export default Testimonial;