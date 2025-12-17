"use client";
import { useMemo } from 'react';
import { ttlocksGalleryData } from '@/components/data/ttlocks-data';
import GalleryGrid from './ttlocks-gallery/GalleryGrid';
import VideoSection from './ttlocks-gallery/VideoSection';

const TtlocksGallery = () => {
    const sectionData = useMemo(() => ({
        subtitle: "Our Projects",
        title: "Featured Insulation Projects",
        description: "Explore our portfolio of successful insulation and waterproofing projects across the UAE. From healthcare facilities to residential properties, we deliver excellence in every project."
    }), []);

    return (
        <section className="ttlocks__gallery section-padding" aria-label="Hydro Seal Featured Projects Gallery">
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
                    {/* <VideoSection /> */}
                </div>
            </div>
        </section>
    );
};

export default TtlocksGallery;

