import React, { useState, useEffect } from "react";
import postAPI from "../../../server/post/index.js";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Table } from "flowbite-react";
import AddCourseModal from "../../../components/CourseModal/CourseModal";

import "./style.scss";

const Kurslar = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddingCourse, setIsAddingCourse] = useState(false);

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
    postAPI.createCourse(newCourse)
      .then(response => {
        if (response.status === 201) {
          console.log("Course created successfully");
        } else {
          console.error("Error creating a course:", response.data);
        }
      })
      .catch(error => {
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
        <h2>Kurslar</h2>
        <div className="">
          <AiFillPlusSquare
            onClick={() => setOpenModal(true)}
            className="plus"
          />
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
