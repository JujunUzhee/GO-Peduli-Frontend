import React from 'react';

const Kategori = ({ setKategori }) => {
  return (
    <>
      <select
        className="select select-md w-[550px] bg-green-50 shadow-md max-w-sm"
        onChange={(e) => setKategori(e.target.value)}
        defaultValue="" 
      >
        <option disabled>
          Kategori
        </option>
        <option value="">Semua Kategori</option>
        <option value="Dewasa">Pakaian Dewasa</option>
        <option value="Anak-anak">Pakaian Anak-anak</option>
        <option value="Remaja">Pakaian Remaja</option>
      </select>
    </>
  );
};

export default Kategori;
