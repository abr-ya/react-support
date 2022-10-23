import axios from "axios";

const baseUrl = `${process.env.API_URL}`;

// Register user
const register = async (userData) => {
  // обработка ошибок сейчас в slice
  const { data, status } = await axios.post(`${baseUrl}/api/users`, userData);
  if (data) localStorage.setItem("user", JSON.stringify(data));

  return { data, status };
};

// Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
};

export default authService;
