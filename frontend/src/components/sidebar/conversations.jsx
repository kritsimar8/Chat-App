import Conversation from "./conversation";

const Conversations=()=>{
    return(
        <div className=" no-scrollbar py-2 flex flex-col overflow-auto mb-10 ">
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>

        </div>
    );
};

export default Conversations;