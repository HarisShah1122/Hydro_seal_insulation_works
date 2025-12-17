import { memo } from 'react';

const GalleryItem = ({ image, title, description, alt, headingTag = 'h3' }) => {
    const imageStyle = {
        height: '400px',
        overflow: 'hidden',
        borderRadius: '12px',
        marginBottom: '20px'
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    const HeadingTag = headingTag;

    return (
        <div className="ttlocks__gallery-item">
            <div className="ttlocks__gallery-item-image" style={imageStyle}>
                <img 
                    src={image.src} 
                    alt={alt} 
                    className="img-fluid" 
                    style={imgStyle}
                    loading="lazy"
                />
            </div>
            <div className="ttlocks__gallery-item-content">
                <HeadingTag className="mb-3">{title}</HeadingTag>
                <p className="mb-0">{description}</p>
            </div>
        </div>
    );
};

export default memo(GalleryItem);
