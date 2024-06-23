import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/FooterComponent';
import ButtonChatus from '../../components/element/button/buttonChat';
import ScrollToTop from '../../components/scrollTop';
import { FaUser, FaCalendar } from 'react-icons/fa';

const FullArticle = () => {
  const { id } = useParams();
  const [beritaData, setBeritaData] = useState([])

  const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    const formattedDate = date.toLocaleDateString('id-ID', { timeZone: 'UTC' });
    return formattedDate
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/berita`)
        const data = await response.json()
        setBeritaData(data)
      }
      catch(e){
        console.error("Error fetching data:", e);
      }
    }

    fetchData()
  }, [])

  const article = beritaData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
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
          <img src={article.img} alt="Article" className="w-full" />
        </div>
        <div className="mb-24 p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-Green ">
        Deskripsi Berita
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed text-justify">
        {article.descripsi}
    </p>
</div>


        
        </div>

      <ButtonChatus />
      <Footer />
    </>
  );
};

export default FullArticle;
