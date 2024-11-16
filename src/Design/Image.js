import React, { useState, useEffect } from 'react';
import { storage } from '../firebase'; // Import Firebase Storage instance

const ImageComponent = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        try {
            const imagesRef = storage.ref('images'); // Path to your folder containing images
            const imageList = await imagesRef.listAll();

            const urls = await Promise.all(
                imageList.items.map(async (imageRef) => {
                    return {
                        url: await imageRef.getDownloadURL(),
                        name: imageRef.name // Include image name for deletion
                    };
                })
            );
            setImageUrls(urls);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchImages(); // Initial fetch when component mounts

        // Fetch images periodically (every 30 seconds in this example)
        const intervalId = setInterval(fetchImages, 10000);

        return () => {
            clearInterval(intervalId); // Cleanup the interval on component unmount
        };
    }, []);

    const handleDeleteImage = async (imageName) => {
        try {
            const imageRef = storage.ref('images').child(imageName);
            await imageRef.delete();
            // Remove the deleted image from imageUrls state
            setImageUrls((prevUrls) =>
                prevUrls.filter((url) => url.name !== imageName)
            );
            console.log('Image deleted successfully');
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <div>
            <h1>All Images</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="image-list">
                    {imageUrls.length > 0 ? (
                        imageUrls.map((image, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <img
                                    style={{ height: '50px', width: '50px', marginRight: '10px' }}
                                    src={image.url}
                                    alt={`Image ${index}`}
                                />
                                <button onClick={() => handleDeleteImage(image.name)}>
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No images found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageComponent;
