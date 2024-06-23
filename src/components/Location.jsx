import React from "react";
import Cards from "./Cards/Cards";

const Location = () => {
  const cardStyles = [
    "bg-white text-black  ml-5 ",
  
  ];
  return (
    <div className="w-full mt-32 flex flex-col justify-center items-center overflow-x-hidden">
    <h2 className="my-4  text-2xl md:text-3xl text-DarkGreen font-bold">Lokasi Kami</h2>
    <div className="flex flex-col lg:flex-row gap-6 mb-40 mt-10">
      <img src="image/Map.png" alt="" className="mr-12 h-[350px] w-[600px] md:w-[800px] max-w-full" />
      <div className="flex flex-col gap-4 w-full max-w-full items-center">
        <Cards title="Provinsi" description="2" cardClassName={cardStyles} />
        <Cards title="Kabupaten" description="33" cardClassName={cardStyles} />
        <Cards title="Desa" description="140" cardClassName={cardStyles} />
      </div>
    </div>
  </div>
  
  
  );
};

export default Location;
