import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";

const FormDonasi = ({ editDonation, clearForm }) => {
  const [title, setTitle] = useState("");
  const [mitra, setMitra] = useState("");
  const [location, setLocation] = useState("");
  const [layanan, setLayanan] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const options = [
    { value: "Dewasa", label: "Dewasa" },
    { value: "Anak-Anak", label: "Anak-Anak" },
    { value: "Remaja", label: "Remaja" },
    { value: "Lainnya", label: "Kategori Lainnya" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  useEffect(() => {
    if (editDonation) {
      setTitle(editDonation.title);
      setMitra(editDonation.mitra);
      setLocation(editDonation.location);
      setLayanan(editDonation.layanan);
      setEmail(editDonation.email);
      setStartDate(new Date(editDonation.tanggal));
      setSelectedOptions(
        editDonation.kategori.split(", ").map((kategori) => ({
          value: kategori,
          label: kategori,
        }))
      );
      setImage(editDonation.image); // Assuming the image URL is stored
    }
  }, [editDonation]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !title ||
      !location ||
      selectedOptions.length === 0 ||
      !mitra ||
      !layanan ||
      !email ||
      !image ||
      !startDate
    ) {
      alert("Semua kolom harus diisi");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("mitra", mitra);
    formData.append("location", location);
    formData.append(
      "kategori",
      selectedOptions.map((option) => option.value).join(", ")
    );
    formData.append("layanan", layanan);
    formData.append("email", email);
    formData.append("image", image);
    formData.append("tanggal", startDate.toISOString().split("T")[0]);

    try {
      let response;
      if (editDonation) {
        response = await axios.put(
          `http://localhost:3000/donasiku/${editDonation.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        swal({
          title: "Donasi Berhasil Diperbarui!",
          text: "You clicked the button!",
          icon: "success",
          button: "OK",
        }).then(() => {
          clearForm();
          window.location.reload();
        });
      } else {
        response = await axios.post(
          "http://localhost:3000/donasiku",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        swal({
          title: "Donasi Berhasil Ditambahkan!",
          text: "You clicked the button!",
          icon: "success",
          button: "OK",
        }).then(() => {
          window.location.reload();
        });
      }

      console.log("Donasi berhasil disimpan:", response.data);
    } catch (error) {
      console.error("Gagal menyimpan donasi:", error.response.data);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 ml-1 hover:text-Green hover:cursor-pointer">
        {editDonation ? "Perbarui Postingan" : "Buat Baru"}
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <label htmlFor="judul" className="block font-bold ml-1">
            Judul Donasi
          </label>
          <input
            type="text"
            placeholder="Judul Donasi"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
          />
          <label htmlFor="lokasi" className="block font-bold ml-1">
            Lokasi
          </label>
          <input
            type="text"
            placeholder="Lokasi"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
          />
          <div className="relative">
            <label htmlFor="pengantaran" className="block mb-4 ml-1 font-bold">
              Pengantaran
            </label>
            <select
              id="pengantaran"
              aria-label="Pengantaran"
              value={layanan}
              onChange={(e) => setLayanan(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            >
              <option value="" disabled>
                Pengantaran
              </option>
              <option value="Tersedia Layanan Pick Up">Pick Up</option>
              <option value="Tidak Tersedia Layanan Pick UP">
                Ambil Sendiri
              </option>
            </select>
          </div>
          <div className="relative">
            <label
              htmlFor="tanggal-akhir"
              className="block mb-4 ml-1 font-bold"
            >
              Tanggal Akhir
            </label>
            <DatePicker
              id="tanggal-akhir"
              aria-label="Tanggal Akhir"
              className="w-[540px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="space-y-4">
          <label htmlFor="mitra" className="block font-bold ml-1">
            Nama Mitra
          </label>
          <input
            type="text"
            placeholder="Nama Mitra"
            value={mitra}
            onChange={(e) => setMitra(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
          />
          <label htmlFor="email" className="block font-bold ml-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email Mitra"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
          />
          <div className="relative mb-4">
            <label htmlFor="kategori" className="block mb-2 font-bold">
              Kategori
            </label>
            <Select
              id="kategori"
              isMulti
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              value={selectedOptions}
              onChange={handleSelectChange}
            />
          </div>
          <label htmlFor="pengantaran" className="block mb-4 ml-1 font-bold">
            Unggah Foto
          </label>
          <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
            <input
              type="file"
              accept=".jpg,.png,.svg"
              onChange={handleImageUpload}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
            >
              {image ? (
                <img
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
                  alt="Uploaded"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <img src="../image/upload.png" alt="" className="w-12" />
                  <span className="text-sm text-gray-500">
                    Mohon Unggah dalam file .jpg, .png, .svg
                  </span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="w-full max-w-sm mt-6 bg-[#4CAF50] text-white py-2 rounded-md hover:bg-[#45a049]"
        >
          {editDonation ? "Perbarui Postingan" : "Buat Postingan"}
        </button>
      </div>
    </div>
  );
};

export default FormDonasi;
