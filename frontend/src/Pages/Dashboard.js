
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const user = useSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState(true);

    console.log('user', user)

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <div className={`bg-gray-800 w-64 min-h-screen p-5 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <button className="md:hidden" onClick={() => setIsOpen(false)}>
                        <FaTimes size={20} />
                    </button>
                </div>
                <nav className="space-y-4">
                    <NavLink to="/dashboard" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                        <FaHome />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/add-project" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                        <FaUser />
                        <span>Add Project</span>
                    </NavLink>
                    <NavLink to="/projects" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                        <FaCog />
                        <span>Projects</span>
                    </NavLink>
                    <NavLink href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-red-600">
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </NavLink>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <button className="md:hidden mb-4" onClick={() => setIsOpen(true)}>
                    <FaBars size={24} />
                </button>
                <h1 className="text-3xl font-semibold">Welcome, {user?.user?.firstname} {user?.user?.lastname}!</h1>
                <p className="mt-2 text-gray-400">This is your dashboard.</p>
            </div>
        </div>
    );
};

export default Dashboard;
