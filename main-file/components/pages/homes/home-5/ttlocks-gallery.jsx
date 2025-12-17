"use client";
import { useTranslations } from 'next-intl';
import { getTtlocksGalleryData } from '@/components/data/ttlocks-data';
import GalleryGrid from './ttlocks-gallery/GalleryGrid';
import VideoSection from './ttlocks-gallery/VideoSection';

const TtlocksGallery = () => {
    const t = useTranslations('projects');
    const galleryData = getTtlocksGalleryData(t);

    return (
        <section className="ttlocks__gallery section-padding" aria-label="Hydro Seal Featured Projects Gallery">
            <div className="container">
                <header className="row justify-content-center text-center mb-50">
                    <div className="col-xl-7 col-lg-7 col-md-9">
                        <span className="subtitle-one">{t('subtitle')}</span>
                        <h2>{t('title')}</h2>
                        <p>{t('description')}</p>
                    </div>
                </header>
                <div className="row gy-5">
                    <GalleryGrid items={galleryData} />
                    {/* <VideoSection /> */}
                </div>
            </div>
        </section>
    );
};

export default TtlocksGallery;

