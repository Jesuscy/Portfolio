import React from 'react'

export const Skill = ({icon, name}) => {
  return (
  
      <>
      <div className="w-1/3 sm:w-1/3 xs:w-full flex flex-row text-balance font-lato cursor-pointer border-2 border-gray-400 bg-slate-700 hover:bg-slate-800 rounded-full items-center m-2">

        <div className="w-1/3 m-auto scale-90">
          <img src={icon} className='rounded-xl m-auto scale-90 p-2'></img>
        </div>
        <div className="w-2/3 text-sm text-center ">
          {name}
        </div>
      </div>
      </>

  )
}
