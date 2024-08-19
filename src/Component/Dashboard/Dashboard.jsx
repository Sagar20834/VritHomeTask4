import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Dashboard</h2>
        <p className="mb-6 text-lg text-gray-600">Welcome to your dashboard!</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
