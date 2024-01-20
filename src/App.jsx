import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Chats from "./components/Chats";
import { MdOutlineAddComment } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiChatSmile3Fill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import ChatArea from "./components/ChatArea";
import UserAdd from "./components/UserAdd";
import { useState, useEffect } from "react";
import Emojies from "./components/Emojies";

const dataToDisplay = [
  {
    id: 1,
    name: "Diwakar",
    content: "Front-End Developer",
    mobile: 7488081301,
    profile: "./assets/images/profileIcon.jpg",
  },
];
function App() {
  const [user, setUser] = useState(dataToDisplay);
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleEmoji, setToggleEmoji] = useState(false);

  const toggleFormHandler = () => {
    setToggleForm((prevState) => !prevState);
  };
  // const toggleEmojiHandler = () => {
  //   setToggleEmoji((prevState) => !prevState);
  // };

  const hnadleDelete = (id) => {
    setUser(user.filter((e) => e.id !== id));
  };

  return (
    <div
      className="bg-whatsappgreen h-32 w-screen absolute "
      style={{ zIndex: "-1" }}
    >
      <div className="flex p-5 overflow-y-hidden h-screen">
        {/* sidesection */}
        <div className="w-1/3 bg-white pb-1 h-full overflow-y-hidden border-r">
          <Navbar
            showForm={toggleFormHandler}
            iconStyle={"flex items-center justify-between w-2/3 pr-8"}
            icon1={<MdGroups style={{ color: "#54656f", fontSize: "2rem" }} />}
            icon2={
              <TbHistoryToggle
                style={{ color: "#54656f", fontSize: "1.8rem" }}
              />
            }
            icon3={
              <RiChatSmile3Fill
                style={{ color: "#54656f", fontSize: "1.5rem" }}
              />
            }
            icon4={
              <MdOutlineAddComment
                style={{ color: "#54656f", fontSize: "1.5rem" }}
              />
            }
            icon5={
              <CiMenuKebab
                style={{
                  color: "#54656f",
                  fontSize: "1.5rem",
                  fontWeight: "900",
                }}
              />
            }
          />
          <TextBox
            mainStyle={
              "relative flex w-full mt-2 items-center justify-center p-3"
            }
            style={
              "w-full p-2 pl-10 rounded-lg bg-[#dee0e3] text-black focus: outline-none"
            }
            text={"Search for Someone.."}
            icon1={
              <FaSearch
                title="search"
                style={{ color: "darkgrey", fontSize: "1rem" }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2"
              />
            }
            icon3={
              <HiOutlineMenuAlt1
                style={{ color: "darkgrey", fontSize: "2rem" }}
                className="ml-2"
              />
            }
          />
          <hr className="border-t border-[#d7dadb] " />
          <Chats user={user} deleteChat={hnadleDelete} />
        </div>
        {/* sidesection End */}

        {/* mainSection start */}
        <div className="w-2/3 h-full relative">
          <div className="h-full flex flex-col justify-between">
            <Navbar
              name={"Name"}
              iconStyle={"flex items-center justify-end w-2/3 pr-8"}
              icon1={
                <FaSearch
                  style={{
                    color: "#54656f",
                    fontSize: "1.4rem",
                    marginRight: "2rem",
                  }}
                />
              }
              icon2={
                <CiMenuKebab
                  style={{
                    color: "#54656f",
                    fontSize: "1.5rem",
                    fontWeight: "900",
                  }}
                />
              }
            />
            {toggleForm ? (
              <UserAdd
                // onDataFromChild={handleDataFromChild}
                onDataFromChild={setUser}
                hideForm={toggleFormHandler}
              />
            ) : (
              ""
            )}
            {toggleEmoji && <Emojies />}
            <ChatArea />
            <TextBox
              mainStyle={
                "relative bg-[#dee0e3] flex w-full items-center justify-center p-1"
              }
              style={
                "w-full p-3 rounded-lg bg-slate-100 text-black focus: outline-none"
              }
              text={"Write Something to send.."}
              icon1={
                <MdOutlineEmojiEmotions
                  title="Emoji"
                  className="text-#54656f text-[1.9rem] cursor-pointer ml-4"
                  onClick={() => setToggleEmoji(!toggleEmoji)}
                />
              }
              icon2={
                <IoMdAdd
                  title="Emoji"
                  className="text-#54656f text-[1.9rem] cursor-pointer ml-2 mr-2"
                />
              }
              icon3={
                <FaMicrophone
                  style={{ color: "#54656f", fontSize: "1.3rem" }}
                  className="ml-2"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
