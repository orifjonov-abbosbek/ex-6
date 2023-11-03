import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import postAPI from "../../server/post/index.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const LayoutModal = ({ isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [services, setServices] = useState([]);
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    serviceId: "",
  });

  const [formDataKurslar, setFormDataKurslar] = useState({
    fullName: "",
    phoneNumber: "",
    courseId: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const FetchServices = async () => {
    try {
      const response = await postAPI.getServices();
      setServices(response.data.services);
    } catch (err) {
      console.error("Error while fetching services", err);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await postAPI.getCourse();
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
    }
  };

  const handleInputChange = (e) => {
    if (activeTab === "tab1") {
      setFormDataXizmat({
        ...formDataXizmat,
        [e.target.name]: e.target.value,
      });
    } else if (activeTab === "tab2") {
      setFormDataKurslar({
        ...formDataKurslar,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      FetchServices();
      fetchCourses();
    }
  }, [isOpen]);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "tab1") {
        await postAPI.createXizmat(formData);
        toast.success("Xizmat added successfully!");
      } else if (activeTab === "tab2") {
        await postAPI.createKurs(formData);
        toast.success("Kurs added successfully!");
      }
      onRequestClose();
    } catch (error) {
      console.error("Failed to add Xizmat/Kurs", error);
      toast.error("Error while adding your request");
    }
  };

  console.log(formDataKurslar);

  const handleCourseFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await postAPI.applyForCourse(formDataKurslar);
      toast.success("Applied for the course successfully!");
      onRequestClose();
    } catch (error) {
      console.error("Failed to apply for the course", error);
      toast.error("Error while applying for the course");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Service Modal"
      style={customModalStyles}
    >
      <div className="tab-menu flex gap-2">
        <button
          onClick={() => handleTabClick("tab1")}
          className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
        >
          Xizmatlar
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
        >
          Kurslar
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "tab1" && (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark-text-white">
                <label>Ism sharifingiz</label>
              </div>
              <input
                className="w-full border border-gray-400 rounded bg-white"
                type="text"
                placeholder="F.I.SH"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark-text-white">
                <label>Telfon raqamingiz</label>
              </div>
              <input
                className="w-full border border-gray-400 rounded bg-white"
                type="text"
                placeholder="909999999"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark-text-white">
                <label>Xizmat tanlang</label>
              </div>
              <select
                className="w-full border border-gray-400 text-gray-800 rounded bg-white"
                name="serviceId"
                value={formData.serviceId}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#155e75] text-white rounded px-4 py-2 mt-5"
            >
              Submit
            </button>
          </form>
        )}

        {activeTab === "tab2" && (
          <form onSubmit={handleCourseFormSubmit}>
            <div className="mb-4">
              <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark-text-white">
                <label>Ism sharifingiz</label>
              </div>
              <input
                className="w-full border border-gray-400 rounded bg-white"
                type="text"
                placeholder="F.I.SH"
                name="fullName"
                value={formDataKurslar.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark-text-white">
                <label>Telfon raqamingiz</label>
              </div>
              <input
                className="w-full border border-gray-400 rounded bg-white"
                type="text"
                placeholder="909999999"
                name="phoneNumber"
                value={formDataKurslar.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <div className="text-xl mb-3 text-blue-900 text-[20px] font-semibold dark-text-white">
                <label>Kurs tanlang</label>
              </div>
              <select
                className="w-full border border-gray-400 text-gray-800 rounded bg-white"
                name="courseId"
                value={formDataKurslar.courseId}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#155e75] text-white rounded px-4 py-2 mt-5"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default LayoutModal;
