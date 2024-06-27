import React from 'react'
import fotocv from '../../src/img/fotocv.jpg'
import reactIcon from '../../src/img/reactIcon.png'

export const Skill = ({icon, name}) => {
  return (
    <div className='w-3/5 flex flex-col xl:flex-col md:flex-col sm:flex-col xs:flex-col mt-5  rounded-md border-r-4 m-10 border-fuchsia-800 cursor-pointer'>
      <div className='w-full flex flex-col p-5 '>
        <div className='w-full text-center text-gray-200 lg:text-xl md:text-xl sm:text-xl xs:text-xs font-mono font-bold break-words'>
          {name}
        </div>
      
      </div>
      <div className='m-auto rounded-md pb-10'>
        <img src={icon}></img>
      </div>
    </div>

  )
}
