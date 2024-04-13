import React from "react";

const ChatArea = ({ messages }) => {
  return (
    <div
      className="h-full bg-[url(/assets/images/chat-bg.jpg)] p-4" //setting the background image to the chatArea.
      style={{
        overflowY: "auto",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {/* using map function to dislay all the sent message and using slice and reverse function to dislay the message in reverse order like whatsapp */}
      {messages
        ?.slice()
        .reverse()
        .map((message, index) => (
          <div key={index} className="" style={{ alignSelf: "flex-end" }}>
            <h3 className="text-white bg-green-700 pl-4 pr-4 pt-1 pb-1 m-2 rounded-lg font-bold">
              {message.content}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default ChatArea;
