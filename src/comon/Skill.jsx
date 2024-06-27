import React from 'react'
import fotocv from '../../src/img/fotocv.jpg'
import reactIcon from '../../src/img/reactIcon.png'

export const Skill = (props) => {
  return (
    <div className='w-4/5  flex xl:flex-row md:flex-row sm:flex-row xs:flex-col mt-5 rounded-md bg-zinc-900 border-r-4 border-fuchsia-800 cursor-pointer'>
      <div className='w-2/3 flex flex-col p-4 '>
        <div className='w-full text-start text-gray-300 font-mono font-bold'>
          React
        </div>
        <div className='w-full text-start text-sm text-gray-300 font-mono font-bold'>
          Desarrollo web React
        </div>
      </div>
      <div className='w-1/3 overflow-hidden rounded-md p-3 content-center '>
        <img src={reactIcon}></img>
      </div>
    </div>

  )
}
