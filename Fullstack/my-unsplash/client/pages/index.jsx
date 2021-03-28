import Head from "next/head";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import checkImgURL from "../utils/checkImgURL";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const validateImg = async () => {
        const res = await checkImgURL("hkljkl47", 5000);
        if (res ==="success") {
            console.log(res);
        } else {
            console.log("error");
        }
    };
    validateImg();

    return (
        <>
            <Head>
                <title>My Unsplash</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`container mx-auto px-2 sm:px-5 min-h-screen ${
                    isModalOpen ? "overflow-hidden" : ""
                }`}
            >
                <NavBar className="mb-7" />
                <Gallery />
                {/* <Modal className="w-11/12 sm:w-[600px]" title="Add a new photo">
                    
                    <div className="flex flex-col mb-5">
                        <label className="text-sm text-gray-800 mb-1">
                            Label
                        </label>
                        <Input
                            type="text"
                            className="border border-gray-400 w-full"
                            placeholder="Enter a label for your photo"
                        />
                        <small className="mt-1 text-red-600">
                            Please enter
                        </small>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="text-sm text-gray-800 mb-1">
                            Photo URL
                        </label>
                        <Input
                            type="text"
                            className="border border-gray-400 w-full"
                            placeholder="Enter the url of the photo"
                        />
                        <small className="mt-1 text-red-600">
                            Please enter
                        </small>
                    </div>
                    <div className="flex justify-end">
                        <Button className="mr-2">Cancel</Button>
                        <Button color="primary">Submit</Button>
                    </div>
                </Modal>
                <Footer></Footer> */}

                {/* <Modal className="w-11/12 sm:w-[400px]" title="Are you sure?">
                    <div className="flex flex-col mb-5">
                        <label className="text-sm text-gray-800 mb-1">
                            Password
                        </label>
                        <Input
                            type="password"
                            className="border border-gray-400 w-full"
                            placeholder="Enter admin password"
                        />
                        <small className="mt-1 text-red-600"> </small>
                    </div>
                    <div className="flex justify-end">
                        <Button className="mr-2">Cancel</Button>
                        <Button color="danger">Delete</Button>
                    </div>
                </Modal> */}
            </div>
        </>
    );
}
