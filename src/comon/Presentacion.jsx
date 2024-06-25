import React from 'react';
import fotocv from '../../src/img/fotocv.jpg';

export const Presentacion = () => {
  return (
    <div className="w-full flex justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <div className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 flex flex-col p-4 bg-zinc-900 rounded-md'>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='md:w-3/4 pt-10 md:pt-20 flex flex-col'>
            <div className='pl-4 font-mono font-bold text-4xl sm:text-5xl md:text-6xl text-gray-300'>Jesus</div>
            <div className='pl-4 font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-gray-300'>Carrasco Yelo</div>
            <div className='p-4 font-mono font-bold text-gray-400'>
              <p>Soy un joven desarrollador web</p>
            </div>
          </div>
          <div className='w-full md:w-1/4 md:mt-10 flex justify-center p-4'>
            <img src={fotocv} alt="Foto CV" className='w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 border-fuchsia-700 object-cover rounded-full'/>
          </div>
        </div>
        <div className='p-4 pb-10 font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-fuchsia-800'>Full Stack Developer</div>
      </div>
    </div>
  )
}
