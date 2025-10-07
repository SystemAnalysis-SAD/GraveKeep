import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth();
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/logout",
        {},
        { withCredentials: true }
      );
      logout(); // remove user from context
      navigate(res.data.navigate);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard", {
          withCredentials: true,
        });
        setUsername(res.data.admin_username);

        const usersRes = await axios.get("http://localhost:5000/users", {
          withCredentials: true,
        });
        setUsers(usersRes.data.users || []);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);

        if (err.response?.status === 401) {
          logout();
          navigate("/login");
        }
      }
    };

    fetchData();
  }, [logout, navigate]);

  return (
    <div className="h-screen w-full bg-indigo-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {username ? (
        <p className="mt-4 text-xl">Welcome, {username}!</p>
      ) : (
        <p>Loading user info...</p>
      )}

      <div className="mt-6 flex flex-col gap-2">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="flex gap-5 border-b py-1">
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.age}</p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
