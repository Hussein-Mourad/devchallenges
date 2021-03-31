import Head from "next/head";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import AddPhotoModal from "../components/AddPhotoModal";

export default function Home() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [toBeDeleted, setToBeDeleted] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const deleteImage = async (id) => {
        const res = await fetch(`/api/delete/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();

        return data;
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };
    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };
    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <Head>
                <title>My Unsplash</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className={`container mx-auto px-2 sm:px-5 min-h-screen ${
                    isAddModalOpen ? "overflow-hidden" : ""
                }`}
            >
                <NavBar
                    className="mb-7"
                    onBtnClick={openAddModal}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <Gallery openModal={openDeleteModal} setId={setToBeDeleted} searchTerm={searchTerm}/>

                <AddPhotoModal
                    isAddModalOpen={isAddModalOpen}
                    closeAddModal={closeAddModal}
                />

                <Modal
                    className="w-11/12 sm:w-[400px]"
                    title="Are you sure?"
                    hidden={!isDeleteModalOpen}
                >
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
                        <Button
                            className="mr-2"
                            onClick={() => {
                                closeDeleteModal();
                                setToBeDeleted("");
                            }}
                        >
                            Cancel
                        </Button>
                        <Button color="danger">Delete</Button>
                    </div>
                </Modal>

                <Footer />
            </div>
        </>
    );
}
