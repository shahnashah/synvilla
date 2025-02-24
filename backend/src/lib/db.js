// import mongoose from "mongoose";

// export const connectDB=async ()=>{
//     try{
//         const conn=await mongoose.connect("mongodb://127.0.0.1:27017/kucvi")
//         console.log(`MONGODB CONNECTED : ${conn.connection.host}`);
//     }catch(error)
//     {
//         console.log("MONGODB connection Error :",error);
//     }
// };




import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export {connectDB} ;

