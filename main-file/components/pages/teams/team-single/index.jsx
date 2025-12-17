"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamSingleMain from "./team-single";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";

const TeamSingle = ({teamDetails}) => {
    return (
        <>
            <SEO pageTitle={teamDetails?.name} />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title={teamDetails?.name} innerTitle={teamDetails?.name} />
            <TeamSingleMain teamDetails={teamDetails}/>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default TeamSingle;