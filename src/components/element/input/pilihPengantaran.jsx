import React from 'react'

const Pengantaran = ({setPengantaran}) => {
  return (
    <>
    <select
      className="select select-md w-[550px] bg-green-50 shadow-md max-w-sm"
      onChange={(e) => setPengantaran(e.target.value)}
      defaultValue="" 
    >
      <option value="" disabled>
       pengantaran
      </option>

      <option value="PickUp">Pick Up</option>
      <option value="AntarSendiri">Antar Sendiri</option>
    </select>
  </>
  )
}

export default Pengantaran