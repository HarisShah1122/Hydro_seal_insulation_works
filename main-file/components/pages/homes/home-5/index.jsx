"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerFive from "./banner";
import AboutFive from "./about";
import WorkAreaFive from "./work";
import Solution from "./solution";
import ServicesFive from "./services";
import Choose from "./choose";
import TtlocksGallery from "./ttlocks-gallery";
// import TestimonialFive from "./testimonial";
// import BlogFive from "./blog";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeFive = () => {

    return (
        <div>
            <SEO pageTitle='Software it Solutions' />
            <HeaderOne />
            <BannerFive />
            <AboutFive />
            <WorkAreaFive />
            <Solution />
            <ServicesFive />
            <TtlocksGallery />
            <Choose />
            {/* <TestimonialFive /> */}
            {/* <BlogFive /> */}
            <FooterTwo />
            <ScrollToTop />
        </div>
    );
};

export default HomeFive;