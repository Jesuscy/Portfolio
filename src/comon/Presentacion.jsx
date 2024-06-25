import React from 'react'
import fotocv from '../../src/img/fotocv.jpg'
export const Presentacion = () => {
    return (
        <div className="w-full flex justify-center">

            <div className='w-2/5 flex flex-col p-4 ml-20 mt-20 bg-zinc-900 rounded-md'>
                <div className='w-full flex flex-row'>
                    <div className='w-2/3 pt-20 flex flex-col'>
                        <div className='pl-4 font-mono font-bold text-6xl text-gray-300'>Jesus</div>
                        <div className='pl-4 font-mono font-bold text-5xl text-gray-300'>Carrasco Yelo</div>
                        <div className='p-4 font-mono font-bold text-gray-400'>
                            <p>Soy un joven desarrollador web</p>
                        </div>
                    </div>

                    <div className='w-1/2 mt-20 flex justify-center'>
                    <img src={fotocv} alt="Foto CV" className='w-47 h-48 border-2 border-fuchsia-700 object-cover rounded-full'/>
                    </div>
                </div>
                <div className='p-4 pb-10 font-mono font-bold text-4xl text-fuchsia-800'>Full Stack Developer</div>

            </div>
        </div>

    )
}
