import React from 'react'
import '../index.css'

export const Navbar = () => {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <div className='p-4 text-3xl font-bold font-mono text-green-500'>
        JCY
      </div>
      <div className='w-full flex justify-center font-bold'>
        <div className='w-full md:w-3/4 flex flex-col md:flex-row p-2 text-gray-300 justify-center md:justify-center'>
          <div className='w-full md:w-1/6 m-4 p-2 text-center font-playwrite  border text-gray-900 bg-green-600 border-green-400 rounded-md cursor-pointer hover:bg-green-700'>
            Formación
          </div>
          <div className='w-full md:w-1/6 m-4 p-2 text-center font-playwrite border text-gray-900 bg-yellow-300 border-yellow-200 rounded-md cursor-pointer hover:bg-yellow-500'>
            Contacto
          </div>
          <div className='w-full md:w-1/6 m-4 p-2 text-center font-playwrite border  text-gray-900 bg-red-400 border-red-400 rounded-md cursor-pointer hover:bg-red-500'>
            Proyectos
          </div>
        </div>
      </div>
    </div>
  )
}