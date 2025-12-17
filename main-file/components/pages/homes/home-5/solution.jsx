"use client";
import { useTranslations } from 'next-intl';
import image from "../../../../public/assets/img/Core Values Safety & Compliance.jpg";
import Count from "../../common/count";

const Solution = () => {
    const t = useTranslations('about');
    return (
        <>
            <div className="technology-solution__one section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6 col-md-9">
                            <div className="technology-solution__one-content">
                                
                                <h2>{t('coreValuesTitle')}</h2>
                                <div className="technology-solution__one-content-service">
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('value1Title')}</h4>
                                            <p>{t('value1Text')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('value2Title')}</h4>
                                            <p>{t('value2Text')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('value3Title')}</h4>
                                            <p>{t('value3Text')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('value4Title')}</h4>
                                            <p>{t('value4Text')}</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>{t('value5Title')}</h4>
                                            <p>{t('value5Text')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="satisfied-customer-counter">
                                    <div className="counter-wrapper">
                                        <h3 className="counter"><Count number={400}/></h3>
                                        <h3>+</h3>
                                    </div>
                                    <span>Satisfied Customers</span>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="technology-solution__one-image">
                                <div className="technology-solution__one-image-wrapper">
                                    <img src={image.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solution;