import React from 'react';

const BeritaPublikasi = ({ setChoose }) => {
  return (
    <>
      <select
        className="select select-md w-[550px] bg-green-50 shadow-md max-w-sm"
        onChange={(e) => setChoose(e.target.value)}
        defaultValue="" 
      >
        <option value="Berita">Berita</option>
        <option value="Publikasi">Publikasi</option>
      </select>
    </>
  );
};

export default BeritaPublikasi;
