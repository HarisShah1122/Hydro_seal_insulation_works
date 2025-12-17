"use client";
import { useTranslations } from 'next-intl';
import workBg from "../../../../public/assets/img/work-process/work-process-bg-2.png";
import arrow1 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";
import arrow2 from "../../../../public/assets/img/work-process/work-process-arrow-2.png";
import arrow3 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";

const WorkAreaFive = () => {
    const t = useTranslations('workProcess');
    return (        
        <div className="work-process__three" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <span className="subtitle-one">{t('title')}</span>
                        <h2>{t('subtitle')}</h2>
                    </div>
                </div>
                <div className="work-process__three-card">
                    <div className="work-process__three-card-arrows">
                        <img src={arrow1.src} alt="arrow" className="arrow-1" />
                        <img src={arrow2.src} alt="arrow" className="arrow-2" />
                        <img src={arrow3.src} alt="arrow" className="arrow-3" />
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>01</h3>
                        <h5>{t('step1Title')}</h5>
                        <p>{t('step1Desc')}</p>
                    </div>
                    <div className="work-process__three-card-single middle">
                        <h3>02</h3>
                        <h5>{t('step2Title')}</h5>
                        <p>{t('step2Desc')}</p>
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>03</h3>
                        <h5>{t('step3Title')}</h5>
                        <p>{t('step3Desc')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkAreaFive;