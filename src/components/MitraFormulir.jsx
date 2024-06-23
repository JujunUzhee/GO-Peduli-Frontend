import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import swal from 'sweetalert';
const MitraFormulir = () => {
  const [judulDonasi, setJudulDonasi] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [pengantaran, setPengantaran] = useState('');
  const [tanggalAkhir, setTanggalAkhir] = useState(null);
  const [namaMitra, setNamaMitra] = useState('');
  const [email, setEmail] = useState('');
  const [kategori, setKategori] = useState([]);
  

  const handleKategoriChange = (selectedOptions) => {
    setKategori(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      judulDonasi,
      lokasi,
      pengantaran,
      tanggalAkhir,
      namaMitra,
      email,
      kategori: kategori.map(k => k.value),
    };
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/mitra-formulir`, formData);
      console.log('Form submitted successfully:', response.data);
      swal("Good job!", "Registrasi Berhasil", "success").then(() => {
        window.location.reload();
      },[5000]);
    } catch (error) {
      console.error('Error submitting form:', error);
      swal("Gagal!", "Terdapat kesalahan dalam pengiriman data.", "error");
    }
  };



  const kategoriOptions = [
    { value: "Dewasa", label: "Dewasa" },
    { value: "Anak-Anak", label: "Anak-Anak" },
    { value: "Remaja", label: "Remaja" },
  ];

  return (
    <>
      <div className="relative w-full flex justify-center items-center">
        <div className="w-full lg:w-[1154px] mb-52 rounded-xl shadow-lg bg-white mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <h1 className="text-DarkGreen text-2xl sm:text-3xl lg:text-4xl text-center mt-12 sm:mt-16 lg:mt-20 font-bold">
              MITRA
            </h1>
            <hr className="w-full lg:w-[930px] mx-auto mt-8 sm:mt-10 lg:mt-12 border-Green border-t-2 mb-8 sm:mb-10 lg:mb-12" />

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <label htmlFor="judul" className="font-bold w-1/4">
                  Judul Donasi
                </label>
                <input
                  type="text"
                  id="judul"
                  placeholder="Judul Donasi"
                  value={judulDonasi}
                  onChange={(e) => setJudulDonasi(e.target.value)}
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="lokasi" className="font-bold w-1/4">
                  Lokasi
                </label>
                <input
                  type="text"
                  id="lokasi"
                  placeholder="Lokasi"
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="pengantaran" className="font-bold w-1/4">
                  Pengantaran
                </label>
                <select
                  id="pengantaran"
                  aria-label="Pengantaran"
                  value={pengantaran}
                  onChange={(e) => setPengantaran(e.target.value)}
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="" disabled>
                    Pengantaran
                  </option>
                  <option value="Tersedia Layanan Pick Up">Pick Up</option>
                  <option value="Tidak Tersedia Layanan Pick UP">Ambil Sendiri</option>
                </select>
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="tanggal-akhir" className="font-bold w-1/4">
                  Tanggal Akhir
                </label>
                <DatePicker
                  id="tanggal-akhir"
                  aria-label="Tanggal Akhir"
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  selected={tanggalAkhir}
                  onChange={(date) => setTanggalAkhir(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="mitra" className="font-bold w-1/4">
                  Nama Mitra
                </label>
                <input
                  type="text"
                  id="mitra"
                  placeholder="Nama Mitra"
                  value={namaMitra}
                  onChange={(e) => setNamaMitra(e.target.value)}
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="email" className="font-bold w-1/4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Mitra"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="kategori" className="font-bold w-1/4">
                  Kategori
                </label>
                <Select
                  id="kategori"
                  isMulti
                  options={kategoriOptions}
                  className="basic-multi-select w-3/4"
                  classNamePrefix="select"
                  value={kategori}
                  onChange={handleKategoriChange}
                />
              </div>
            </div>

            <div className="flex justify-center mt-12 mb-20 md:ml-32 ml-14">
              <button
                type="submit"
                className="w-full max-w-md  bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MitraFormulir;
