import React, { useEffect, useState } from "react";

const TabelDonasi = ({ handleDonasiSelection, selectedDonations, selectAll }) => {
  const [allDonasi, setAllDonasi] = useState([]);

  const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    const formattedDate = date.toLocaleDateString("id-ID", { timeZone: "UTC" });
    return formattedDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/donasiku`);
        const data = await response.json();
        setAllDonasi(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th className="py-2 px-4">Mitra</th>
            <th className="py-2 px-4">Judul</th>
            <th className="py-2 px-4">Lokasi</th>
            <th className="py-2 px-4">Kategori</th>
            <th className="py-2 px-4">Pengantaran</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Gambar</th>
            <th className="py-2 px-4">Tanggal Akhir</th>
            <th className="py-2 px-4">Pilih</th>
          </tr>
        </thead>
        <tbody className="bg-white h-64 overflow-y-auto">
          {allDonasi.map((data, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{data.mitra}</td>
              <td className="py-2 px-4">{data.title}</td>
              <td className="py-2 px-4">{data.location}</td>
              <td className="py-2 px-4">{data.kategori}</td>
              <td className="py-2 px-4">{data.layanan}</td>
              <td className="py-2 px-4">{data.email}</td>
              <td className="py-2 px-4">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${data.image}`}
                  alt="Gambar Donasi"
                  className="rounded-2xl shadow-lg border border-slate-200 w-32 h-24"
                />
              </td>
              <td className="py-2 px-4">{formatTanggal(data.tanggal)}</td>
              <td className="py-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success mr-4 mt-10"
                  onChange={() => handleDonasiSelection(data.id)}
                  checked={selectedDonations.includes(data.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelDonasi;
