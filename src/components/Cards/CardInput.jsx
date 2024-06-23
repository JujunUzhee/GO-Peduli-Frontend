import React from "react";
import { IoSearch } from "react-icons/io5";
import InputLokasi from "../element/input/inputLokasi";
import Kategori from "../element/input/kategori";

const CardInput = ({ setLokasi, setKategori, onSearch }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg flex-col w-full max-w-screen-lg p-6">
      <h2 className="text-center font-bold text-2xl md:text-3xl mt-4 md:mt-8">
        Temukan Lokasi Terdekat
      </h2>
      <div className="flex flex-col md:flex-row gap-12 mt-6 md:mt-10 w-full justify-center">
        <InputLokasi setLokasi={setLokasi} />
        <Kategori setKategori={setKategori} />
        <button
          type="submit"
          className="btn btn-circle bg-Green text-white text-2xl flex items-center justify-center"
          onClick={onSearch}
        >
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

export default CardInput;
