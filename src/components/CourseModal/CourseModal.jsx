import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const AddCourseModal = ({ isOpen, onRequestClose, onCreateCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState(null);

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

  const handleCreateCourse = () => {
    const newCourse = {
      title: courseName,
      description: courseDescription,
      image: courseImage,
    };

    console.log("New Course Data:", newCourse);

    onCreateCourse(newCourse);

    setCourseName("");
    setCourseDescription("");
    setCourseImage(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Course Modal"
      style={customModalStyles}
    >
      <div className="mb-[20px] pb-2 flex items-center justify-between border-b">
        <h3 className="text-xl text-blue-900 text-[20px] font-semibold dark:text-white">
          Kurs qoshish
        </h3>

        <AiOutlineClose onClick={onRequestClose} />
      </div>

      <div>
        <div className="mb-4">
          <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark:text-white">
            <label>Kurs rasmi</label>
          </div>
          <input
            className="w-full border border-gray-400 rounded bg-white"
            type="file"
            onChange={(e) => setCourseImage(e.target.files[0])}
          />
        </div>
        <div className="mb-5">
          <label className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark:text-white">
            Kurs nomi
          </label>
        </div>
        <input
          type="text"
          value={courseName}
          className="w-full rounded mb-5"
          placeholder="Kurs nomi"
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>
      <div>
        <div className="">
          <label className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark:text-white">
            Kurs haqida
          </label>
        </div>
        <textarea
          type="text"
          className="w-full rounded"
          value={courseDescription}
          placeholder="Kurs haqida"
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-700 text-white rounded px-4 py-2 mt-5"
        onClick={handleCreateCourse}
      >
      +
      </button>
    </Modal>
  );
};

export default AddCourseModal;
