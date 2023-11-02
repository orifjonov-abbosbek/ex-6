import React, { useState, useEffect } from "react";
import postAPI from "../../../server/post/index.js";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Table } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import AddCourseModal from "../../../components/CourseModal/CourseModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./style.scss";

const Kurslar = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState(null);

  const handleCreateCourse = (newCourse) => {
    console.log("Creating a new course:", newCourse);
    sendCourseDataToAPI(newCourse);
    setOpenModal(false);
  };

  const sendCourseDataToAPI = (newCourse) => {
    console.log("Sending data to API:", newCourse);
    postAPI
      .createCourse(newCourse)
      .then((response) => {
        if (response.status === 201) {
          console.log("Course created successfully");
          toast.success("Course created successfully");
        } else {
          console.error("Error creating a course:", response.data);
          toast.error("Error creating a course"); 
        }
      })
      .catch((error) => {
        console.error("Error creating a course:", error);
      });
  };

  const fetchCourses = async () => {
    try {
      const response = await postAPI.getCourse();
      if (Array.isArray(response.data.courses)) {
        setCourses(response.data.courses);
      } else {
        console.error("Courses data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="wrapper">
      <div className="kurs_head">
        <div className="">
          <h2 className="font-semibold text-2xl mb-3">Kurslar</h2>

          <Breadcrumb
            aria-label="Default breadcrumb example"
            className="text-blue-500"
          >
            <Breadcrumb.Item href="/dashboard/main">
              <p>Bosh sahifa</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Kurslar</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="">
          <div className="serviceAdd_btn">
            <button onClick={() => setOpenModal(true)}>+</button>
          </div>
        </div>
      </div>
      <div className="table_box">
        <Table className="table">
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Kurs Id</Table.HeadCell>
            <Table.HeadCell>Kurs nomi</Table.HeadCell>
            <Table.HeadCell>O'quvchilar soni</Table.HeadCell>
            <Table.HeadCell>Yaratilgan vaqti</Table.HeadCell>
            <Table.HeadCell>Taxrirlash</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {courses.map((course, index) => (
              <Table.Row className=" tr  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="td">{course.id}</Table.Cell>
                <Table.Cell className="td">{course.title}</Table.Cell>
                <Table.Cell className="td">{course.students.length}</Table.Cell>
                <Table.Cell className="td">
                  {course.createdAt.slice(0, 10)}
                </Table.Cell>
                <Table.Cell className="td">
                  <button
                    onClick={() => {
                      props.setOpenModal("form-elements");
                      setIsAddingCourse(false);
                    }}
                    className="edit_btn"
                  >
                    <FaEdit />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <AddCourseModal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        onCreateCourse={handleCreateCourse}
      />
    </div>
  );
};

export default Kurslar;
