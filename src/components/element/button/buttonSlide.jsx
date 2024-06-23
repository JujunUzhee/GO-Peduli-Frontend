import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const ButtonSlide = ({left,right}) => {
  return (
    <>
     <a
                href={left}
                className="btn text-2xl text-slate-500 bg-transparent border-none hover:bg-Green hover:text-white"
              >
                <FaChevronLeft />
              </a>
              <a
                href={right}
                className="btn text-2xl text-slate-500 bg-transparent border-none hover:bg-Green hover:text-white"
              >
                <FaChevronRight />
              </a>
    </>
  )
}

export default ButtonSlide