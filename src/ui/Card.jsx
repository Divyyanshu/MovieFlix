import React from 'react'

const Card = ({movie}) => {
  return (
    <div className='m-10 p-5 grid grid-cols-2 border-[#F2AA4C] border gap-5 rounded-lg drop-shadow-xl'>
        <div>
            <img src={movie.Poster} alt="" className='w-full h-48 object-cover rounded-md shadow-md'/>
        </div>
        <div className='flex flex-col gap-2 justify-center'>
            <p className='text-lg font-bold text-white'>Title : {movie.Title}</p>
            <p className='text-sm font-semibold text-gray-400'>Realese Year : {movie.Year}</p>
            <button className='px-6 py-2 bg-[#F2AA4C] rounded-lg text-[#101820] text-sm'>Details</button>
        </div>
    </div>
  )
}

export default Card