import { Breadcrumb,Dropdown } from "flowbite-react";
import { FcMenu } from "react-icons/fc";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiCog, HiLogout } from "react-icons/hi";
import Header from '../../../components/Header/Header'

const Settings = () => {
  return (
    <>
    <Header />
    

      <div className="  mt-[50px] bg-gray-300 mx-auto  shadow-3xl rounded-xl overflow-hidden">
        <div className="wrapper  ">
          <div className="bg-white mb-[20px] px-[50px] rounded-lg mt-[20px]">
            <h2 className="text-blue-900 font-semibold text-[22px]">
              Sozlamalar
            </h2>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/dashboard/main">
                <p>Bosh sahifa</p>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Sozlamalar</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <form
            action=""
            className="px-[50px] rounded-xl  bg-white border-b-2 border-gray-300 py-[50px]"
          >
            <label htmlFor="">
              <p className=" mb-[10px] text-[20px] font-semibold text-blue-900">
                F.I.SH
              </p>
              <input
                className="w-full rounded-lg bg-gray-300 py-3 px-5 mb-[30px] border-transparent"
                type="text"
                placeholder="Boburjon Yoldoshev"
              />
            </label>
            <label htmlFor="">
              <p className=" mb-[10px] text-[20px] font-semibold text-blue-900">
                Foydalanuvchi nomi
              </p>
              <input
                className="w-full rounded-lg bg-gray-300 text-gary-600 text-[20px] py-3 px-5 mb-[20px] border-transparent"
                type="text"
                placeholder="admin"
              />
            </label>
            <label htmlFor="">
              <p className=" mb-[10px] text-[20px] font-semibold text-blue-900">
                Foydalanuvchi paroli
              </p>
              <input
                className="w-full rounded-lg  bg-gray-300  text-gray-600  text-[20px] py-3 px-5 mb-[20px] border-transparent"
                type="password"
                placeholder="***********"
              />
            </label>
            <label htmlFor="" className="flex items-center gap-x-5">
              <input type="checkbox" className=" rounded-md" />
              <p className="font-normal text-[18px] text-gray-600">
                Parolni kurish
              </p>
            </label>
          </form>
          <div className="bg-white w-full mb-[20px] py-[20px]">
            <button className=" ml-[50px] bg-blue-600 px-3 py-2 text-[20px] font-medium text-white rounded-lg hover:bg-lime-600">
              Tahrirlash
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
