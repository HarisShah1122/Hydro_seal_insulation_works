"use client";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import servicesData from '@/components/data/services-data';

const ServicesMain = () => {
    const tCommon = useTranslations('common');
    const tNav = useTranslations('nav');
    
    // Map service titles to translation keys
    const serviceTitles = {
        'thermal-insulation': 'thermalInsulation',
        'waterproofing-solutions': 'waterproofing',
        'hvac-insulation': 'hvacInsulation',
        'acoustic-insulation': 'acousticInsulation',
        'fire-protection-insulation': 'fireProtection',
        'specialized-coatings': 'specializedCoatings'
    };
    
    return (
        <>
	    <div className="services__four section-padding">
                <div className="container">
                    <div className="row gy-4">
                        {servicesData?.map((data, id) => {
                            const titleKey = serviceTitles[data.id];
                            const displayTitle = titleKey ? tNav(titleKey) : data.title.split(' ').slice(0, 2).join(' ');
                            
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                    <div className="services__four-single-service">
                                        <div className="services__four-single-service-icon">
                                            {data.icon} 
                                        </div>
                                        <div className="services__four-single-service-content">
                                            <h4>{displayTitle}</h4>
                                            <p>{data.des}</p>
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

export default ServicesMain;