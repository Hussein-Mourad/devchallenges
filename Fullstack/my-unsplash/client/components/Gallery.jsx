import ImageGroup from "./ImageGroup";
import { useState, useEffect } from "react";
import { images } from "./images";

export default function Gallery() {
    // const [state, setState] = useState({});

    // const updateColumns = (images) => {
    //     var colOne = [];
    //     var colTwo = [];
    //     var colThree = [];

    //     images.forEach((img, index) => {
    //         if (index % 3 === 1) {
    //             colOne.push(img.download_url);
    //         } else if (index % 3 === 2) {
    //             colTwo.push(img.download_url);
    //         } else {
    //             colThree.push(img.download_url);
    //         }
    //     });
    //     setState({ colOne, colTwo, colThree });
    // };
    // // const getRandomImg = (array) => {
    // //     var item = array[Math.floor(Math.random() * array.length)];
    // //     return item.download_url;
    // // };
    // useEffect(() => {
    //     updateColumns(images);
    // }, []);

    return (
        <main className="masonry ">
            {images.map((img) => (
                <ImageGroup
                    className="shadow-sm rounded-lg mb-6"
                    src={img.download_url}
                    alt="test"
                />
            ))}
        </main>
    );
}
{
    /* <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div>
                {state?.colOne?.map((img) => (
                    <Image className="rounded-lg mb-5" src={img} alt="nature" />
                ))}
            </div>

            <div>
                {state?.colTwo?.map((img) => (
                    <Image className="rounded-lg mb-5" src={img} alt="nature" />
                ))}
            </div>
            <div>
                {state?.colThree?.map((img) => (
                    <Image className="rounded-lg mb-5" src={img} alt="nature" />
                ))}
            </div>
        </main> */
}
