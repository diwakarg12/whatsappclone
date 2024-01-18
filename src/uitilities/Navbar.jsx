import React from 'react'
import profile from "../assets/images/profile.png";

const Navbar = ({name,icon1,icon2,icon3}) => {
  return (
    <nav className='bg-slate-600 flex items-center justify-between p-2 pl-8'>
        <div className='w-2/3 flex items-center justify-start'>
        <button title='profile'><img src={profile} alt="Profile" className='w-8 h-8 rounded-full' /></button>
        <h4 className='text-white font-bold text-lg ml-2'>{name}</h4>
        </div>
        <div className='flex items-center justify-end w-1/3 pr-4'>
        <button type="button" title='Comunity' className='text-xl font-semibold text-green-400 p-2'>
          {icon1}
        </button>
        <button type="button" title='status' className='text-xl font-semibold text-green-400 p-2'>
          {icon2}
        </button>
        <button type="button" title='add user' className='text-xl font-semibold text-green-400 p-2 '>
          {icon3}
        </button>
        </div>
    </nav>
  )
}

export default Navbar