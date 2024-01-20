import React from "react";

const Chat = ({ name, content, profile, id, icon }) => {
  return (
    <div className="relative p-4" key={id}>
      <div className="flex items-center ">
        <img
          src={profile}
          alt="profile"
          className="w-12 h-12 rounded-full bg-white"
        />
        <div className="block ml-2">
          <h3 className="">{name}</h3>
          <p>{content}</p>
        </div>
        {icon}
      </div>
      <hr className="border-t border-[#d7dadb] w-10/12 mt-4 absolute right-2 " />
    </div>
  );
};

export default Chat;
