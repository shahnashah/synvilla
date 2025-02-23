import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";
import {connectDB} from "./src/lib/db.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from './src/routes/productRoutes.js';









const app=express();
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use('/api/products', productRoutes);


// app.use("/api/messages", messageRoutes);
// app.get("/api/messages" ,messageRoutes);
app.get("/",(req,res)=>{
res.json({Message: "Server Connected and working properly"});
});


app.use((err,req,res,next)=>{
console.log(err.stack);
const StatusCode=err.statusCode ||500;
res.status(StatusCode).json({message: err.message});
})


const PORT=process.env.PORT ||5001;
app.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`,);
    connectDB();
});

