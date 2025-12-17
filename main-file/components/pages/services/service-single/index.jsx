"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicesSingle = ({serviceDetails}) => {
    return (
        <>
            <SEO pageTitle={`${serviceDetails?.title} - Skyware IT Solutions`} />            
            <HeaderOne />
            <BreadCrumb title={serviceDetails?.title} innerTitle={serviceDetails?.subtitle} />
            <ServicesSingleMain serviceDetails={serviceDetails}/>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;