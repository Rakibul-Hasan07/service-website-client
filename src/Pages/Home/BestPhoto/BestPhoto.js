import React, { useEffect, useState } from 'react';
import { Gallery } from "react-grid-gallery";
// import { images as IMAGES } from "./images";

const BestPhoto = () => {
    const [photo, setPhoto] = useState([])
    useEffect(() => {
        fetch('https://service-website-server-one.vercel.app/photo')
            .then(res => res.json())
            .then(data => setPhoto(data));
    }, [])
    const images = [
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Boats in ocean</div>
                </div>
            ),
        },
        {
            src: "https://i.ibb.co/30QfJHd/download-2.jpg",
            width: 320,
            height: 200,
            tags: [
                { value: "Sun", title: "Sun" },
                { value: "Grass", title: "Grass" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Sunlight</div>
                </div>
            ),
        },
        {
            src: "https://i.ibb.co/Hq1cNZh/download.jpg",
            width: 320,
            height: 170,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "Hill", title: "Hill" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Beauty of nature</div>
                </div>
            ),
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            width: 320,
            height: 150,
            tags: [
                { value: "Bird", title: "Bird" },
                { value: "Building", title: "Building" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Beauty of nature</div>
                </div>
            ),
        },
        {
            src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Sky", title: "Sky" },
                { value: "Clock", title: "Clock" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Beauty of nature</div>
                </div>
            ),
        },
        {
            src: "https://i.ibb.co/4tHWBCp/images-3.jpg",
            width: 320,
            height: 200,
            tags: [
                { value: "Nature", title: "Nature" },
                { value: "Hill", title: "Hill" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Beauty of nature</div>
                </div>
            ),
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            width: 320,
            height: 190,
            tags: [
                { value: "Room", title: "Room" },
                { value: "Art", title:"Art" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Beauty of nature</div>
                </div>
            ),
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Beauty", title: "Beauty" },
                { value: "Flower", title: "Flower" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Beauty of nature</div>
                </div>
            ),
        },
        {
            src: "https://i.ibb.co/52c3b2p/images-4.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Tiger", title: "Tiger" },
                { value: "Water", title: "Water" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Tiger in water</div>
                </div>
            ),
        },
        {
            src: "https://i.ibb.co/fqz4DXS/images-6.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "car", title: "car" },
                { value: "Hill", title: "Hill" },
            ],
            customOverlay: (
                <div className="custom-overlay__caption text-white">
                    <div>Beauty of nature</div>
                </div>
            ),
        },
    ];
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-4'>Some Popular Photograph</h3>
            <Gallery images={images} enableImageSelection={false} />
        </div>
    );
};

export default BestPhoto;