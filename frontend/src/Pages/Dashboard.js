
import React from "react";
import { useSelector } from "react-redux";

import AsideBar from "../Components/AsideBar";

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <AsideBar />
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-semibold">Welcome, {user?.firstname} {user?.lastname}!</h1>
                <p className="mt-2 text-gray-400">This is your dashboard.</p>
            </div>
        </div>
    );
};

export default Dashboard;
