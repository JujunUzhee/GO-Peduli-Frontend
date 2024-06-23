import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

const AdminBeritaa = () => {
  const [selectedButton, setSelectedButton] = useState("Semua");
  const [title, setTitle] = useState("");
  const [mitra, setMitra] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [kategori, setKategori] = useState("");
  const [descripsi, setDescripsi] = useState("");
  const [img, setImg] = useState("");

  const [editBerita, setEditBerita] = useState(null);
  const [beritaList, setBeritaList] = useState([]);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/berita`
      );
      setBeritaList(response.data);
    } catch (error) {
      console.error("Failed to fetch berita", error);
    }
  };

  const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    else if (name === "mitra") setMitra(value);
    else if (name === "date") setDate(value);
    else if (name === "kategori") setKategori(value);
    else if (name === "descripsi") setDescripsi(value);
    else if (name === "author") setAuthor(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file); // Simpan file itu sendiri
    }
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const getButtonClass = (buttonName) => {
    return selectedButton === buttonName
      ? "w-32 border rounded-3xl border-gray-300 text-white px-4 py-2 bg-green-600 mt-10 font-normal"
      : "w-32 border rounded-3xl border-gray-300 text-black px-4 py-2 bg-white hover:bg-green-600 mt-10 font-normal";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !mitra ||
      !date ||
      !kategori ||
      !descripsi ||
      !img ||
      !author
    ) {
      console.log("Semua kolom harus diisi!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("mitra", mitra);
    formData.append("date", date);
    formData.append("kategori", kategori);
    formData.append("descripsi", descripsi);
    formData.append("img", img);
    formData.append("author", author);

    try {
      let response;
      if (editBerita) {
        response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/berita/${editBerita.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        swal({
          title: "Berita Berhasil Diperbarui!",
          text: "Berita berhasil diperbarui.",
          icon: "success",
          button: "OK",
        }).then(() => {
          fetchBerita(); // Refresh the list
          clearForm();
        });
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/berita`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        swal({
          title: "Berita Berhasil Ditambahkan!",
          text: "Berita berhasil ditambahkan.",
          icon: "success",
          button: "OK",
        }).then(() => {
          fetchBerita(); // Refresh the list
          clearForm();
        });
      }

      console.log("Berita berhasil disimpan:", response.data);
    } catch (error) {
      console.error("Gagal menyimpan berita:", error);
      swal({
        title: "Gagal menyimpan berita!",
        text: "Terjadi kesalahan saat menyimpan berita.",
        icon: "error",
        button: "OK",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/berita/${id}`);
      fetchBerita(); // Refresh the list
    } catch (error) {
      console.error("Failed to delete berita", error);
    }
  };

  const handleEdit = (berita) => {
    setEditBerita(berita);
    setTitle(berita.title);
    setMitra(berita.mitra);
    setDate(berita.date);
    setKategori(berita.kategori);
    setAuthor(berita.author);
    setDescripsi(berita.descripsi);
    setImg(berita.img); // Asumsi URL gambar disimpan di berita.img
  };

  const clearForm = () => {
    setTitle("");
    setMitra("");
    setDate("");
    setKategori("");
    setDescripsi("");
    setImg("");
    setAuthor("");
    setEditBerita(null);
  };
  return (
    <main className="flex-grow p-6 bg-white rounded-xl ml-4 mt-4 h-full mr-5">
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Dashboard / Berita</h1>
        </div>
      </div>

      <div className="flex items-center ml-4 justify-between">
        <div>
          <p className="text-[#222831] text-[18px] font-semibold leading-[40px]">
            Berita dan Publikasi
          </p>
        </div>

        <div className="flex items-center border rounded-3xl px-2 py-2 bg-white text-black mr-6 w-80">
          <CiSearch className="mr-2" size={20} />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none bg-transparent w-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-start space-x-2 w-full mt-2 ml-4">
        <button
          className={getButtonClass("Semua")}
          onClick={() => handleButtonClick("Semua")}
        >
          Semua
        </button>
        <button
          className={getButtonClass("Berita")}
          onClick={() => handleButtonClick("Berita")}
        >
          Berita
        </button>
        <button
          className={getButtonClass("Publikasi")}
          onClick={() => handleButtonClick("Publikasi")}
        >
          Publikasi
        </button>
        <button
          className={getButtonClass("FAQ")}
          onClick={() => handleButtonClick("FAQ")}
        >
          F&Q
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols mt-10">
          <thead>
            <tr>
              <th className="px-4">Judul</th>
              <th className="px-4">Tanggal Terbit</th>
              <th className="px-10">Kategori</th>
              <th className="px-4">Penulis</th>
              <th className="px-4">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-loginLight">
            {beritaList.map((berita) => (
              <tr
                key={berita.id}
                className="bg-gray-50 hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="p-4">{berita.title}</td>
                <td className="p-4">{formatTanggal(berita.date)}</td>
                <td className="p-4">
                  <button className="w-32 border rounded-3xl border-gray-300 text-white px-4 py-2 bg-Green hover:bg-green-600 font-normal">
                    {berita.kategori}
                  </button>
                </td>
                <td className="p-4">{berita.author}</td>
                <td className="p-4">
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FaEdit
                      className="ml-2 cursor-pointer"
                      size={20}
                      onClick={() => handleEdit(berita)}
                    />
                    <MdDelete
                      className="ml-2 cursor-pointer"
                      size={20}
                      style={{ color: "green" }}
                      onClick={() => handleDelete(berita.id)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mt-10">
        <h2 className="text-lg font-semibold mb-4">
          {editBerita ? "Edit Berita" : "Tambah Berita Baru"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h6 className="font-semibold mt-4">Judul Berita</h6>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                placeholder="Judul Berita"
                className="p-4 bg-gray-100 rounded-lg w-96"
                required
              />

              <h6 className="font-semibold mt-4">Mitra</h6>
              <input
                type="text"
                name="mitra"
                value={mitra}
                onChange={handleInputChange}
                placeholder="Mitra"
                className="p-4 bg-gray-100 rounded-lg w-96"
                required
              />
              <h6 className="font-semibold mt-4">Penulis</h6>
              <input
                type="text"
                name="author"
                value={author}
                onChange={handleInputChange}
                placeholder="Penulis"
                className="p-4 bg-gray-100 rounded-lg w-96"
                required
              />

              <h6 className="font-semibold mt-4">Tanggal</h6>
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleInputChange}
                placeholder="Tanggal"
                className="p-4 bg-gray-100 rounded-lg w-96"
                required
              />

              <h6 className="font-semibold mt-4">Kategori</h6>
              <select
                name="kategori"
                value={kategori}
                onChange={handleInputChange}
                className="p-4 bg-gray-100 rounded-lg w-96"
                required
              >
                <option value=""> Kategori</option>
                <option value="Berita">Berita</option>
                <option value="Publikasi">Publikasi</option>
                <option value="FAQ">FAQ</option>
              </select>
            </div>

            <div className="space-y-4">
              <h6 className="font-semibold mt-4">Deskripsi</h6>
              <textarea
                name="descripsi"
                value={descripsi}
                onChange={handleInputChange}
                placeholder="Deskripsi Berita"
                className="p-4 bg-gray-100 rounded-lg w-96 h-48"
                required
              />

              <h6 className="font-semibold mt-4">Gambar</h6>
              <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
                <input
                  type="file"
                  accept=".jpg,.png,.svg"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
                >
                  {img ? (
                    <img
                      src={
                        typeof img === "string"
                          ? `/uploads/${img}`
                          : URL.createObjectURL(img)
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

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
                >
                  {editBerita ? "Simpan Perubahan" : "Tambah Berita"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminBeritaa;
