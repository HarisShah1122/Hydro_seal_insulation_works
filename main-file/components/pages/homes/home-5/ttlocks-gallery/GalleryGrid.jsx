import { memo } from 'react';
import GalleryItem from './GalleryItem';

const GalleryGrid = ({ items, headingTag = 'h3' }) => {
    return (
        <>
            {items.map((item) => (
                <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <GalleryItem
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        alt={item.alt}
                        headingTag={headingTag}
                    />
                </div>
            ))}
        </>
    );
};

export default memo(GalleryGrid);
