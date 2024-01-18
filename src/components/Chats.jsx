import React, { useState } from "react";
import "../Style.css";
import Chat from "./Chat";

const Chats = ({ user }) => {
  return (
    <div className="h-5/6 overflow-y-auto scrollbar">
      {user?.map((item) => (
        <Chat
          key={item.id}
          profile={item.profile}
          name={item.name}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Chats;
