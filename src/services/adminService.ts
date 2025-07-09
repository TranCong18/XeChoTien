import axios from "./axiosInstance";

export const registerAdmin = async (email: string, password: string) => {
  const res = await axios.post("/api/auth/register", { email, password });
  return res.data;
};

export const loginAdmin = async (email: string, password: string) => {
  const res = await axios.post("/api/auth/login", { email, password });
  return res.data;
};
