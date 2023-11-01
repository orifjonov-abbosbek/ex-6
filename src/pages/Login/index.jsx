import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import postAPI from "../../server/post/index.js";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleCheckboxChange = () => {
    setPassword(!password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const raw = JSON.stringify(formData);

      const config = {
        method: "post",
        url: "https://api.webhub.uz/api/v1/admin/login",
        data: raw,
      };

      const response = await postAPI.login(formData);

      if (response.status === 200) {
        const data = response.data;
        console.log("Login response data:", data);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("fullName", data?.admin?.fullName);
        navigate('/dashboard/main')
      } else {
        console.error("Login request failed with status:", response.status);
        console.error("Response data:", response.data);
      }
    } catch (error) {
      console.error("Error during login request:", error);
    }
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-full max-w-[800px]  mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="wrapper  ">
          <div className="w-full bg-blue-950 h-[10px]"></div>
          <div className=" p-[30px]">
            <h1 className=" text-center text-[50px] font-black leading-[20px]">
              Login
            </h1>
          </div>

          <form
            action=""
            className="px-[50px] mb-[20px]  border-b-2 border-t-2 border-gray-300 py-[50px]"
            onSubmit={handleSubmit}
          >
            <label htmlFor="username">
              <p className=" mb-[10px] text-[20px] font-semibold text-gray-500">
                Foydalanuvchi nomi
              </p>
              <input
                className="w-full rounded-lg border-gray-800 py-3 px-5 mb-[30px]"
                type="text"
                name="username"
                value={formData.username}
                placeholder="Foydalanuvchi nomi..."
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="password">
              <p className=" mb-[10px] text-[20px] font-semibold text-gray-500">
                Parol
              </p>
              <input
                className="w-full rounded-lg border-gray-800 py-3 px-5 mb-[20px]"
                type={password ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Parol..."
                onChange={handleInputChange}
              />
            </label>
            <label
              htmlFor="forCheck"
              className="flex items-center gap-x-5 pb-3 border-b-2"
            >
              <input
                type="checkbox"
                id="forCheck"
                className="rounded-md"
                onChange={handleCheckboxChange}
              />
              <p className="font-normal text-[18px] text-gray-600">
                Parolni kurish
              </p>
            </label>
            <button
              type="submit"
              className="mt-[30px] bg-blue-600 px-3 py-2 text-[20px] font-medium text-white rounded-lg"
            >
              Kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
