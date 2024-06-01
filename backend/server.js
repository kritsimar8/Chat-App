import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./Routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongo.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());


// app.get("/",(req,res)=>{
//     res.send("Hello World!");
// })

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRoutes);


app.listen(PORT,()=> {
connectToMongoDB();    
console.log(`server port running on prot ${PORT}`)});