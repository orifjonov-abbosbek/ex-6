import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const ServiceModal = ({ isOpen, onRequestClose, onCreateService }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCreateService = () => {
    const newService = {
      title,
      description,
      image,
    };

    onCreateService(newService);
    onRequestClose(); // Close the modal after creating the service
  };

  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "2rem",
      width: "800px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      backgroundColor: "white",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Service Modal"
      style={customModalStyles}
    >
      <div className="mb-[20px] pb-2 flex items-center justify-between border-b">
        <h3 className="text-xl text-blue-900 text-[20px] font-semibold dark:text-white">
          Xizmat qoshish
        </h3>
        <AiOutlineClose
          onClick={() => {
            console.log("Close button clicked");
            onRequestClose();
          }}
        />
      </div>

      <div>
        <div className="mb-4">
          <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark:text-white">
            <label>Xizmat rasmi</label>
          </div>
          <input
            className="w-full border border-gray-400 rounded bg-white"
            type="file"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-5">
          <label className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark:text-white">
            Xizmat nomi
          </label>
        </div>
        <input
          type="text"
          className="w-full rounded mb-5"
          placeholder="Xizmat nomi"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <div className="">
          <label className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark:text-white">
            Xizmat haqida
          </label>
        </div>
        <textarea
          type="text"
          className="w-full rounded"
          placeholder="Xizmat haqida"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="bg-[#155e75] text-white rounded px-4 py-2 mt-5"
        onClick={handleCreateService}
      >
        +
      </button>
    </Modal>
  );
};

export default ServiceModal;
