import React from 'react'

const ButtonMore = ({onClick}) => {
  return (
    <>
        <button className="btn bg-Green w-48 h-14 text-white font-semibold text-sm hover:bg-white hover:text-Green hover:btn-success sm:w-72 sm:text-lg" onClick={onClick}>Tampilkan Lebih Banyak</button>
    </>
  )
}

export default ButtonMore