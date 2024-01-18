import Navbar from './uitilities/Navbar'
import TextBox from './uitilities/TextBox'
import Chats from './components/Chats'
import { MdOutlineAddComment } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import ChatArea from './components/ChatArea';




function App() {

  return (
    <>
      <div className="flex p-5 overflow-y-hidden h-screen">
      <div className="w-1/3 bg-slate-800 pb-1 h-full overflow-y-hidden border-r">
        <Navbar 
        name={""}
        icon1={<MdGroups style={{color: "white", fontSize: "2rem"}} />} 
        icon2={<TbHistoryToggle style={{color: "white", fontSize: "1.8rem"}} />}
        icon3={<MdOutlineAddComment style={{color: "white", fontSize: "1.5rem"}} />}
        />
        <TextBox
        text="Search for Someone.." 
        icon = {<FaSearch title='search' style={{ color: 'darkgrey', fontSize: '1rem' }} className='absolute left-6 top-1/2 transform -translate-y-1/2' />}      
        />
        <Chats />
      </div>
      <div className="w-2/3 bg-slate-800 h-full">
        <div className='h-full flex flex-col justify-between'>
          <Navbar
          name={"Name"}
          icon1={<FaSearch style={{color: "white", fontSize: "1.4rem"}}/>}
          icon2={<MdOutlineVideoCall style={{color: "white", fontSize: "2rem"}}/>}
          icon3={<MdAddCall style={{color: "white", fontSize: "1.6rem"}}/>}
          />
          <ChatArea />
          <TextBox
          text={"Write Something to send.."}
          icon = {<MdOutlineEmojiEmotions title='Emoji' style={{ color: 'darkgrey', fontSize: '1rem' }} className='absolute left-6 top-1/2 transform -translate-y-1/2' />}
          />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
