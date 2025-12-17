"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import FourColumns from "./four-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";

const PortfolioFourColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 04 Columns' />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="04 Columns" innerTitle="Portfolio Grid" />
            <FourColumns />        
            <FooterTwo />     
            <ScrollToTop />     
        </>
    );
};

export default PortfolioFourColumns;