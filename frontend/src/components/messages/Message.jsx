const Message =()=>{
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-5 rounded-full">
                    <img src={"https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"} alt="tailwind css chat bubble" />

                </div>

            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is upp?</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
        </div>
    )
}
export default Message 