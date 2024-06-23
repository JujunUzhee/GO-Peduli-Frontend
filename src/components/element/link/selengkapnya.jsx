import React from 'react'
import { Link } from 'react-router-dom'

const Selengkapnya = (props) => {
  return (
    <>
    <Link to={props.to} className="text-Green font-semibold cursor-pointer hover:text-green-400">Lihat Selengkapnya</Link>
    </>
  )
}

export default Selengkapnya