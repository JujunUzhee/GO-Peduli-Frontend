import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardProgram = ({ limit }) => {
  const navigate = useNavigate();
  const [programData, setProgramData] = useState([]);
  const handleClick = (programId) => {
    navigate(`/laporan/${programId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/home`);
        const data = await response.json();
        setProgramData(data.programs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {programData.slice(0, limit).map((data, id) => (
        <div
          className="relative w-full sm:w-[345px] h-[350px] rounded overflow-hidden shadow-lg cursor-pointer"
          key={id}
          onClick={() => handleClick(data.id)}
        >
          <img
            className="w-full h-56 object-cover"
            src={data.image}
            alt="Placeholder"
          />
          <div className="absolute px-6 py-4 bg-white rounded-tr-3xl top-1/2">
            <div className="font-bold text-xl mt-3">{data.title}</div>
            <p className="text-gray-700 text-base pt-7">{data.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProgram;
