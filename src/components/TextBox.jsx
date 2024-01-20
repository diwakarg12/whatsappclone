import React from "react";
import { FaSearch } from "react-icons/fa";

const TextBox = (props) => {
  return (
    <div className={props.mainStyle}>
      {props.icon1}
      {props.icon2}
      <input
        type="text"
        name="textbox"
        placeholder={props.text}
        className={props.style}
      />
      <button>{props.icon3}</button>
    </div>
  );
};

export default TextBox;
