import Head from "next/head";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import AddPhotoModal from "../components/AddPhotoModal";
import DeleteModal from "../components/DeleteModal";
import { filterImages, getImages } from "../services/ImageServices";
import Loader from "react-loader-spinner";

export default function Home() {
  const [images, setImages] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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

  const filterById = (id) => {
    setError("");
    setIsLoading("");
    setImages((images) => {
      return images.filter((img) => {
        return img._id !== id;
      });
    });
  };
  const updateImages = (image) => {
    setError("");
    setIsLoading(false);
    setImages((images) => {
      images.unshift(image);
      return images;
    });
  };

  useEffect(() => {
    getImages((err, data) => {
      if (!err && data.images.length !== 0) {
        setImages(data.images);
      } else if (data.images.length === 0) {
        setImages([]);
        setError("No items found");
      } else {
        setImages([]);
        setError(err);
      }
      setIsLoading(false);
    });
  }, []);

  const filterByTerm = (searchTerm) => {
    setIsLoading(true);
    setError("");
    filterImages(searchTerm, (err, data) => {
      if (!err && data.images.length !== 0) {
        setImages(data.images);
      } else if (data.images.length === 0) {
        setImages([]);
        setError("No items found");
      } else {
        setImages([]);
        setError(err);
      }
      setIsLoading(false);
    });
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
          filterByTerm={filterByTerm}
        />

        {isLoading && (
          <div className="w-full h-[70vh] flex justify-center items-center">
            <Loader type="Oval" color="#000" height={35} width={35} />
          </div>
        )}
        {error && (
          <div className="w-full h-[70vh] flex justify-center items-center text-gray-800">
            {error}
          </div>
        )}

        {!isLoading && !error && (
          <Gallery
            openModal={openDeleteModal}
            setId={setToBeDeleted}
            images={images}
          />
        )}

        <AddPhotoModal
          isAddModalOpen={isAddModalOpen}
          closeAddModal={closeAddModal}
          updateImages={updateImages}
        />

        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          closeDeleteModal={closeDeleteModal}
          id={toBeDeleted}
          setId={setToBeDeleted}
          filterById={filterById}
        />

        <Footer />
      </div>
    </>
  );
}
