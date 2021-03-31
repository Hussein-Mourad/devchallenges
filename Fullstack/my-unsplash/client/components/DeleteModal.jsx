import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { deleteImage } from "../services/ImageServices";

export default function DeleteModal({
  isDeleteModalOpen,
  closeDeleteModal,
  id,
  setId,
  filterById,
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    deleteImage(id, password, (err, data) => {
      if (data.error) {
        setError(data.error);
      } else if (data.result) {
        closeDeleteModal();
        filterById(id);
        setId("");
        setPassword("");
      } else if (err) {
        setError(err);
      }
      setIsLoading(false);
    });
  };
  return (
    <Modal
      className="w-11/12 sm:w-[400px]"
      title="Are you sure?"
      hidden={!isDeleteModalOpen}
    >
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        autoComplete="off"
      >
        <div className="flex flex-col mb-5">
          <label className="text-sm text-gray-800 mb-1">Password</label>
          <Input
            type="password"
            className="border border-gray-400 w-full"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <small className="mt-1 text-red-600">{error}</small>
        </div>
        <div className="flex justify-end">
          <Button
            className="mr-2"
            type="button"
            onClick={() => {
              closeDeleteModal();
              setId("");
              setError("");
              setPassword("");
            }}
            isLoading={isLoading}
          >
            Cancel
          </Button>
          <Button color="danger" type="submit" isLoading={isLoading}>
            Delete
          </Button>
        </div>
      </form>
    </Modal>
  );
}
