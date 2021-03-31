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
  const [searchTerm, setSearchTerm] = useState("");
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
    setImages((images) => {
      return images.filter((img) => {
        return img._id !== id;
      });
    });
  };
  const updateImages = (image) => {
    setImages((images) => {
      images.unshift(image);
      return images;
    });
  };

  useEffect(() => {
    getImages((err, data) => {
      if (!err) {
        setImages(data.images);
      } else {
        setError("No items found")
      }
      
    });
  }, []);
  console.log({ ...images });

  const filterByTerm = () => {
    setIsLoading(true)
    filterImages(searchTerm, (err, data) => {
      if (!err && data.images) {
        setImages(data.images);
      } else if (!data.images) {
        setImages([]);
        setError("No items found");
      } else {
        setImages([]);
        setError(err);
      }
      setSearchTerm("");
      setIsLoading(false);
    });
  }

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
          setIsLoading={setIsLoading}
        />
        {(isLoading || error) && (
          <div className="w-full h-[70vh] flex justify-center items-center">
            {isLoading && (
              <Loader type="Oval" color="#000" height={35} width={35} />
            )}
            {error && <div className="text-red-600">{error}</div>}
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
