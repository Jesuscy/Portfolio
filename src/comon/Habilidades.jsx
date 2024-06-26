import React from 'react'
import { Skill } from './Skill'

export const Habilidades = () => {
    return (
        <div className="w-full flex justify-center xs:p-8 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className='w-full flex flex-col p-10 sm:w-4/5 md:w-4/5 lg:w-4/5 rounded-md'>
                <div className='md:w-2/3 pt-10 md:pt-10 flex flex-col'>
                    <div className='flex flex-col font-mono font-bold text-4xl sm:text-3xl md:text-5xl  text-fuchsia-800'>
                        Skills
                    </div>
                </div>
                <div className='w-full flex lg:flex-row md:flex-row sm:flex-col xs:flex-col md:items-start sm:items-center xs:items-center'>

                    <div className='w-1/2 flex flex-col sm:w-full xs:w-full md:text-left  mt-10 md:mt-20 justify-center font-mono font-bold text-2xl text-gray-300'>
                        Frontend:

                        <Skill />

                    </div>

                    <div className='w-1/2 flex flex-col sm:w-full xs:w-full md:text-left sm:text-center xs:text-center mt-10 md:mt-20 justify-center font-mono font-bold text-2xl text-gray-300'>
                        Backend:
                        <Skill />


                    </div>


                </div>
            </div>
        </div>
    )
}
