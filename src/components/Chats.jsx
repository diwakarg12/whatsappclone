import "../Style.css";
import Chat from "./Chat";
import { MdDelete } from "react-icons/md";

const Chats = ({ userShow, deleteChat, nameOnTitle }) => {
  return (
    <div className="h-5/6 overflow-y-auto scrollbar">
      {userShow?.map((item) => (
        //mapping over userShowData which comes as prop and display each user to the Chats section.
        <Chat
          key={item.id}
          profile={item.profile}
          name={item.name}
          content={item.content}
          icon={
            <MdDelete
              className="absolute right-5 top-4 font-extrabold text-3xl cursor-pointer hover:text-red-600"
              onClick={() => {
                deleteChat(item.id);
              }}
            />
          }
          onClick={() => nameOnTitle(item.id)}
        />
      ))}
    </div>
  );
};

export default Chats;
