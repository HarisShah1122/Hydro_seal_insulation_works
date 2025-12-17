"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FaqPage from "./faq-page";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Faq = () => {
    return (
        <>        
            <SEO pageTitle='FAQ' />
            <HeaderOne />
            <BreadCrumb title='Question & Ans.' innerTitle="FAQ's" />
            <FaqPage />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default Faq;