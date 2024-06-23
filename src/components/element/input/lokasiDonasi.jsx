import React from 'react'

const LokasiDonasi = ({setLokasi}) => {
  return (
    <>
    <select
      className="select select-md w-[550px] bg-green-50 shadow-md max-w-sm"
      onChange={(e) => setLokasi(e.target.value)}
      defaultValue="" 
    >
      <option value= "" disabled>
       Lokasi
      </option>

      <option value="Semarang">Semarang</option>
      <option value="Rembang">Rembang</option>
      <option value="Rembang">Demak</option>
    </select>
  </>
  )
}

export default LokasiDonasi