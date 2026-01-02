import axios from "axios";

/* ===========================
   AXIOS INSTANCE ✅
=========================== */
const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

/* ===========================
   ATTACH TOKEN (OPTIONAL)
=========================== */
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ===========================
   CREATE EMPLOYEE ✅
=========================== */
export const createEmployee = async (employeeData) => {
  const res = await API.post("/auth/employee-create", employeeData);
  return res.data;
};

/* ===========================
   GET ALL USERS ✅
=========================== */
export const getAllUsers = async () => {
  const res = await API.get("/users/allUsers");
  return res.data.data; // 👈 array of users
};
