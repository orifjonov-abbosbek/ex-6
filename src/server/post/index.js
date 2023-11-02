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

  getServices: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Access token not found in localStorage.");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return api.get("/services", { headers });
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

  createService: async (formData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Access token not found in localStorage.");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data", // Make sure to set the correct content type for your service creation endpoint
    };

    return api.post("/service", formData, { headers });
  },
};

export default postAPI;
