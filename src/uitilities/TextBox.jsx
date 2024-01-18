import React from 'react'
import { FaSearch } from "react-icons/fa";


const TextBox = (props) => {
  return (

    <div className='relative flex w-full mt-2 items-center justify-center p-3'>
      {props.icon}
      <input type="text" name="textbox" placeholder={props.text} className='w-full p-2 pl-10 rounded-lg bg-slate-600 text-white focus: outline-none' />
    </div>
  );
};

export default TextBox