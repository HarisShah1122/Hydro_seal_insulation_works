"use client";
import { useTranslations } from 'next-intl';
import icon from "../../../public/assets/img/testimonial/testimonial-quote-two.png";
import avatar1 from "../../../public/assets/img/avatar/avatar-1.jpg";
import avatar2 from "../../../public/assets/img/avatar/avatar-2.jpg";

const TestimonialMain = () => {
    const t = useTranslations('testimonialPage');
    
    return (
        <>
        <div className="testimonial__five section-padding">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="testimonial__five-card">
                            <div className="testimonial__five-card-top mb-40">
                                <img src={icon.src} alt="image" />
                                <div className="testimonial-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p>{t('testimonial1Text')}</p>
                            <div className="testimonial__five-card-profile">
                                <img src={avatar2.src} alt="image" />
                                <div className="testimonial__five-card-profile-content">
                                    <h4>{t('testimonial1Name')}</h4>
                                    <span>{t('testimonial1Position')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial__five-card">
                            <div className="testimonial__five-card-top mb-40">
                            <img src={icon.src} alt="image" />
                                <div className="testimonial-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p>{t('testimonial2Text')}</p>
                            <div className="testimonial__five-card-profile">
                                <img src={avatar1.src} alt="image" />
                                <div className="testimonial__five-card-profile-content">
                                    <h4>{t('testimonial2Name')}</h4>
                                    <span>{t('testimonial2Position')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="testimonial__six section-padding">
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-lg-7 col-lg-7 col-md-9">
                        <span className="subtitle-one">{t('subtitle')}</span>
                        <h2>{t('title')}</h2>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                        <div className="testimonial__six-card">
                            <h4>{t('testimonial3Name')}</h4>
                            <span>{t('testimonial3Position')}</span>
                            <p>{t('testimonial3Text')}</p>
                            <div className="testimonial-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial__six-card">
                            <h4>{t('testimonial4Name')}</h4>
                            <span>{t('testimonial4Position')}</span>
                            <p>{t('testimonial4Text')}</p>
                            <div className="testimonial-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TestimonialMain;