import React from "react";
import { MdDelete } from "react-icons/md";

const Chat = ({ name, content, profile, id }) => {
  return (
    <div className="relative p-4" key={id}>
      <div className="flex items-center ">
        <img
          src={profile}
          alt="profile"
          className="w-12 h-12 rounded-full bg-white"
        />
        <div className="block ml-2 text-slate-100">
          <h3 className="">{name}</h3>
          <p>{content}</p>
        </div>
        <button title="delete">
          <MdDelete className="absolute right-5 top-4 text-white font-extrabold text-3xl hover:text-red-600" />
        </button>
      </div>
      <hr className="border-t border-slate-700 w-10/12 mt-4 absolute right-2 " />
    </div>
  );
};

export default Chat;
