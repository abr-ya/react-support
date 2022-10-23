import axios from "axios";

const baseUrl = `${process.env.API_URL}`;

// Register user
const register = async (userData) => {
  // обработка ошибок сейчас в slice
  const { data, status } = await axios.post(`${baseUrl}/api/users`, userData);
  if (data) localStorage.setItem("user", JSON.stringify(data));

  return { data, status };
};

// Login user
const login = async (userData) => {
  // обработка ошибок сейчас в slice
  const { data, status } = await axios.post(`${baseUrl}/api/users/login`, userData);
  if (data) localStorage.setItem("user", JSON.stringify(data));

  return { data, status };
};

const authService = {
  register,
  login,
};

export default authService;
