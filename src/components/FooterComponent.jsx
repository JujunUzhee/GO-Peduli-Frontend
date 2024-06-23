import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-FooterGreen text-white p-10">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-between mb-5 ">
          <div className="mb-10 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Berlangganan Sekarang</h2>
            <p className="mb-4 text-base">Terima Berita Terbaru Kami</p>
            <div className="flex justify-start">
              <input
                type="email"
                placeholder="Email address"
                className="input input-bordered w-80 p-2 mr-2 rounded-lg"
              />
              <button className="btn bg-Green text-white p-2 rounded-lg w-24 hover:text-gray-950 text-base">Kirim</button>
            </div>
          </div>
          <div className="text-center md:text-right mt-10 md:mt-12 right-0">
            <p className="text-2xl font-bold mb-4">Media Sosial</p>
            <div className="flex justify-center md:justify-end space-x-4 text-xl">
              <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
              <a href="#" className="hover:text-gray-300"><FaTiktok /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className=" border-t border-white pt-5 grid grid-cols-1 md:grid-cols-4 gap-10 ">
          <div className="flex flex-col items-center md:items-start w-80">
          <div className="flex items-center mb-4">
              <img src="../image/logo.png" alt="Go Peduli Logo" className="w-14 mr-2"/>
              <h3 className="text-xl font-bold mt-2">Go Peduli</h3>
            </div>
            <p className="text-center md:text-left ">
              Go Peduli merupakan platform untuk mempermudah kegiatan donasi pakaian secara cepat, tepat, dan terpercaya
            </p>
          </div>
          <div className="text-center md:text-left ml-24">
            <h4 className="text-lg font-bold mb-2">Hubungi Kami</h4>
            <p className="mb-2">
              <i className="fa fa-whatsapp mr-2"></i>+62812345678912
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i>GoPeduli@gmail.com
            </p>
          </div>
          <div className="text-center md:text-left ml-24">
            <h4 className="text-lg font-bold mb-2">Menu</h4>
            <ul>
              <li><a href="/" className="hover:underline">Beranda</a></li>
              <li><a href="/donasiku" className="hover:underline">Donasiku</a></li>
              <li><a href="/tentang" className="hover:underline">Tentang Kami</a></li>
              <li><a href="/berita" className="hover:underline">Berita</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left ml-24">
            <h4 className="text-lg font-bold mb-2">Informasi Lain</h4>
            <p><Link  to="/formulir-mitra" className="hover:underline">Gabung Menjadi Mitra Kami</Link></p>
          </div>
        </div>
        <div className="w-full mt-10">
          <p className='text-center'>Copyright © 2024-2029 Go Peduli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
