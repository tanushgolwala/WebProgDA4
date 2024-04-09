import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Gallery } from 'react-grid-gallery';

const Find: React.FC = () => {
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const location = useLocation();

    useEffect(() => {
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
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-black">

            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-semibold mb-4 text-white self-center justify-center">{searchQuery}</h1>
            </div>
            <div className="flex-row justify-center items-center">
                <Gallery images={images}  />
            </div>
        </div>
    );
};

export default Find;
