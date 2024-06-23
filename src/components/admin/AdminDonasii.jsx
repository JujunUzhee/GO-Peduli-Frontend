import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import TabelDonasi from "./TabelDonasi";
import FormDonasi from "./element/form/FormDonasi";
import swal from "sweetalert";

const AdminDonasi = () => {
  const [allDonasi, setAllDonasi] = useState([]);
  const [selectedDonations, setSelectedDonations] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [editDonation, setEditDonation] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}donasiku`
      );
      const data = await response.json();
      setAllDonasi(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDonasiSelection = (id) => {
    const selectedIndex = selectedDonations.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedDonations([...selectedDonations, id]);
    } else {
      const updatedSelection = [...selectedDonations];
      updatedSelection.splice(selectedIndex, 1);
      setSelectedDonations(updatedSelection);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedDonations([]);
    } else {
      const allDonasiIds = allDonasi.map((donasi) => donasi.id);
      setSelectedDonations(allDonasiIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteDonations = async () => {
    try {
      const deleteRequests = selectedDonations.map((id) =>
        fetch(`http://localhost:3000/donasiku/${id}`, {
          method: "DELETE",
        })
      );

      const responses = await Promise.all(deleteRequests);
      const allSuccessful = responses.every((response) => response.ok);

      if (allSuccessful) {
        fetchData(); // Refresh data if deletion is successful
        setSelectedDonations([]);
        setSelectAll(false);
        swal({
          title: "Donasi Berhasil Dihapus!",
          text: "You clicked the button!",
          icon: "warning",
          dangerMode: true,
        }).then(() => {
          window.location.reload();
        });
      } else {
        console.error("Gagal menghapus beberapa donasi");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditButtonClick = () => {
    if (selectedDonations.length === 1) {
      const donationToEdit = allDonasi.find(
        (donasi) => donasi.id === selectedDonations[0]
      );
      setEditDonation(donationToEdit);
    } else {
      swal({
        title: "Pilih satu donasi untuk diedit",
        icon: "warning",
      });
    }
  };

  const clearForm = () => {
    setEditDonation(null);
    setSelectedDonations([]);
  };

  return (
    <main className="flex-grow p-6 bg-white rounded-xl ml-5 mt-4 h-full mr-5">
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Dashboard / Donasi</h1>
        </div>
      </div>

      <div className="grid gap-6 bg-loginLight">
        <TabelDonasi
          allDonasi={allDonasi}
          handleDonasiSelection={handleDonasiSelection}
          selectedDonations={selectedDonations}
          selectAll={selectAll}
        />
        <div className="flex items-center ml-4 justify-between">
          <div>
            <input
              type="checkbox"
              id="select-all"
              className="rounded"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <label htmlFor="select-all" className="ml-2 text-sm font-medium">
              Pilih Semua
            </label>
          </div>
          <div className="flex items-center">
            <button
              className="mr-4 text-red-600"
              onClick={handleDeleteDonations}
            >
              <FaTrash />
            </button>
            <button
              className="border border-gray-300 text-white px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 font-bold mr-4"
              onClick={handleEditButtonClick}
            >
              Edit
            </button>
          </div>
        </div>
        <FormDonasi editDonation={editDonation} clearForm={clearForm} />
      </div>
    </main>
  );
};

export default AdminDonasi;
