import React from "react";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaHandshakeAngle, FaUser } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdHandshake } from "react-icons/md";
const DashboardComponent = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-md text-Green font-bold mb-4">Dashboard</h1>
          <h1 className="text-xl text-center mt-12 font-bold mb-8">
            Bantuan Anda Sangat Diperlukan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-cover bg-center h-48 rounded-lg bg-[url('../image/image5.png')]">
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white font-semibold rounded-lg">
                Bantuan Sosial Untuk Panti Asuhan
              </div>
            </div>
            <div className="bg-cover bg-center h-48 rounded-lg bg-[url('../image/image8.png')]">
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white font-semibold rounded-lg">
                Bantuanmu sangat di butuhkan
              </div>
            </div>
            <div className="bg-cover bg-center h-48 rounded-lg bg-[url('../image/image9.png')]">
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white font-semibold rounded-lg">
                Bantuan Sosial Untuk Masyarakat Terkena Bencana Alam
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start mb-20 w-full">
            {/* <!-- Bagian Go Peduli --> */}
            <div className="w-80 font-bold text-slate-500">
              <h2 className="text-lg mb-2">Go Peduli</h2>
              <p>
                Go Peduli merupakan platform untuk mempermudah kegiatan donasi
                pakaian secara cepat, tepat, dan terpercaya.
              </p>
            </div>

            {/* <!-- Bagian Hubungi Kami dan Media Sosial --> */}
            <div className="flex flex-col w-72 text-slate-500 font-bold">
              <div className="flex items-center space-x-2">
                <div className=" text-lg">
                  <IoLogoWhatsapp className="mt-11" />
                  <MdEmail className="mt-2" />
                </div>
                <div>
                  <p className="font-bold mb-4">Hubungi Kami</p>
                  <p>+62812345678912</p>
                  <p className="mt-1">GoCharity@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-green-500">
                <i className="fas fa-users"></i>
              </div>
              <div className="">
                <p className="font-bold text-lg mb-5 text-slate-500">Media Sosial</p>
                <div className="flex space-x-2">
                  <i>
                    <FaFacebook />
                  </i>
                  <i>
                    <FaTiktok />
                  </i>
                  <i>
                    <FaInstagram />
                  </i>
                  <i>
                    <FaTwitter />
                  </i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-loginLight ring-Green ring-2 p-4 rounded-lg flex items-center justify-center space-x-4">
              <FaHandshakeAngle className="text-4xl text-Green" />
              <div className="text-left">
                <p className="text-gray-500 font-bold">Total Mitra</p>
                <p className="text-lg font-bold text-center">100</p>
              </div>
            </div>

            <div className="bg-loginLight ring-Green ring-2 p-4 rounded-lg flex items-center justify-center space-x-4">
              <MdHandshake className="text-4xl text-Green" />
              <div className="text-left">
                <p className="text-gray-500 font-bold">Total Donasi</p>
                <p className="text-lg font-bold">200</p>
              </div>
            </div>

            <div className="bg-loginLight ring-Green ring-2 p-4 rounded-lg flex items-center justify-center space-x-4">
              <FaUser className="text-4xl text-Green" />
              <div className="text-left">
                <p className="text-gray-500 font-bold">Total Donatur</p>
                <p className="text-lg font-bold">1000</p>
              </div>
            </div>
            <div className="bg-loginLight ring-Green ring-2 p-4 rounded-lg flex items-center justify-center space-x-4">
              <MdHandshake className="text-4xl text-Green" />
              <div className="text-left">
                <p className="text-gray-500 font-bold">Donasi Berjalan</p>
                <p className="text-lg font-bold">150</p>
              </div>
            </div>
            <div className="bg-loginLight ring-Green ring-2 p-4 rounded-lg flex items-center justify-center space-x-4">
              <MdHandshake className="text-4xl text-Green" />
              <div className="text-left">
                <p className="text-gray-500 font-bold">Donasi Selesai</p>
                <p className="text-lg font-bold">50</p>
              </div>
            </div>
            <div className="bg-loginLight ring-Green ring-2 p-4 rounded-lg flex items-center justify-center space-x-4">
              <FaHandshakeAngle className="text-4xl text-Green" />
              <div className="text-left">
                <p className="text-gray-500 font-bold">Pick Up</p>
                <p className="text-lg font-bold">50</p>
              </div>
            </div>
            <div className="bg-loginLight ring-Green ring-2 p-4 rounded-lg flex items-center justify-center space-x-4">
              <FaHandshakeAngle className="text-4xl text-Green" />
              <div className="text-left">
                <p className="text-gray-500 font-bold">Drof off</p>
                <p className="text-lg font-bold">150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
