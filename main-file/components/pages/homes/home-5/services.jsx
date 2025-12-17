"use client";
import servicesData from '@/components/data/services-data';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ServicesFive = () => {
    const t = useTranslations('services');
    const tCommon = useTranslations('common');
    return (
        <>
            <div className="services__five section-padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-50">
                        <div className="col-xl-7 col-lg-7 col-md-9">
                            <span className="subtitle-one">{t('title')}</span>
                            <h2>{t('subtitle')}</h2>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {servicesData?.slice(0, 3).map((data, id) => {
                            // Map service IDs to translation keys
                            const serviceKeys = {
                                'thermal-insulation': { title: t('thermalTitle'), desc: t('thermalDescription') },
                                'waterproofing-solutions': { title: t('waterproofingTitle'), desc: t('waterproofingDescription') },
                                'hvac-insulation': { title: t('hvacTitle'), desc: t('hvacDescription') }
                            };
                            
                            const serviceTranslation = serviceKeys[data.id] || { title: data.title.split(' ').slice(0, 2).join(' '), desc: data.des };
                            
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                    <div className="services__five-single-service">
                                        <div className="services__five-single-service-icon">
                                            {data.icon} 
                                        </div>
                                        <div className="services__five-single-service-content">
                                            <h4>{serviceTranslation.title}</h4>
                                            <p>{serviceTranslation.desc}</p>
                                            <Link href={`/services/${data.id}`} className="btn-three">{tCommon('readMore')}<i className="fas fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>       
        </>
    );
};

export default ServicesFive;