import React from 'react'

export const Skill = ({ icon, name }) => {
  return (
    <>
      <div className={`w-1/3 sm:w-1/3 xs:w-full flex ${name ? 'flex-row' : 'justify-center'} text-balance font-lato cursor-pointer border-2 border-gray-400 bg-slate-700 hover:bg-slate-800 rounded-full items-center m-2`}>
        <div className={`m-auto ${name ? 'w-1/3' : 'w-full'} scale-90`}>
          <img src={icon} alt={`${name ? name : "skill"} icon`} className={`rounded-xl m-auto ${name ? 'scale-90 p-2' : 'scale-110 p-4'}`} />
        </div>
        {name && (
          <div className="w-2/3 text-sm text-center">
            {name}
          </div>
        )}
      </div>
    </>
  )
}