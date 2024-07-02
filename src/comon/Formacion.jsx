import React from 'react'
import '../index.css'

export const Formacion = () => {
  return (
    <div className="w-full flex justify-center xs:p-8 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className='w-full flex flex-col p-10 sm:w-4/5 md:w-4/5 lg:w-4/5 rounded-md'>
                <div className='md:w-full text-center pt-10 md:pt-10 flex flex-col'>
                    <div className='flex flex-col font-playwrite font-bold text-4xl sm:text-3xl md:text-5xl border-b-2 p-5 border-neutral-700  text-green-500'>
                        Fromación
                    </div>
                </div>
                <div className='flex flex-col lg:w-2/5 md:w-4/5 sm:w-4/5 xs:w-full md:text-center mt-10 md:mt-20 p-4 m-auto justify-center  font-playwrite text-2xl bg-slate-800 rounded-lg text-gray-300 '>
                </div>
            </div>
        </div>)
}
