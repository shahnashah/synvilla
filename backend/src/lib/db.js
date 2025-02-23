import mongoose from "mongoose";

export const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb://127.0.0.1:27017/kucvi")
        console.log(`MONGODB CONNECTED : ${conn.connection.host}`);
    }catch(error)
    {
        console.log("MONGODB connection Error :",error);
    }
};



