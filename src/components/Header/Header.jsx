import React from "react";
import { useLocation } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BiSolidUserCircle } from "react-icons/bi";
import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const Name = localStorage.getItem("fullName");

  // Determine if the user is on the Settings page
  const isSettingsPage = location.pathname === "/settings";

  return (
    <>
      <header className="flex items-center justify-between h-[80px] px-[50px] head">
        <a href="#">Logo</a>
        <div className="flex items-center gap-[10px]">
          <FcMenu className="text-[25px]" />
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
            <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </header>
    </>
  );
};

export default Header;
