import React, { useEffect, useState } from "react";
import { RiFlowerFill } from "react-icons/ri";

const CardPilar = () => {
  const [pilarData, setPilarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pilar`)
        const data = await response.json()
        setPilarData(data)
      }
      catch(e){
        console.error("Error fetching data:", e);
      }
    }

    fetchData()
  }, [])
  

  return (
    <>
      {pilarData.map((data, index) => {
        return (
          <div
            className={`max-w-full w-[264px] h-[250px] rounded-lg shadow-lg px-4 ${index >= 3 ? 'col-start-2' : '' }`}
            key={index}
          >
            <RiFlowerFill className="mx-auto my-6 text-2xl text-DarkGreen" />
            <div className="font-bold text-xl text-center">{data.title}</div>
            <p className="text-base text-center mt-4">{data.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default CardPilar;
