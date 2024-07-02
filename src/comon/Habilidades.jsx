import React from 'react'
import { Skill } from './Skill'
import html from '../../src/img/htmIcon.png'
import css from '../../src/img/cssIcon.png'
import tailwind from '../../src/img/Tailwind_CSS_Logo.svg.png'
import bootstrap from '../../src/img/icons8-bootstrap-48.png'
import react from '../../src/img/reactIcon.png'


import js from '../../src/img/jsIcon.png'
import csharp from '../../src/img/icons8-c-48.png'
import java from '../../src/img/icons8-java-48.png'
import node from '../../src/img/nodeJsIcon.png'
import express from '../../src/img/Express.png'
import mongo from '../../src/img/mongoIcon.png'
import sql from '../../src/img/icons8-sql-64.png'


export const Habilidades = (props) => {
    return (
        <div className="w-full flex justify-center xs:p-8 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className='w-full flex flex-col p-10 sm:w-4/5 md:w-4/5 lg:w-4/5 rounded-md'>
                <div className='md:w-full text-center pt-10 md:pt-10 flex flex-col'>
                    <div className='flex flex-col font-playwrite font-bold text-4xl sm:text-3xl md:text-5xl border-b-2 p-5 border-neutral-700  text-green-500'>
                        Skills
                    </div>
                </div>
                <div className='w-full flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center md:justify-center sm:justify-center xs:justify-center overflow-hidden'>

                    <div className='flex flex-col lg:w-2/5 md:w-4/5 sm:w-4/5 xs:w-full  md:text-center md:mt-20 p-4 m-auto mt-10 justify-center font-playwrite text-2xl bg-slate-800 rounded-lg text-gray-300 '>
                        <div className='border-b-2 border-gray-900 pb-2'>Frontend:</div>
                        <div className='w-full flex  lg:flex-row md:flex-row sm:flex-row xs:flex-col flex-wrap pt-4 justify-center'>
                            <Skill icon={html} name="HTML" />
                            <Skill icon={css} name="CSS" />
                            <Skill icon={react} name="React" />
                            <Skill icon={tailwind} name="Tailwind" />
                            <Skill icon={bootstrap} name="Bootstrap" />

                        </div>
                    </div>

                    <div className='flex flex-col lg:w-2/5 md:w-4/5 sm:w-4/5 xs:w-full md:text-center mt-10 md:mt-20 p-4 m-auto justify-center  font-playwrite text-2xl bg-slate-800 rounded-lg text-gray-300 '>
                    <div className='border-b-2 border-gray-900 pb-2'>Backend:</div>
                    <div className='w-full flex flex-row flex-wrap pt-4 justify-center'>
                            <Skill icon={node} name="NodeJS" />
                            <Skill icon={express} name="Express" />
                            <Skill icon={js} name="JavaScript" />
                            <Skill icon={java} name="Java" /> 
                            <Skill icon={csharp} name="C#" /> 
                            <Skill icon={mongo} name="MongoDB" />
                            <Skill icon={sql} name="SQL DB" />

                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
