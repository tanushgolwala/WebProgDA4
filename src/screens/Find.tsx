import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Gallery } from 'react-grid-gallery';
import { RingLoader } from "react-spinners";

const Find: React.FC = () => {
    const [images, setImages] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        const queryParam = searchParams.get("query");
        if (queryParam) {
            setSearchQuery(queryParam.toUpperCase());
            handleCall(queryParam);
        }
    }, [location.search]);

    const handleCall = async (searchQuery: string) => {
        try {
            const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${30}`, {
                headers: {
                    "Authorization": process.env.REACT_APP_PEXELS_API_KEY
                }
            });
            const fetchedImages = response.data.photos.map((photo: any) => ({
                src: photo.src.large,
                thumbnail: photo.src.tiny,
                thumbnailWidth: photo.width,
                thumbnailHeight: photo.height,
                caption: photo.photographer
            }));
            setImages(fetchedImages);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching images:", error);
            setLoading(false); // Make sure to set loading to false even on error
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-black min-h-screen min-w-screen">
            <div className="flex justify-center items-center mb-4">
                <h1 className="text-3xl font-semibold text-white">{searchQuery}</h1>
            </div>
            <div className="flex justify-center items-center mb-4">
                <RingLoader color={"#ffffff"} loading={loading} size={100} />
            </div>
            <div className="flex justify-center">
                {images.length > 0 && 
                    <div className="max-w-4xl w-full">
                        <Gallery images={images} />
                    </div>
                }
            </div>
        </div>
    );
};

export default Find;
