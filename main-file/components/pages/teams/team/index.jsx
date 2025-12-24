"use client"
import { useTranslations } from 'next-intl';
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPage = () => {
    const t = useTranslations('nav');
    
    return (
        <>
            <SEO pageTitle={t('ourTeam')} />
            <HeaderOne />
            <BreadCrumb title='ourTeam' innerTitle='ourTeam'/>
            <TeamMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default TeamPage;