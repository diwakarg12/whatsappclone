import React from 'react'
import profile from "../assets/images/profile.png";
import { MdDelete } from "react-icons/md";

const Chat = () => {
  return (
    <div className='relative p-4'>
    <div className='flex items-center '>
      <img src={profile} alt="profile" className='w-12 h-12 rounded-full bg-white' />
      <div className='block ml-2 text-slate-100'>
        <h3 className=''>Diwakar</h3>
        <p>Software Developer</p>
      </div>
      <button title='delete'><MdDelete className="absolute right-5 top-4 text-white font-extrabold text-3xl" /></button>
    </div>
    <hr className="border-t border-slate-700 w-10/12 mt-4 absolute right-2 " />
    </div>
  )
}

export default Chat