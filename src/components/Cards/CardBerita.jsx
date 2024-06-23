import React, { useEffect, useState } from "react";

import ButtonRead from "../element/button/buttonRead";

const CardBerita = ({ data, limit }) => {

  const [beritaData, setBeritaData] = useState([])
  const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    const formattedDate = date.toLocaleDateString('id-ID', { timeZone: 'UTC' });
    return formattedDate
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/berita`);
        const data = await response.json()
        setBeritaData(data)
      }
      catch(e){
        console.error("Error fetching data:", e);
      }
    }

    fetchData()
  }, [])

  const deskripsiText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };
  return (
    <>
      {beritaData.slice(0, limit).map((data) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={data.id}>
          <img
            className="w-full h-44"
            src={`${import.meta.env.VITE_BACKEND_URL}${data.img}`}
            alt="Placeholder"
          />
          <div className="px-6 py-4 bg-gray-50 rounded-tr-3xl">
            <div className="flex justify-between">
              <div className=" flex w-[102px] h-[32px] bg-GreenLight text-Green justify-center items-center rounded-xl">
                <p className="text-center">News</p>
              </div>
              <p className="text-sm font-semibold ml-4 mt-2">{formatTanggal(data.date)}</p>
            </div>
            <div className="font-bold text-md mb-2 mt-4 h-14">{data.title}</div>
            <p className=" text-sm h-16">{deskripsiText(data.descripsi, 15)}</p>
            <ButtonRead id={data.id}/>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBerita;
