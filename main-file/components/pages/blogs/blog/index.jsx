"use client"
import { useTranslations } from 'next-intl';
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    const t = useTranslations('nav');
    const tBlog = useTranslations('blog');
    
    return (
        <>
            <SEO pageTitle={tBlog('title')} />
            <HeaderOne />
            <BreadCrumb title="blog" innerTitle="blog" />
            <BlogGridMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;