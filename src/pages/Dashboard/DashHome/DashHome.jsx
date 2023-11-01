import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { PiStudentFill } from "react-icons/pi";
import { FaCheckDouble, FaCheck, FaBook } from "react-icons/fa";

import { AiOutlineStop } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsCarFrontFill } from "react-icons/bs";

const DashHome = () => {
  return (
    <>
      <div className="main_wrapper">
        <ul>
          <li>
            <h3>O'quvchilar</h3>

            <div className="flex items-center justify-between">
              <p>1</p>

              <p>
                <PiStudentFill />
              </p>
            </div>
          </li>
          <li>
            <h3>Yangi O'quvchilar</h3>

            <div className="flex items-center justify-between">
              <p>1</p>

              <p>
                <FaCheck />
              </p>
            </div>
          </li>

          <li>
            <h3>O'qiydiganlar</h3>

            <div className="flex items-center justify-between">
              <p>1</p>

              <p>
                <FaCheckDouble />
              </p>
            </div>
          </li>
          <li>
            <h3>O'qimaydiganlar</h3>

            <div className="flex items-center justify-between">
              <p>1</p>

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
              <p>1</p>

              <p>
                <BsCarFrontFill />
              </p>
            </div>
          </li>

          <li>
            <h3>Xizmatlar</h3>

            <div className="flex items-center justify-between">
              <p>1</p>

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
