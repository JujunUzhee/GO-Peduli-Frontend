import React, { useState } from "react";
import DonasiCard from "./Cards/CardDonasi";
import ButtonMore from "./element/button/buttonMore";


const DonasiComponent = ({ data }) => {

  const[showAll, setShowAll] = useState(false)

  const handleShowMore = () => {
    setShowAll(true);
  }
  const displayedData = showAll ? data : data.slice(0, 6);
  return (
    <>
      {data.length === 0 ? (
        <div className="flex justify-center items-center mt-6">
          <p className="mb-24 text-2xl md:text-3xl text-DarkGreen font-bold  hover:cursor-pointer">Tidak ada data yang sesuai !!</p>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center" id="donasi">
            <h2 className="my-4 text-2xl md:text-3xl text-DarkGreen font-bold hover:text-Green hover:cursor-pointer">
              Salurkan Donasimu Disini
            </h2>
          </div>
          <div className="w-full flex justify-center items-center mt-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedData.map((donasi, index) => (
                <DonasiCard key={index} data={donasi} />
              ))}
            </div>
          </div>
          {!showAll && data.length > 3 && (
            <div className="flex items-center justify-center mt-20 mb-44">
            <ButtonMore onClick={handleShowMore}/>
          </div>
          )}
          
        </>
      )}
    </>
  );
};

export default DonasiComponent;
