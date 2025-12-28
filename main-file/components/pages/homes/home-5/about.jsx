"use client";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import about1 from "../../../../public/assets/img/Trusted Partner in Insulation Solutions.jpg";
import about2 from "../../../../public/assets/img/about/about-five-2.png";
import aboutBg from "../../../../public/assets/img/about/about-five-bg.png";

// Client logos with dynamic imports to handle spaces in filenames
const client1 = "/assets/img/clients/AL RAHBA HOSPITAL Abu Dhabi.jpeg";
const client2 = "/assets/img/clients/Royal Care Medical Centre.jpeg";
const client4 = "/assets/img/clients/ALBANDARI General Contracting.png";
const client5 = "/assets/img/clients/SHAMRA General Contracting.png";

const AboutFive = () => {
    const t = useTranslations('about');
    const tCommon = useTranslations('common');
    return (
        <>
        <div className="about__five section-padding" style={{backgroundImage: `url(${aboutBg.src})`}}>
            <div className="brand__area mb-120">
                <div className="container">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={client1} alt="AL RAHBA HOSPITAL Abu Dhabi" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={client2} alt="Royal Care Medical Centre" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={client4} alt="ALBANDARI General Contracting" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={client5} alt="SHAMRA General Contracting" />
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={client1} alt="AL RAHBA HOSPITAL Abu Dhabi" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={client2} alt="Royal Care Medical Centre" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={client4} alt="ALBANDARI General Contracting" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={client5} alt="SHAMRA General Contracting" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-8">
                        <div className="about__five-image">
                            <div className="about__five-image-wrapper">
                                <img src={about1.src} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__five-content">
                            <span className="subtitle-one">{t('title')}</span>
                            <h2>{t('subtitle')}</h2>
                            <p className="mb-30">{t('description')}</p>
                            <div className="about__five-content-service">
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>{t('visionTitle')}</h4>
                                        <p>{t('visionText')}</p>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>{t('missionTitle')}</h4>
                                        <p>{t('missionText')}</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/about" className="btn-one">{tCommon('learnMore')}
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutFive;
