import React, { useState, useEffect } from 'react';
import './PagePhotography.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';

function PagePhotography() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const imagesList = [];
            // Loop through 30 images (pic1.jpg to pic30.jpg)
            for (let i = 1; i <= 30; i++) {
                // Dynamically import images using import()
                try {
                    const image = await import(`../images/pic${i}.jpg`);
                    imagesList.push({ src: image.default, rowSpan: i % 5 === 0 ? 2 : 1 }); // Some images span 2 rows
                } catch (error) {
                    console.error(`Error loading image pic${i}.jpg`, error);
                }
            }
            setImages(imagesList);
        };

        fetchImages();
    }, []);

    return (
        <main id="photography">
            <Navbar />
            <div className='image-container'>
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div
                            key={index}
                            className="image-inner"
                            style={{
                                gridRowEnd: `span ${image.rowSpan}`, // Dynamically set row span for images
                            }}
                        >
                            <img src={image.src} alt={image.title} />
                            <div className="image-title">{image.title}</div>
                        </div>
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
        </main>
    );
}

export default PagePhotography;
