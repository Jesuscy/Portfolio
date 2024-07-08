import React from 'react'
import '../index.css'
import { Project } from './Project'


export const Proyectos = () => {
  return (
    <div className="w-full flex justify-center xs:p-8 sm:p-8 md:p-12 lg:p-16 xl:p-20">
    <div className='w-full flex flex-col p-10 sm:w-4/5 md:w-4/5 lg:w-4/5 rounded-md'>
        <div className='md:w-full text-center pt-10 md:pt-10 flex flex-col'>
            <div className='flex flex-col font-playwrite font-bold text-4xl sm:text-3xl md:text-5xl border-b-2 p-5 border-neutral-700  text-green-500'>
                Proyectos
            </div>
        </div>
        <div className="w-full flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col">
            <Project/>
            <Project/>
            <Project/>

        </div>
    </div>
</div>  )
}

