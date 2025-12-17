"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import bannerBg from "../../../../public/assets/img/banner/banner-five-bg.png";
import banner1 from "../../../../public/assets/img/banner/banner-five.png";
import banner2 from "../../../../public/assets/img/banner/banner-five-2.png";

const BannerFive = () => {
    const t = useTranslations('home');
    const tCommon = useTranslations('common');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    
    return (
        <>
            <div className="banner__five" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-7 col-lg-6">
                            <div className="banner__five-content">
                                <span className="subtitle-one">{t('companyName')}</span>
                                <h2>{t('title')}</h2>
                                <p>{t('description')}</p>
                                <div className="banner__five-content-bottom">
                                    <Link href="/contact" className="btn-two">{tCommon('contactUs')}<i className="fa fa-arrow-right"></i></Link>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-9">
                            <div className="banner__five-image">
                                <div className="banner__five-image-wrapper">
                                    <img src={banner1.src} alt="image" />
                                    <img src={banner2.src} className="img-2 animate-y-axis" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default BannerFive;