import React from 'react'
import '../index.css'
import { Titulo } from './Titulo'

import IesIcon from '../../src/img/IesIcon.png'
import UpgradeIcon from '../../src/img/UpgradeIcon.png'
import html from '../../src/img/htmIcon.png'
import css from '../../src/img/cssIcon.png'
import react from '../../src/img/reactIcon.png'
import js from '../../src/img/jsIcon.png'
import node from '../../src/img/nodeJsIcon.png'
import express from '../../src/img/Express.png'
import mongo from '../../src/img/mongoIcon.png'
import csharp from '../../src/img/icons8-c-48.png'
import java from '../../src/img/icons8-java-48.png'
import sql from '../../src/img/icons8-sql-64.png'

export const Formacion = () => {
  return (
    <div className="w-full flex justify-center xs:p-8 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className='w-full flex flex-col p-10 sm:w-4/5 md:w-4/5 lg:w-4/5 rounded-md'>
                <div className='md:w-full text-center pt-10 md:pt-10 flex flex-col'>
                    <div className='flex flex-col font-playwrite font-bold text-4xl sm:text-3xl md:text-5xl border-b-2 p-5 border-neutral-700  text-green-500'>
                        Formación
                    </div>
                </div>
                <div className="w-full flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col">
                <div className='flex flex-col lg:w-2/5 md:w-4/5 sm:w-4/5 xs:w-full md:text-center mt-10 md:mt-20 p-4 m-auto justify-center  font-playwrite text-2xl bg-slate-800 rounded-lg text-gray-300 '>
                     <Titulo img={IesIcon} center={'IES ingeniero de la cierva'} formacion={'FP DAM'} desc={'Desarrollo de aplicaciones multiplataforma'} skills={[java,csharp,sql,html,css,js]}/>
                     
                </div>
                <div className='flex flex-col lg:w-2/5 md:w-4/5 sm:w-4/5 xs:w-full md:text-center mt-10 md:mt-20 p-4 m-auto justify-center  font-playwrite text-2xl bg-slate-800 rounded-lg text-gray-300 '>
                <Titulo img={UpgradeIcon} center={'Upgrade Hub'} formacion={'Master Full Stack'} desc={'Desarrollo de aplicaciones web FullStack'} skills={[html,css,react,js,node,express,mongo]}/>
                     
                </div>
                </div>
            </div>
        </div>)
}
