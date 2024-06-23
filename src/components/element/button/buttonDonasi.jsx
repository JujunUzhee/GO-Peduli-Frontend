import React from "react";
import { Link } from "react-router-dom";


const DonationButton = () => {


  return (
    <Link
      className="btn w-64 h-14 bg-Green rounded-xl shadow-lg text-white font-bold text-xl hover:bg-white hover:text-Green hover:btn-success"
        to="/formulir-donatur"
    >
      Donasi Sekarang
    </Link>
  );
};

export default DonationButton;
