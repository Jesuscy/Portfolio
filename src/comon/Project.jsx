import React from 'react'
import fotocv from '../../src/img/fotocv.jpg'

export const Project = ({pname, pdesc, pimg}) => {
    return (
        <div className='xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mt-20 p-2 m-auto flex flex-col bg-slate-800 rounded-md '>
            <div className="w-full p-4"><img src={pimg} className='rounded-md'/></div>
            <div className="w-full p-4 text-center text-white font-bold">{pname}</div>
            <div className="w-3/4 flex flex-col bg-slate-700 rounded-md text-center m-auto p-4 text-white">{pdesc}</div>

        </div>
    )
}
