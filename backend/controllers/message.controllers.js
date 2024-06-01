import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async(req,res)=>{
    try{

        const {message}= req.body;
        const {id: receiverId}= req.params;
        // console.log(recieverId);
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        });
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }
        // console.log(receiverId,message);
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });
        // console.log(newMessage)

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        
        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);

    }catch(error){
        res.status(500).json({message:error.message});
        res.status(500).json({error:"Internal server error"});
    }
}

export const getMessages = async (req,res)=>{
    try{

        const {id:userToChatId}= req.params;
        const senderId= req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");

        res.status(200).json(conversation.messages);


    }catch(error){
        console.log("Error in getMessages controller:",error.messages);
        res.status(500).json({error:"Internal server server"});
    }
}