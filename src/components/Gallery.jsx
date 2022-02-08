import {useState} from 'react';
import "./Gallery.css";

export default function Gallery({images}) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    
    const changeImage = (image) => setSelectedImage(image);
    
    const thumbnails = images.map((image, index) => {
        return (
            <li 
                key={index}
                data-testid='thumbnail'
                onClick={() => {changeImage(image)} }
                style={{backgroundImage: `url(/assets/${image})`}}
            />
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