"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import BlogSingleMain from "./blog-details";

const BlogDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderOne />
            <div className="page__banner">
                <div className="page__banner-shape">
                    <img src="/assets/img/shape/page-banner-shape.png" alt="image" />
                </div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="page__banner-content">
                                <h2>{singleData?.title}</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="page__banner-img">
                                <img src="/assets/img/banner/page-banner-img.jpg" alt={singleData?.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlogSingleMain singleData={singleData}/>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default BlogDetails;