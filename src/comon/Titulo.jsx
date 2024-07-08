import React from 'react'
import { Skill } from './Skill'

export const Titulo = ({ img, center, formacion, desc, skills }) => {

    console.log(skills)
    return (
        <div className='flex flex-col w-full items-center p-2'>

            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col sm:text-center xs:text-center sm:justify-center xs:justify-center w-full p-2'>
                <div className='w-1/4 flex m-auto p-2'>
                    <div className='w-full p-4 rounded-md bg-slate-600'>
                        <img src={img} className='rounded-sm scale-150' />
                    </div>
                </div>
                <div className='w-3/4 sm:w-full xs:w-full flex flex-col justify-center'>
                    <div className="w-full justify-center font-lato font-bold">{center}</div>
                    <div className="w-full justify-center font-lato font-bold">{formacion}</div>
                    <div className="w-full font-lato text-sm">{desc}</div>

                </div>


            </div>

            <div className='w-full flex flex-row flex-wrap justify-center p-4 border-2 border-transparent border-t-gray-900'>
            <div className='w-full flex flex-row flex-wrap justify-center p-2 rounded-md bg-slate-700 '>

                    {skills.map((skill, index) => (
                        <Skill key={index} icon={skill} />
                    ))}
                </div>
            </div>    


        </div>

    )
}
