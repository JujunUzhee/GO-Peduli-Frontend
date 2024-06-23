import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "font-bold" : "";
  };

  return (
    <nav className="bg-Green p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/image/logo.png" alt="Go Peduli" className="h-10 mr-2" />
            <Link to="#" className="text-gray-800 font-bold text-sm mt-3">
              Go Peduli
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-grow md:items-center md:w-auto`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-sm mx-auto gap-6">
              <li>
                <Link to="/" className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive("/")}`}>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/donasiku" className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive("/donasiku")}`}>
                  Donasiku
                </Link>
              </li>
              <li>
                <Link to="/tentang" className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive("/tentang")}`}>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/berita" className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive("/berita")}`}>
                  Berita
                </Link>
              </li>
              <li>
                <Link to="/faq" className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive("/faq")}`}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
