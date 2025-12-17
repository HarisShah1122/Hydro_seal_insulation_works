import { memo } from 'react';
import { ttlocksVideoData } from '@/components/data/ttlocks-data';

const VideoSection = () => {
    const videoContainerStyle = {
        height: '400px',
        overflow: 'hidden',
        borderRadius: '12px'
    };

    const videoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    return (
        <div className="col-xl-12">
            <div className="ttlocks__gallery-item-content text-center mb-4">
                <h3 className="mb-3">{ttlocksVideoData.title}</h3>
                <p className="mb-0">{ttlocksVideoData.description}</p>
            </div>
            <div className="ttlocks__gallery-item-video" style={videoContainerStyle}>
                <video 
                    controls 
                    className="img-fluid" 
                    style={videoStyle}
                    aria-label={ttlocksVideoData.alt}
                >
                    <source src={ttlocksVideoData.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default memo(VideoSection);

