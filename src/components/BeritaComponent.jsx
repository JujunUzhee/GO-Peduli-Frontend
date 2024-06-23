import React from 'react';
import CardBerita from './Cards/CardBerita';

const BeritaComponent = ({news, otherNews,data}) => {
  return (
    <>
      <div className="flex flex-col ml-12">
          <h2 className="my-4 text-3xl font-bold mb-8 ml-3">{news}</h2>
          <div className="grid grid-cols-2 gap-12 mr-auto mb-8">
            <CardBerita data={data} limit={2}/>
          </div>
          <h2 className="my-4 text-3xl font-bold mt-20 mb-8 ml-3"> {otherNews}</h2>
          <div className="grid grid-cols-3 gap-12 mx-auto mb-16">
            <CardBerita data={data} limit={6}/>
          </div>
        </div>
    </>
  );
};

export default BeritaComponent;
