import ImageGroup from "./ImageGroup";
import { useState, useEffect } from "react";

export default function Gallery({ openModal, setId, searchTerm }) {
    const [images, setImages] = useState([]);
    useEffect(async () => {
        const res = await fetch("/api/images");
        const data = await res.json();
        setImages(data.images);
    }, []);
    useEffect(async () => {
        const res = await fetch(`/api/images/${searchTerm}`);
        const data = await res.json();
        console.log(data)
        setImages(data.images);
    }, [searchTerm]);
    

    return (
        <main className="masonry ">
            {images.map((img) => (
                <ImageGroup
                    key={img.id}
                    className="shadow-sm rounded-lg mb-6 w-full "
                    src={img.url}
                    alt={img.label}
                    label={img.label}
                    onClick={() => {
                        openModal();
                        setId(img.id);
                    }}
                />
            ))}
        </main>
    );
}
