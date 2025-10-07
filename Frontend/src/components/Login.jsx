import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({
    admin_username: "",
    admin_password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        loginData,
        { withCredentials: true } // cookie saved automatically
      );
      login(true);
      navigate(res.data.navigate);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-screen w-full bg-black/20 flex flex-col items-center justify-center">
      <div className="w-fit rounded-lg shadow-lg hover:shadow-green-300">
        <h1 className="text-3xl font-bold mb-4">Login Page</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="text"
            name="admin_username"
            value={loginData.admin_username}
            placeholder="Admin Username"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="password"
            name="admin_password"
            value={loginData.admin_password}
            placeholder="Admin Password"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <button className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
