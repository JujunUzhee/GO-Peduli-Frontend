import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { FaFacebookF, FaGoogle, FaTiktok, FaUser } from "react-icons/fa";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import swal from "sweetalert";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error.message);
      swal("Login Failed", "Invalid username or password", "error");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('../image/login_image.png')] bg-cover bg-center">
      <div className="flex bg-loginLight bg-opacity-95  rounded-xl shadow-md w-full max-w-4xl overflow-hidden">
        <div className="w-1/2 bg-cover bg-center bg-[url('../image/caraousel1.png')]">
          <div className="p-8 ">
            <img src="../image/logo.png" alt="Logo" className="w-16 h-16 mb-4" />
            <h2 className="text-4xl text-center font-bold mb-2 text-DarkGreen mt-8 text-stroke-white">
              Donasi Pakaian <br /> Lebih Mudah <br /> Dengan Go Peduli
            </h2>
          </div>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-GreenLogin">Welcome!</h2>
          <p className="text-sm mb-6 font-semibold text-GreenLogin text-center">Sign In to continue</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <div className="relative z-0 w-full mb-5 group">
                <FaUser className="absolute left-0 top-4 text-gray-700 text-xl" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block py-2.5 px-0 w-[350px] text-md text-GreenLogin  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-green-600 peer ml-7"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Username"
                  className="peer-focus:font-medium absolute text-md text-GreenLogin font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-8 mt-1"
                >
                  Username
                </label>
              </div>
            </div>
            <div className="mb-2 mt-8">
              <div className="relative z-0 w-full group">
                <MdLock className="absolute left-0 top-4 text-gray-700 text-xl" />
                <input
                  type={showPassword ? "text" : "password"} // Tampilkan sebagai teks jika showPassword true
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block py-2.5 px-0 w-[350px] text-md text-GreenLogin  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer ml-7"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-md text-GreenLogin font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-8 mt-1"
                >
                  Password
                </label>
                {/* Tombol toggle untuk melihat/sembunyikan password */}
                <button
                  type="button"
                  className="absolute right-0 top-4 mr-4 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
            </div>
            <div className="ml-72 mb-6">
              <a
                href="#"
                className="text-xs font-semibold text-DarkGreen hover:text-green-600"
              >
                Forget Password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[150px] bg-Green  text-white py-2  rounded-md hover:bg-green-600 transition duration-200 font-bold text-base "
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-GreenLogin font-semibold">
              Don`t have an account?
              <Link
                to="/admin/sign-up"
                className="text-GreenLogin hover:underline font-bold ml-2"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-sm  font-bold text-GreenLogin mt-8 mb-4">Login With Social Media</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <FaFacebookF className="text-blue-600" />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <FaGoogle className="text-red-600" />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <FaTiktok className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
