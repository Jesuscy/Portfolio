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
                    <div className='flex flex-col font-mono font-bold text-4xl sm:text-3xl md:text-5xl border-b-2 p-5 border-neutral-700  text-green-500'>
                        SKILLS
                    </div>
                </div>
                <div className='w-full flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center md:justify-center sm:justify-center xs:justify-center overflow-hidden'>

                    <div className='flex flex-col lg:w-2/5 md:w-4/5 sm:w-4/5 xs:w-full md:text-center md:mt-20 p-4 m-auto mt-10 justify-center font-mono font-bold text-2xl bg-slate-700 rounded-lg text-gray-300 '>
                        <div className='border-b-2 border-gray-800'>Frontend:</div>
                        <div className='w-full flex flex-row flex-wrap pt-4 justify-center'>
                            <Skill icon={html} name="HTML" />
                            <Skill icon={css} name="CSS" />
                            <Skill icon={js} name="JavaScript" />
                            <Skill icon={react} name="React" />
                        </div>
                    </div>

                    <div className='flex flex-col lg:w-2/5 md:w-4/5 sm:w-4/5 xs:w-full md:text-center mt-10 md:mt-20 p-4 m-auto justify-center font-mono font-bold text-2xl bg-slate-700 rounded-lg text-stone-900 '>
                    <div className='border-b-2 border-gray-800'>Frontend:</div>
                    <div className='w-full flex flex-row flex-wrap pt-4 justify-center'>
                            <Skill icon={node} name="HTML" />
                            <Skill icon={js} name="CSS" />
                            <Skill icon={mongo} name="JavaScript" />
                            <Skill icon={react} name="React" />
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
