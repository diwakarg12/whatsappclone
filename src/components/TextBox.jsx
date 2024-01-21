import React from "react";
import { FaSearch } from "react-icons/fa";

const TextBox = (props) => {
  // function to send message when clicking enter key or button
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.sendMessage();
    }
  };
  return (
    <div className={props.mainStyle}>
      {props.icon1}
      {props.icon2}
      <input
        type="text"
        name="textbox"
        placeholder={props.text}
        className={props.style}
        onChange={props.onInputChange}
        onKeyDown={handleKeyDown}
        value={props.messageInput}
      />
      <button onClick={props.sendMessage}>{props.icon3}</button>
    </div>
  );
};

export default TextBox;
