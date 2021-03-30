import Head from "next/head";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import validateImg from "../utils/validateImg";

export default function Home() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [toBeDeleted, setToBeDeleted] = useState("");
    const [addForm, setAddForm] = useState({
        label: "",
        url: "",
        labelErr: "",
        urlErr: "",
    });
    console.log(addForm);
    // useEffect(async () => {
    //     const res = await fetch("/api/images");
    //     const { images } = await res.json();
    //     console.log(images);
    // }, []);

    const addImage = async (image) => {
        const res = await fetch("/api/image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(image),
        });
        const data = await res.json();
        console.log(data);
        return data;
    };

    const deleteImage = async (id) => {
        const res = await fetch(`/api/delete/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        console.log(data);
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
                <NavBar className="mb-7" onBtnClick={openAddModal} />

                {/* <Gallery openModal={openDeleteModal} setId={setToBeDeleted} /> */}

                <Modal
                    className="w-11/12 sm:w-[600px]"
                    title="Add a new photo"
                    hidden={!isAddModalOpen}
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setAddForm((state) => {
                                return {
                                    ...state,
                                    labelErr: "",
                                    urlErr: "",
                                };
                            });
                            if (addForm.label === "") {
                                setAddForm((state) => {
                                    return {
                                        ...state,
                                        labelErr: "Please provide a label",
                                    };
                                });
                            }
                            if (addForm.url === "") {
                                setAddForm((state) => {
                                    return {
                                        ...state,
                                        urlErr: "Please provide a url",
                                    };
                                });
                            } else {
                                validateImg(addForm.url)
                                    .then((res) => {
                                        addImage({
                                            label: addForm.label,
                                            url: addForm.url,
                                            width: res.width,
                                            heigth: res.height,
                                        });
                                    })
                                    .catch((err) => {
                                        setAddForm((state) => {
                                            return { ...state, urlErr: err };
                                        });
                                    });
                            }
                        }}
                    >
                        <div className="flex flex-col mb-5">
                            <label className="text-sm text-gray-800 mb-1">
                                Label
                            </label>
                            <Input
                                type="text"
                                name="label"
                                className="border border-gray-400 w-full"
                                placeholder="Enter a label for your photo"
                                value={addForm.label}
                                onChange={(e) => {
                                    setAddForm((state) => {
                                        return {
                                            ...state,
                                            label: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <small className="mt-1 text-red-600">
                                {addForm.labelErr}
                            </small>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="text-sm text-gray-800 mb-1">
                                Photo URL
                            </label>
                            <Input
                                type="text"
                                name="url"
                                className="border border-gray-400 w-full"
                                placeholder="Enter the url of the photo"
                                value={addForm.url}
                                onChange={(e) => {
                                    setAddForm((state) => {
                                        return {
                                            ...state,
                                            url: e.target.value,
                                        };
                                    });
                                }}
                            />
                            <small className="mt-1 text-red-600">
                                {addForm.urlErr}
                            </small>
                        </div>
                        <div className="flex justify-end">
                            <Button className="mr-2" onClick={closeAddModal}>
                                Cancel
                            </Button>
                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Modal>

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
