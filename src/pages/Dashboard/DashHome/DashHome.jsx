import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { PiStudentFill } from "react-icons/pi";
import { FaCheckDouble, FaCheck, FaBook } from "react-icons/fa";

import { AiOutlineStop } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsCarFrontFill } from "react-icons/bs";

import postAPI from "../../../server/post/index.js";

const DashHome = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  const [services, setServices] = useState([]);

  const FetchServices = async () => {
    try {
      const response = await postAPI.getServices();
      setServices(response.data.services);
      console.log(services);
    } catch (err) {
      console.error("error while fetching services", err);
    }
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
    FetchServices();
    fetchCourses();
  }, []);

  useEffect(() => {
    postAPI
      .getStudents()
      .then((response) => {
        if (response.status === 200) {
          setStudents(response.data.students);
          setLoading(false);
        } else {
          console.error("Error fetching students data.");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error during student data request:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(courses);
  return (
    <>
      <div className="main_wrapper">
        <ul>
          <li>
            <h3>O'quvchilar</h3>

            <div className="flex items-center justify-between">
              <p>{students.length}</p>

              <p>
                <PiStudentFill />
              </p>
            </div>
          </li>

          <li>
            <h3>Yangi O'quvchilar</h3>
            <div className="flex items-center justify-between">
              <p>
                {courses.reduce(
                  (total, item) => total + item.students.length,
                  0
                )}
              </p>
              <p>
                <FaCheck />
              </p>
            </div>
          </li>

          <li>
            <h3>O'qiydiganlar</h3>

            <div className="flex items-center justify-between">
              <p>{students.length}</p>

              <p>
                <FaCheckDouble />
              </p>
            </div>
          </li>
          <li>
            <h3>O'qimaydiganlar</h3>

            <div className="flex items-center justify-between">
              <p>0</p>

              <p>
                <AiOutlineStop />
              </p>
            </div>
          </li>
          <li>
            <h3>Buyurtmachilar</h3>

            <div className="flex items-center justify-between">
              <p>1</p>

              <p>
                <RiUserSettingsLine />
              </p>
            </div>
          </li>
          <li>
            <h3>Xizmatlar</h3>

            <div className="flex items-center justify-between">
              <p>{services.length}</p>

              <p>
                <BsCarFrontFill />
              </p>
            </div>
          </li>

          <li>
            <h3>Kurslar</h3>

            <div className="flex items-center justify-between">
              <p>{courses.length}</p>

              <p>
                <FaBook />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashHome;
