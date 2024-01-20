import React, { useState } from "react";
import "../Style.css";
import Chat from "./Chat";
import { MdDelete } from "react-icons/md";

const Chats = ({ user, deleteChat }) => {
  return (
    <div className="h-5/6 overflow-y-auto scrollbar">
      {user?.map((item) => (
        <Chat
          key={item.id}
          profile={item.profile}
          name={item.name}
          content={item.content}
          icon={
            <MdDelete
              className="absolute right-5 top-4 font-extrabold text-3xl cursor-pointer hover:text-red-600"
              onClick={() => {
                deleteChat(item.id);
              }}
            />
          }
        />
      ))}
    </div>
  );
};

export default Chats;
