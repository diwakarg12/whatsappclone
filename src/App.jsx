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
import { FaMicrophone } from "react-icons/fa";
import ChatArea from "./components/ChatArea";
import UserAdd from "./components/UserAdd";
import { useState, useEffect } from "react";

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

  const toggleFormHandler = () => {
    setToggleForm((prevState) => !prevState);
  };

  const handleDataFromChild = (data) => {
    setUser((prevUser) => [...prevUser, data]);
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []); // Empty dependency array to run only once on mount

  // Update local storage whenever the user state changes
  useEffect(() => {
    try {
      localStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.error("Error storing data in local storage:", error);
    }
  }, [user]);

  return (
    <div className="bg-green-400 h-32">
      <div className="flex p-5 overflow-y-hidden h-screen">
        {/* sidesection */}
        <div className="w-1/3 bg-slate-800 pb-1 h-full overflow-y-hidden border-r">
          <Navbar
            showForm={toggleFormHandler}
            icon1={<MdGroups style={{ color: "white", fontSize: "2rem" }} />}
            icon2={
              <TbHistoryToggle style={{ color: "white", fontSize: "1.8rem" }} />
            }
            icon3={
              <MdOutlineAddComment
                style={{ color: "white", fontSize: "1.5rem" }}
              />
            }
          />
          <TextBox
            mainStyle={
              "relative flex w-full mt-2 items-center justify-center p-3"
            }
            style={
              "w-full p-2 pl-10 rounded-lg bg-slate-600 text-white focus: outline-none"
            }
            text={"Search for Someone.."}
            icon1={
              <FaSearch
                title="search"
                style={{ color: "darkgrey", fontSize: "1rem" }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2"
              />
            }
            icon2={
              <HiOutlineMenuAlt1
                style={{ color: "darkgrey", fontSize: "2rem" }}
                className="ml-2"
              />
            }
          />
          <Chats user={user} />
        </div>
        {/* sidesection End */}

        {/* mainSection start */}
        <div className="w-2/3 bg-slate-800 h-full relative">
          <div className="h-full flex flex-col justify-between">
            <Navbar
              name={"Name"}
              icon1={
                <FaSearch style={{ color: "white", fontSize: "1.4rem" }} />
              }
              icon2={
                <MdOutlineVideoCall
                  style={{ color: "white", fontSize: "2rem" }}
                />
              }
              icon3={
                <MdAddCall style={{ color: "white", fontSize: "1.6rem" }} />
              }
            />
            {toggleForm ? (
              <UserAdd
                onDataFromChild={handleDataFromChild}
                hideForm={toggleFormHandler}
              />
            ) : (
              ""
            )}
            <ChatArea />
            <TextBox
              mainStyle={"relative flex w-full items-center justify-center p-1"}
              style={
                "w-full p-4 pl-10 rounded-lg bg-slate-600 text-white focus: outline-none"
              }
              text={"Write Something to send.."}
              icon1={
                <MdOutlineEmojiEmotions
                  title="Emoji"
                  style={{ color: "darkgrey", fontSize: "1.5rem" }}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
              }
              icon2={
                <FaMicrophone
                  style={{ color: "darkgrey", fontSize: "1.5rem" }}
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
