import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BiSolidUserCircle } from "react-icons/bi";
import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout } from "react-icons/hi";
import Header from "../../components/Header/Header";
import "boxicons";
import "./style.scss";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className={`ssss ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="dashboard_wrapper">
        <div
          className={`sidebar ${
            isSidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <ul>
            <li>
              <Link
                to="/dashboard/main"
                className={`nav__link ${
                  activeItem === "dashboard" ? "active" : ""
                }`}
                onClick={() => handleSidebarItemClick("dashboard")}
              >
                <i className="bx bxs-home text-[24px] text-[#fdfdfd]"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/students"
                className={`nav__link ${
                  activeItem === "oquvchilar" ? "active" : ""
                }`}
                onClick={() => handleSidebarItemClick("oquvchilar")}
              >
                <i className="bx bx-child text-[24px] text-[#1b2336]"></i>
                <p>O'quvchilar</p>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/kurslar"
                className={`nav__link ${
                  activeItem === "kurslar" ? "active" : ""
                }`}
                onClick={() => handleSidebarItemClick("kurslar")}
              >
                <i className="bx bxs-book-alt text-[24px] text-[#1b2336]"></i>
                <p>Kurslar</p>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/customers"
                className={`nav__link ${
                  activeItem === "buyurtmachilar" ? "active" : ""
                }`}
                onClick={() => handleSidebarItemClick("buyurtmachilar")}
              >
                <i className="bx bxs-user-voice text-[24px] text-[#1b2336]"></i>
                <p>Buyurtmachilar</p>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/services"
                className={`nav__link ${
                  activeItem === "xizmatlar" ? "active" : ""
                }`}
                onClick={() => handleSidebarItemClick("xizmatlar")}
              >
                <i className="bx bxs-taxi text-[24px] text-[#1b2336]"></i>
                <p>Xizmatlar</p>
              </Link>
            </li>
          </ul>
        </div>

        <main
          className={`bg-transparent dashboard-content ${
            isSidebarOpen ? "" : "sidebar-closed"
          }`}
        >
          <div className="outlet ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
