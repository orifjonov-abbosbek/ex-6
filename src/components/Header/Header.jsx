import React from "react";
import { useLocation } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BiSolidUserCircle } from "react-icons/bi";
import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const Name = localStorage.getItem("fullName");

  const isSettingsPage = location.pathname === "/settings";

  const handleSignOut = () => {
    const token = "token";
    localStorage.removeItem(token);

    navigate("/login");
  };

  return (
    <>
      <header className="flex items-center justify-between h-[80px] px-[50px] head">
        <a href="#">Logo</a>
        <div className="flex items-center gap-[10px]">
          <button onClick={onToggleSidebar}>
            <FcMenu className="text-[25px]" />
          </button>

          <BiSolidUserCircle className="text-[30px]" />
          <p className="text-blue-600"></p>
          <Dropdown label={Name} dismissOnClick={false}>
            {isSettingsPage ? (
              <Link to="/dashboard">
                <Dropdown.Item icon={HiCog}>Dashboard</Dropdown.Item>
              </Link>
            ) : (
              <Link to="/settings">
                <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
              </Link>
            )}
            <Dropdown.Item icon={HiLogout}>
              <button onClick={handleSignOut}>Sign out</button>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </header>
    </>
  );
};

export default Header;
