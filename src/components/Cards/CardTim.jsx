import React from 'react'
import { teamData } from '../../data/teamData'
import { FaLinkedin } from 'react-icons/fa'

const CardTim = () => {
  return (
    <>
    {
        teamData.map((data, index) => {
            return (
                <div className='w-[260px] ' key={index}>
                    <img src={data.img} alt="" className='rounded-full mx-auto'/>
                    <div className="font-bold text-2xl text-center mt-4">{data.name}</div>
                    <div className="font-normal text-xl text-center mt-2 uppercase">{data.position}</div>
                    <div className='flex justify-center text-3xl mt-2 ml-1'><FaLinkedin /></div>
                </div>
            )
        })
    }
        

    
    
    
    </>
  )
}

export default CardTim