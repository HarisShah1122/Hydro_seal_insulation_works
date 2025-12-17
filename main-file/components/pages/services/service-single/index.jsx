"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import thermalInsulationImg from "../../../../public/assets/img/Thermal Insulation.jpg";

const ServicesSingle = ({serviceDetails}) => {
    // Use custom banner image for thermal insulation service
    const customImage = serviceDetails?.id === 'thermal-insulation' ? thermalInsulationImg : null;
    
    return (
        <>
            <SEO pageTitle={`${serviceDetails?.title} - Hydro Seal Insulation Works`} />            
            <HeaderOne />
            <BreadCrumb 
                title={serviceDetails?.title} 
                innerTitle={serviceDetails?.subtitle} 
                customImage={customImage}
            />
            <ServicesSingleMain serviceDetails={serviceDetails}/>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;