import React from 'react'
import '../index.css'
import fotocv from '../../src/img/fotocv.jpg'

export const Presentacion = () => {
    return (
        <div className="w-full flex justify-center p-2 sm:p-8 md:p-12 lg:p-16 xl:p-20 md:mt-50 md:mb-52 ">
            <div className='w-full  md:items-start sm:items-center xs:items-center sm:w-4/5 md:w-3/5 lg:w-3/5 flex flex-col bg-zinc-900 rounded-md'>
                <div className='w-full flex flex-col md:flex-row'>
                    <div className='md:w-2/3 pt-10 md:pt-20 flex flex-col'>
                        <div className='pl-4 font-mono font-bold text-4xl sm:text-5xl md:text-6xl text-gray-300'>Jesús</div>
                        <div className='pl-4 font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-gray-300'>Carrasco Yelo</div>
                        <div className='flex flex-col p-4 pb-10 font-mono font-bold text-2xl sm:text-3xl md:text-4xl  text-fuchsia-800'>Full Stack Developer
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 mt-10 md:mt-20 flex justify-center'>
                        <div className='flex justify-center items-center w-36 h-48'>
                            <img src={fotocv} alt="Foto CV" className='w-full h-full border-2 border-fuchsia-700 object-cover rounded-full' />
                        </div>
                    </div>
                </div>

                <button className='w-1/4 mt-5 p-2 text-base font-mono rounded-lg border border-transparent hover:border hover:border-fuchsia-700 bg-zinc-800 text-gray-400'>Más Sobre Mí</button>
            </div>
        </div>
        
    )
}
