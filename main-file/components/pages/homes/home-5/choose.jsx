"use client";
import { useTranslations } from 'next-intl';
import image2 from "../../../../public/assets/img/Your Trusted Insulation Partner.jpg";

const Choose = () => {
    const t = useTranslations('whyChoose');
    return (
        <>
        <div className="why-choose-us__four section-padding" >
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="why-choose-us__four-image">
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-9">
                        <div className="why-choose-us__four-left">
                            <div className="why-choose-us__four-title">
                                <span className="subtitle-one">{t('title')}</span>
                                <h2>{t('subtitle')}</h2>
                                <div className="why-choose-us__four-content-service">
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('feature1Title')}</h4>
                                            <p>{t('feature1Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('feature2Title')}</h4>
                                            <p>{t('feature2Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('feature3Title')}</h4>
                                            <p>{t('feature3Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('feature4Title')}</h4>
                                            <p>{t('feature4Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('feature5Title')}</h4>
                                            <p>{t('feature5Desc')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-choose-us__four-progress-bar">
                                    {/* <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>75%</span>
                                        </div>
                                        <h3>Successful</h3>
                                    </div> 
                                     <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>85%</span>
                                        </div>
                                        <h3>Branching</h3>
                                    </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Choose;