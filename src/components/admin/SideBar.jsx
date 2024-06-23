import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { GiGloves } from "react-icons/gi";
import { FaCircleLeft, FaNewspaper } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import AuthService from '../../services/AuthService';

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/admin/login");
  };

  return (
    <aside className="bg-white">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center">
          <img src="../image/logo.png" alt="Logo" className="w-9 mt-4" />
          <h1 className="mt-6 ml-2 font-bold">Go Peduli</h1>
        </div>
        <div className="flex flex-col flex-grow p-4">
          <div className="flex items-center mb-6 w-24 h-20 mx-auto mt-6">
            <div>
              <img src="../image/admin.jpg" alt="Admin" className="rounded-2xl shadow-lg border border-slate-200" />
            </div>
          </div>
          <span className="mx-auto font-semibold mb-4">Admin</span>
          <nav className="flex flex-col space-y-1">
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <div className="h-5 w-5" />
              <MdDashboard />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/donasi"
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <div className="h-5 w-5" />
              <GiGloves />
              <span>Donasi</span>
            </Link>
            <Link
              to="/admin/berita"
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <div className="h-5 w-5" />
              <FaNewspaper />
              <span>Berita</span>
            </Link>
            <Link
              to="/admin/mitra"
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <div className="h-5 w-5" />
              <FaUserFriends />
              <span>Mitra</span>
            </Link>
            <Link
              to="/admin/chat"
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <div className="h-5 w-5" />
              <IoChatboxEllipsesSharp />
              <span>Pesan</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-center h-16">
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
      >
        <div className="h-5 w-5 mx-auto" />
        <FaCircleLeft />
        <span>Keluar</span>
      </button>
    </div>
      </div>
    </aside>
  );
};

export default SideBar;
