import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    admin_username: "",
    admin_password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/register",
        registerData
      );
      setMessage(res.data.message);
      setRegisterData({ admin_username: "", admin_password: "" });
    } catch (error) {
      setMessage(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-indigo-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md flex flex-col gap-4 w-96"
      >
        <h1 className="text-2xl font-bold text-center">Register Admin</h1>

        <input
          type="text"
          name="admin_username"
          placeholder="Admin Username"
          value={registerData.admin_username}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="admin_password"
          placeholder="Admin Password"
          value={registerData.admin_password}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-indigo-500 text-white p-2 rounded">
          Register
        </button>

        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}
