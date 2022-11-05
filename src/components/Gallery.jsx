import * as React from 'react';
import "./Gallery.css";
import {useState} from 'react';
import GalleryThumbnail from './GalleryThumbnail';

export default function Gallery({images}) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    
    const _changeImage = (image) => setSelectedImage(image);
    
    const thumbnails = images.map((image, index) => {
        return (
            <GalleryThumbnail key={index} image={image} clickEvent={() => _changeImage(image)} />
        );
    })

    return (
        <div className="gallery">
            <div className="gallery-leftColumn">
                <ul className="thumbnailList">{thumbnails}</ul>
            </div>
            <div className="gallery-rightColumn">
                <img src={`/assets/${selectedImage}`} alt={selectedImage}/>
            </div>
        </div>
    );
}