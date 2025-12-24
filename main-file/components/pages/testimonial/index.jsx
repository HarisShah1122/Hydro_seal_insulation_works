"use client"
import { useTranslations } from 'next-intl';
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import TestimonialMain from "./testimonial";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Testimonial = () => {
    const t = useTranslations('nav');
    
    return (
        <>
            <SEO pageTitle={t('testimonials')} />
            <HeaderOne />
            <BreadCrumb title='testimonials' innerTitle='testimonials' />
            <TestimonialMain />
            <FooterTwo />
            <ScrollToTop />         
        </>
    );
};

export default Testimonial;