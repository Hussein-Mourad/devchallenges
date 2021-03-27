import Head from "next/head";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import { useState } from "react";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Head>
                <title>My Unsplash</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`container mx-auto px-5 min-h-screen ${
                    isModalOpen ? "overflow-hidden" : ""
                }`}
            >
                <NavBar className="mb-7" />
                <Gallery />
                {/* <Modal /> */}
            </div>
        </>
    );
}
