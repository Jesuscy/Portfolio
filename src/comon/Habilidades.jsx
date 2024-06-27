import React from 'react'
import { Skill } from './Skill'
import html from '../../src/img/htmIcon.png'
import css from '../../src/img/cssIcon.png'
import js from '../../src/img/jsIcon.png'
import react from '../../src/img/reactIcon.png'
import node from '../../src/img/nodeJsIcon.png'
import mongo from '../../src/img/mongoIcon.png'

export const Habilidades = (props) => {
    return (
        <div className="w-full flex justify-center xs:p-8 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className='w-full flex flex-col p-10 sm:w-4/5 md:w-4/5 lg:w-4/5 rounded-md'>
                <div className='md:w-full text-center pt-10 md:pt-10 flex flex-col'>
                    <div className='flex flex-col font-mono font-bold text-4xl sm:text-3xl md:text-5xl  text-fuchsia-800'>
                        SKILLS
                    </div>
                </div>
                <div className='w-full flex lg:flex-row md:flex-row sm:flex-col xs:flex-col md:items-start sm:items-center xs:items-center overflow-hidden'>

                    <div className='w-1/2 flex flex-col sm:w-full xs:w-full md:text-left mt-10 md:mt-20 p-4 justify-center font-mono font-bold text-2xl text-gray-300 '>
                        Frontend:
                        <div className='w-full flex flex-wrap justify-center'>
                            <Skill icon={html} name="HTML" />
                            <Skill icon={css} name="CSS" />
                            <Skill icon={js} name="JavaScript" />
                            <Skill icon={react} name="React" />
                        </div>
                    </div>

                    <div className='lg:w-1 md:w-1 h-full mt-20 rounded-lg bg-fuchsia-900'></div>

                    <div className='w-1/2 flex flex-col sm:w-full xs:w-full md:text-left sm:text-center xs:text-center mt-10 md:mt-20 p-4 justify-center font-mono font-bold text-2xl text-gray-300'>
                        Backend:
                        <div className='w-full flex flex-wrap justify-center'>
                            <Skill icon={node} name="Node.js" />
                            <Skill icon={mongo} name="MongoDB" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
