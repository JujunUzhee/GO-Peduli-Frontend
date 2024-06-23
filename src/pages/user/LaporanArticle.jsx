import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/FooterComponent';
import ButtonChatus from '../../components/element/button/buttonChat';
import ScrollToTop from '../../components/scrollTop';
import { FaUser, FaCalendar } from 'react-icons/fa';

const LaporanArticle = () => {
  const [laporanData, setLaporanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/program`); 
        const data = await response.json();
        setLaporanData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { id } = useParams();
  const article = laporanData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Laporan Tidak Ditemukan</div>;
  }
  const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    const formattedDate = date.toLocaleDateString('id-ID', { timeZone: 'UTC' });
    return formattedDate
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container mx-auto px-7">
        <div className="text-center">
          <h1 className="mt-24 font-bold text-3xl">{article.title}</h1>
          <div className="flex justify-center items-center gap-16 mt-2">
            <div className="flex items-center gap-2">
              <FaUser />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar />
              <span>{formatTanggal(article.date)}</span>
            </div>
          </div>
          <div className="flex justify-center pb-5 gap-4 m-6"></div>
        </div>
        <div className="flex justify-center">
          <img src={article.img} alt="Article" className="object-cover w-full h-[500px]" />
        </div>
        <div className="mb-24 mx-8 mt-8">
          {article.content.map((paragraph, index) => (
            <div key={index}>
              <p className="mb-4 text-justify indent-12">{paragraph}</p>
            </div>
          ))}
        </div>
        <div className="mb-24 mx-8">
          <h2 className="font-bold text-3xl mt-8 mb-8">Dokumentasi</h2>
          <div className="flex flex-wrap">
            {article.dokumentasi.map((image, index) => (
              <div key={index} className="w-full sm:w-1/3 mb-6 p-0">
                <img src={image} alt={`Dokumentasi ${index + 1}`} className="object-cover w-full h-[400px] px-2 rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ButtonChatus />
      <Footer />
    </>
  );
};

export default LaporanArticle;
