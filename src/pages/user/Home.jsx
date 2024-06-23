import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CaraouseComponent from "../../components/CaraouselComponent";
import DonasiComponent from "../../components/DonasiComponent";
import Location from "../../components/Location";
import Cards from "../../components/Cards/Cards";
import Selengkapnya from "../../components/element/link/selengkapnya";
import Footer from "../../components/FooterComponent";
import ButtonChatus from "../../components/element/button/buttonChat";
import CardBerita from "../../components/Cards/CardBerita";
import CardProgram from "../../components/Cards/CardProgram";

const Home = () => {
  const [allDonasi, setAllDonasi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/home`);
        const data = await response.json();
        console.log("Fetched data:", data);
        setAllDonasi(data.donations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [])
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative h-[700px]">
        <CaraouseComponent />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 z-10 mt-12 sm:mt-16 md:mt-48 lg:mt-52">
          <div className="flex gap-4 overflow-x-auto md:justify-center cursor-pointer">
            <Cards title="Program Donasi" description="32" />
            <Cards title="Donatur Kami" description="150" />
            <Cards title="Mitra Kami" description="10" />
          </div>
        </div>
      </div>

      
      <div className=" w-full px-4 sm:px-6 lg:px-8 md:mt-24">
        <div className="flex justify-center items-center">
          <h2 className="my-4 text-2xl md:text-3xl text-DarkGreen font-bold hover:text-Green hover:cursor-pointer">
            Publikasi Program Kami
          </h2>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <CardProgram limit={3} />
          </div>
        </div>
        <div className="mt-10 flex justify-end pr-4 sm:pr-6 lg:pr-8">
         <Selengkapnya to="/berita"/>
        </div>
      </div>
      <div className=" mt-32 w-full ">
        <DonasiComponent data={allDonasi.slice(0, 3)} />
        <div className="mt-10 flex justify-end mr-20">
          <Selengkapnya to="/donasiku" />
        </div>
      </div>
      <Location />
      <div className="flex justify-center items-center">
        <h2 className="my-4 text-2xl md:text-3xl text-DarkGreen font-bold">
          Berita Terbaru Kami
        </h2>
      </div>
      <div className="flex justify-center pb-20 gap-4 m-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CardBerita limit={4}/>
        </div>
      </div>
      <ButtonChatus />
      <Footer />
    </div>
  );
};

export default Home;
