import React from 'react'

const InputLokasi = ({setLokasi}) => {
  return (
    <>
    <input
      type="text"
      placeholder="Lokasi"
      className="input input-md w-[550px] bg-green-50 border-none shadow-md max-w-sm"
      onChange={(e) => setLokasi(e.target.value)}
    />
  </>
  )
}

export default InputLokasi