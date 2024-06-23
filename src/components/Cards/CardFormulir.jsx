import React, { useState } from "react";
import Kategori from "../element/input/kategori";
import LokasiDonasi from "../element/input/lokasiDonasi";
import Pengantaran from "../element/input/pilihPengantaran";
import axios from "axios";
import swal from "sweetalert";
const CardFormulir = ({ title, profil, buttonText }) => {
  const [lokasi, setLokasi] = useState("");
  const [kategori, setKategori] = useState("");
  const [nama, setNama] = useState("");
  const [nomor, setNomor] = useState("");
  const [email, setEmail] = useState("");
  const [pengantaran, setPengantaran] = useState("");
  const [alamat, setAlamat] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !lokasi ||
      !kategori ||
      !nama ||
      !nomor ||
      !email ||
      !pengantaran ||
      !alamat
    ) {
      console.error("Please fill in all required fields");
      return;
    }

    swal("Apakah kamu yakin data donasi udah benar?", {
      buttons: {
        cancel: "Tidak",
        confirm: {
          text: "Yakin",
          value: true,
        },
      },
    }).then(async (value) => {
      if (value) {
        try {
          const formData = {
            pilihLokasi: lokasi,
            kategori,
            nama,
            nomor,
            email,
            pengantaran,
            alamat,
          };
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/formulir-donasi`,
            formData
          );
          swal({
            title: "Donasi Berhasil!",
            text: `Terimakasih ${nama} Atas Donasinya.`,
            icon: "success",
          }).then(() => {
            window.location.reload();
          },[5000]);
        } catch (error) {
          console.error("There was an error submitting the form!", error);
          console.error("Server response data:", error.response.data);
          swal("Gagal!", "Terdapat kesalahan dalam pengiriman data.", "error");
        }
      } else {
      
        swal("Data Donasi belum dikonfirmasi.");
      }
    });
  };

  return (
    <>
      <div className="w-full lg:w-[1154px] mb-52 rounded-xl shadow-lg bg-white mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <h1 className="text-DarkGreen text-2xl sm:text-3xl lg:text-4xl text-center mt-12 sm:mt-16 lg:mt-20 font-bold">
            {title}
          </h1>
          <hr className="w-full lg:w-[930px] mx-auto mt-8 sm:mt-10 lg:mt-12 border-Green border-t-2 mb-8 sm:mb-10 lg:mb-12" />

          <div className="flex flex-col -mx-3 mb-6">
            <div className="mx-auto w-full lg:w-3/4 px-3 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-8">
              <label
                className="w-full md:w-1/3 tracking-wide text-dark text-lg font-bold"
                htmlFor="location"
              >
                Pilih Lokasi{" "}
                <span className="text-red-600 hover:cursor-pointer">*</span>
              </label>
              <div className="w-full md:w-2/3">
                <LokasiDonasi setLokasi={setLokasi} />
              </div>
            </div>

            <div className="mx-auto w-full lg:w-3/4 px-3 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-8 mt-8">
              <label
                className="w-full md:w-1/3 tracking-wide text-dark text-lg font-bold"
                htmlFor="category"
              >
                Kategori Pakaian{" "}
                <span className="text-red-600 hover:cursor-pointer">*</span>
              </label>
              <div className="w-full md:w-2/3">
                <Kategori setKategori={setKategori} />
              </div>
            </div>
          </div>

          <h1 className="text-gray-800 text-xl sm:text-2xl mt-24 sm:mt-32 lg:mt-36 font-bold ml-6 sm:ml-16 lg:ml-28">
            {profil}
          </h1>
          <hr className="w-full lg:w-[930px] mx-auto mt-4 border-Green border-t-2 mb-8 sm:mb-10 lg:mb-12" />

          <div className="flex flex-col -mx-3 mb-6">
            <div className="mx-auto w-full lg:w-3/4 px-3 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-8">
              <label
                className="w-full md:w-1/3 tracking-wide text-dark text-lg font-bold"
                htmlFor="name"
              >
                Nama <span className="text-red-600">*</span>
              </label>
              <div className="w-full md:w-2/3">
                <input
                  type="text"
                  placeholder="Nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="input input-md w-96 bg-green-50 border-none shadow-md"
                />
              </div>
            </div>

            <div className="mx-auto w-full lg:w-3/4 px-3 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-8 mt-8">
              <label
                className="w-full md:w-1/3 tracking-wide text-dark text-lg font-bold"
                htmlFor="phone"
              >
                Nomor Hp/Wa <span className="text-red-600">*</span>
              </label>
              <div className="w-full md:w-2/3">
                <input
                  type="number"
                  placeholder="Masukan Nomor"
                  value={nomor}
                  onChange={(e) => setNomor(e.target.value)}
                  required
                  className="input input-md w-96 bg-green-50 border-none shadow-md"
                />
              </div>
            </div>

            <div className="mx-auto w-full lg:w-3/4 px-3 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-8 mt-8">
              <label
                className="w-full md:w-1/3 tracking-wide text-dark text-lg font-bold"
                htmlFor="email"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <div className="w-full md:w-2/3">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input input-md w-96 bg-green-50 border-none shadow-md"
                />
              </div>
            </div>
          </div>

          <h1 className="text-gray-800 text-xl sm:text-2xl mt-24 sm:mt-32 lg:mt-36 font-bold ml-6 sm:ml-16 lg:ml-28">
            Pengantaran
          </h1>
          <hr className="w-full lg:w-[930px] mx-auto mt-4 border-Green border-t-2 mb-8 sm:mb-10 lg:mb-12" />

          <div className="flex flex-col -mx-3 mb-6">
            <div className="mx-auto w-full lg:w-3/4 px-3 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-8">
              <label
                className="w-full md:w-1/3 tracking-wide text-dark text-lg font-bold"
                htmlFor="delivery"
              >
                Pilih Pengantaran <span className="text-red-600">*</span>
              </label>
              <div className="w-full md:w-2/3">
                <Pengantaran setPengantaran={setPengantaran} />
              </div>
            </div>

            <div className="mx-auto w-full lg:w-3/4 px-3 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-8 mt-8">
              <label
                className="w-full md:w-1/3 tracking-wide text-dark text-lg font-bold"
                htmlFor="address"
              >
                Alamat <span className="text-red-600">*</span>
              </label>
              <div className="w-full md:w-2/3">
                <input
                  type="text"
                  placeholder="Alamat"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                  className="input input-md w-96 bg-green-50 border-none shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-28 mb-20">
            <button className="w-[324px] h-[56px] bg-Green items-center rounded-xl shadow-lg text-white font-bold text-xl">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CardFormulir;
