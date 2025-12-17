"use client";
import { useMemo } from 'react';
import { ttlocksGalleryData } from '@/components/data/ttlocks-data';
import GalleryGrid from './ttlocks-gallery/GalleryGrid';
import VideoSection from './ttlocks-gallery/VideoSection';

const TtlocksGallery = () => {
    const sectionData = useMemo(() => ({
        subtitle: "Our Solutions",
        title: "Smart Lock Technology",
        description: "Experience our innovative smart lock solutions designed for modern hospitality and security needs."
    }), []);

    return (
        <section className="ttlocks__gallery section-padding" aria-label="Smart Lock Technology Gallery">
            <div className="container">
                <header className="row justify-content-center text-center mb-50">
                    <div className="col-xl-7 col-lg-7 col-md-9">
                        <span className="subtitle-one">{sectionData.subtitle}</span>
                        <h2>{sectionData.title}</h2>
                        <p>{sectionData.description}</p>
                    </div>
                </header>
                <div className="row gy-5">
                    <GalleryGrid items={ttlocksGalleryData} />
                    <VideoSection />
                </div>
            </div>
        </section>
    );
};

export default TtlocksGallery;

