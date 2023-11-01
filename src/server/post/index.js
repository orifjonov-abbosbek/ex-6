import api from "../axios";

const postAPI = {
  getCourse: async () => api.get("/course"),
  getStudents: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Access token not found in localStorage.");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return api.get("/student", { headers });
  },
  login: async (data) => api.post("/admin/login", data),

  getServices: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Access token not found in localStorage.");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return api.get("/service", { headers });
  },

  createCourse: async (formData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Access token not found in localStorage.");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };

    return api.post("/course", formData, { headers });
  },
};

export default postAPI;
