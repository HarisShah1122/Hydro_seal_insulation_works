"use client"
import { useTranslations } from 'next-intl';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header/header-one';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import FooterTwo from '@/components/layout/footers/footer-two';
import ScrollToTop from '../common/scroll/scroll-to-top';

const RequestQuotePage = () => {
    const t = useTranslations('nav');
    
    return (
        <>
            <SEO pageTitle={t('requestQuote')} />
            <HeaderOne />
            <BreadCrumb title="requestQuote" innerTitle="requestQuote" />
            <RequestQuoteMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;