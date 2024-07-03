import React from 'react'
import iesImg from '../../src/img/IesIcon.png'
import { Skill } from './Skill'
import react from '../../src/img/reactIcon.png'

export const Titulo = ({center, formacion, desc}) => {

  return (
    <div className='flex flex-col w-full items-center p-2'>

    <div className='flex flex-row w-full p-2'>
        <div className='w-1/4 flex m-auto p-2'>
        <div className='w-full p-4 rounded-md bg-slate-600'>
        <img src={iesImg} className='rounded-sm scale-150'/>
        </div>
        </div>
        <div className='w-3/4 flex flex-col justify-center'>
        <div className="w-full justify-center font-lato">IES Ingeniero de la Cierva</div>
            <div className="w-full justify-center font-lato">Grado Superior DAM</div>
            <div className="w-full font-lato text-sm">Desarrollo de Aplicaciones Multiplataforma</div>
           
        </div>
       

    </div>

    <div className='w-3/4 flex '>
            <Skill icon={react}/>
            <Skill icon={react}/>
            <Skill icon={react}/>
            <Skill icon={react}/>

            </div>
    </div>

)
}
