import ImageGroup from "./ImageGroup";
import { images } from "./images";

export default function Gallery({ openModal, setId }) {
    return (
        <main className="masonry ">
            {images.map((img) => (
                <ImageGroup
                    key={img.id}
                    className="shadow-sm rounded-lg mb-6"
                    src="https://picsum.photo/200"
                    alt="test"
                    label={img.author}
                    onClick={() => {
                        openModal();
                        setId(img.id);
                    }}
                />
            ))}
        </main>
    );
}
