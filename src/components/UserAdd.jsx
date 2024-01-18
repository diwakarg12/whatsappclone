import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FcAddImage } from "react-icons/fc";

const UserAdd = ({ onDataFromChild, hideForm }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [content, setContent] = useState("");
  // const [profile, setProfile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || number === "" || content === "") {
      alert("Please fill out all the fields");
      return;
    }

    const userData = {
      id: Date.now(),
      name: name,
      number: number,
      content: content,
      profile: "./assets/images/profileIcon.jpg",
    };
    onDataFromChild(userData);

    setName("");
    setNumber("");
    setContent("");
  };

  return (
    <div className="bg-slate-600 w-1/2 p-4 rounded-lg flex flex-col items-center justify-center absolute left-1/4 top-1/4 ">
      <button onClick={hideForm}>
        <ImCancelCircle className="absolute top-2 right-2 text-3xl text-white font-bold" />
      </button>
      <h2 className="text-white text-2xl font-bold ">Add User</h2>
      <form className="flex flex-col items-center justify-center w-full pl-10 pr-10 ">
        <input
          type="text"
          className="w-full p-1 m-2 rounded-sm text-slate-600 text-lg placeholder:text-slate-600 focus:outline-none"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-1 m-2 rounded-sm text-lg text-slate-600 placeholder:text-slate-600 focus:outline-none "
          placeholder="Enter Phone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-1 m-2 mb-12 rounded-sm text-lg text-slate-600 placeholder:text-slate-600 focus:outline-none"
          placeholder="Enter Occupation"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          id="file"
          className="hidden"
          // onChange={handleImageChange}
        />
        <label
          htmlFor="file"
          className="absolute left-14 bottom-4 cursor-pointer"
        >
          <FcAddImage className="text-5xl" />
        </label>
        <button
          className="bg-green-500 text-white text-lg font-md text-center p-2 rounded-lg absolute right-14 bottom-4"
          onClick={handleSubmit}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserAdd;
