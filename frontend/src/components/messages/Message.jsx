import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message =({message})=>{
    console.log(message.message)
    const {authUser} = useAuthContext();
    const {selectedConversation}= useConversation()
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe ? 'chat-end':'chat-start';
    const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-red-700':"";
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-5 rounded-full">
                    <img src={profilePic} alt="tailwind css chat bubble" />

                </div>

            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
        </div>
    )
}
export default Message 