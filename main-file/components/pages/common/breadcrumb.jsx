"use client";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import defaultImage from "../../../public/assets/img/banner/page-banner-img.png";
import shape from "../../../public/assets/img/shape/page-banner-shape.png";

const BreadCrumb = ({title, innerTitle, customImage}) => {
    const t = useTranslations('nav');
    const bannerImage = customImage || defaultImage;
    
    // Map service titles to translation keys
    const titleMap = {
        'Thermal Insulation': 'thermalInsulation',
        'Waterproofing Solutions': 'waterproofing',
        'HVAC Insulation': 'hvacInsulation',
        'Acoustic Insulation': 'acousticInsulation',
        'Fire Protection Insulation': 'fireProtection',
        'Specialized Coatings': 'specializedCoatings'
    };
    
    // Get translation key or use title as-is if it's already a key
    const translationKey = titleMap[title] || title;
    
    // Try to get translation, fallback to original title if not found
    let translatedTitle = title;
    try {
        const translated = t(translationKey);
        if (translated && translated !== translationKey) {
            translatedTitle = translated;
        }
    } catch (e) {
        // If translation fails, keep original title
        translatedTitle = title;
    }
    
    return (
        <div className="page__banner">
            <div className="page__banner-shape">
                <img src={shape.src} alt="image" />
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="page__banner-content">
                            <h2>{translatedTitle}</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="page__banner-img">
                            <img src={bannerImage.src} alt={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;