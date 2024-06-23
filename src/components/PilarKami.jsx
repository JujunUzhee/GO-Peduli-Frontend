import React from 'react'
import CardPilar from './Cards/CardPilar'

const PilarKami = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="my-4 text-3xl text-DarkGreen font-bold">
          Pilar Kami
        </h2>
      </div>
      <div className='w-full flex justify-center items-center mt-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-28'>
          <CardPilar />
        </div>
      </div>
    </>
  )
}

export default PilarKami
