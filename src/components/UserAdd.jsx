import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FcAddImage } from "react-icons/fc";

const UserAdd = ({ onDataFromChild, hideForm }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [content, setContent] = useState("");
  const [profile, setProfile] = useState("");

  function resizeImage(file, maxWidth) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxWidth) {
            width *= maxWidth / height;
            height = maxWidth;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }


  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const dataUrl = await resizeImage(file, 200); // Resize to 200 pixels wide
        setProfile(dataUrl);
      } catch (err) {
        console.error("Failed to resize image:", err);
      }
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    } else {
      setProfile(null);
    }
  };

  // function to handle data's when submitting form after filling and some validation on blank input box.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || number === "" || content === "" || profile === "") {
      alert("Please fill out all the fields");
      return;
    }

    // object definition which receive data from texboxes through state and set to one object.
    const userData = {
      id: Date.now(),
      name: name,
      number: number,
      content: content,
      profile: profile,
    };
    console.log(userData);
    //this reveives data from popup form and set data to main object throght state
    onDataFromChild((prevState) => [...prevState, userData]);

    //making textboxes empty after submitting the form.
    setName("");
    setNumber("");
    setContent("");
    setProfile("");
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
          minLength="5" maxLength="20"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-1 m-2 rounded-sm text-lg text-slate-600 placeholder:text-slate-600 focus:outline-none "
          placeholder="Enter Phone"
          minLength="10" maxLength="10"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-1 m-2 mb-12 rounded-sm text-lg text-slate-600 placeholder:text-slate-600 focus:outline-none"
          placeholder="Enter Occupation"
          minLength="5" maxLength="20"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" id="file" className="hidden" onChange={handleImageUpload} />
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
