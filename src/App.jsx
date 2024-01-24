import React from "react";

// Importing components and icons
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Chats from "./components/Chats";
import { MdOutlineAddComment } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
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

// Sample user data to be displayed when loading.
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
  // State variables using useState hook
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [titleName, setTitleName] = useState({
    name: "user",
    profile: "./assets/images/profileIcon.jpg",
  });
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [chats, setChats] = useState({});

  const storedUserData = localStorage.getItem("userData");

  const localStoredData = storedUserData ? JSON.parse(storedUserData) : [];
  const [user, setUser] = useState(localStoredData);

  // Update local storage whenever the user state changes
  useEffect(() => {
    try {
      localStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.error("Error storing data in local storage:", error);
    }
  }, [user]);


  // Function to handle user click and display user details in the Navbar
  const handleNameClick = (id) => {
    setSelectedUserId(id);
    if (!chats[id]) {
      setChats((prevChats) => ({
        ...prevChats,
        [id]: [],
      }));
    }
    let data = user.find((item) => item.id === id);
    setTitleName({
      name: data.name,
      profile: data.profile,
    });
    // console.log(id);
  };

  // useEffect hook to reset the titleName when user data changes
  useEffect(() => {
    setTitleName({
      name: "user",
      profile: "./assets/images/profileIcon.jpg",
    });
  }, [user]);

  // Function to toggle the user form display
  const toggleFormHandler = () => {
    setToggleForm((prevState) => !prevState);
  };

  // Function to handle chat deletion
  const hnadleDelete = (id) => {
    setUser(user.filter((e) => e.id !== id));
    setSelectedUserId(null);
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filtering users based on search input
  const filteredUser = user.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (selectedUserId && messageInput.trim() !== "") {
      const newMessage = {
        sender: titleName.name,
        content: messageInput,
      };

      setChats((prevChats) => ({
        ...prevChats,
        [selectedUserId]: [...prevChats[selectedUserId], newMessage],
      }));

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageInput(""); // Clear the message input after sending
    }
  };

  // Function to handle input change in the message box
  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const sideNavImg = { name: "", profile: "./assets/images/profileIcon.jpg" }

  // Main component rendering
  return (
    <div
      className="bg-whatsappgreen h-32 w-screen absolute "
      style={{ zIndex: "-1" }}
    >
      <div className="flex p-5 overflow-y-hidden h-screen">
        {/* Sidebar Section */}
        <div className="w-1/3 bg-white pb-1 h-full overflow-y-hidden border-r">
          {/* navigationbar for sidebar section */}
          <Navbar
            title={sideNavImg}
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
          {/* Search bar component */}
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
            onInputChange={handleSearchInputChange}
          />
          <hr className="border-t border-[#d7dadb] " />
          {/* Chats section to store all the users details */}
          <Chats
            userShow={filteredUser}
            deleteChat={hnadleDelete}
            nameOnTitle={handleNameClick}
          />
        </div>
        {/* Sidebar Section End */}

        {/* Main Section */}
        <div className="w-2/3 h-full relative">
          {toggleForm && (
            <UserAdd onDataFromChild={setUser} hideForm={toggleFormHandler} />
          )}
          {selectedUserId ? <div className="h-full flex flex-col justify-between">
            {/* Navbar for user Details to which user is chatting*/}
            {selectedUserId && <Navbar
              title={titleName}
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
            />}
            {/* popup form to add user into Chats section.  */}
            {/* popup emoji section to use emoji  */}
            {toggleEmoji && <Emojies />}
            {/* Chat Areat to display sent and receive message */}
            {selectedUserId && <ChatArea messages={messages} />}
            {/* Textbox to send message to other user. */}
            {selectedUserId && <TextBox
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
              onInputChange={handleInputChange}
              sendMessage={handleSendMessage}
              messageInput={messageInput}
            />}
          </div> : <div className="h-full w-full">
            <img src="/assets/images/mainbg.png" className="w-full h-full" alt="" />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
