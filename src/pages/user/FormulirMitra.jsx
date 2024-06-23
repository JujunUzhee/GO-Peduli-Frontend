import React from 'react'
import Navbar from '../../components/Navbar'
import MitraFormulir from '../../components/MitraFormulir'
import ScrollToTop from '../../components/scrollTop'

const FormulirMitra = () => {
  return (
    <>
    <ScrollToTop />
        <Navbar/>
        <div className='relative '>
            <img src="/image/Image_Formulir.png" alt="" className='h-[550px] w-full '/>
            <div className='absolute flex gap-4 top-1/2 left-1/2 transform -translate-x-1/2   p-4  z-10 mt-6'>
            <MitraFormulir />
            </div>
           
        </div>
        
    </>
  )
}

export default FormulirMitra