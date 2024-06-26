import React from 'react'
import '../index.css'
import fotocv from '../../src/img/fotocv.jpg'
import github from '../../src/img/icons8-github-64 (1).png'
import mail from '../../src/img/icons8-gmail-100.png'
import cv from '../../src/img/icons8-cv-96.png'
import linkedin from '../../src/img/icons8-linkedin-100.png'

export const Presentacion = () => {
    return (
        <div className="w-full flex justify-center  sm:p-8 md:p-12 lg:p-16 xl:p-20 md:mt-30 md:mb-52 md:ml-10 lg:ml-10">
            <div className='w-full  md:items-start sm:items-center xs:items-center sm:w-4/5 md:w-3/5 lg:w-3/5 flex flex-col bg-zinc-900 rounded-md'>
                <div className='w-full flex flex-col md:flex-row'>
                    <div className='md:w-2/3 pt-10 md:pt-20 flex flex-col'>
                    <div className='pt-4 pl-4 font-mono font-bold text-4xl sm:text-4xl md:text-5xl text-gray-300'>Jesús</div>
                    <div className='pt-4 pl-4 font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-gray-300'>Carrasco Yelo</div>
                    <div className='ml-2 pt-12 flex flex-col p-4 pb-10 font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-green-500'>Full Stack Developer
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 mt-24 md:mt-18 flex justify-center'>
                        <div className='flex justify-center items-center w-34 h-48'>
                            <img src={fotocv} alt="Foto CV" className='w-full h-full border-4 border-green-300 object-cover rounded-full' />
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row md:flex-col sm:flex-col xs:flex-col md:justify-center sm:justify-center xs:justify-center p-6 '>
                    <button className='w-1/4 lg:w-1/4 md:w-full sm:w-full xs:w-3/4 m-auto mt- p-2 text-base font-playwrite rounded-lg border border-transparent hover:border-2 hover:border-green-700 bg-zinc-800 text-gray-400'>skills</button>
                    <div className='w-full lg:w-3/4 md:w-3/4 sm:w-full xs:w-full flex flex-row pr-4 sm:p-4 xs:p-4 xl:justify-end lg:justify-end md:justify-center sm:justify-center xs:justify-center'>
                        <img className='m-auto xl:ml-52 sm:m-auto xs:m-auto scale-50' src={mail}></img>
                        <img className='m-auto sm:m-auto xs:m-auto scale-50' src={linkedin}></img>
                        <img className='m-auto sm:m-auto xs:m-auto scale-50' src={cv}></img>
                        <img className='m-auto sm:m-auto xs:m-auto' src={github}></img>

                    </div>
                </div>
               
            </div>
        </div>

    )
}
