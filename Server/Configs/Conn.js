import mongoose, { Mongoose } from "mongoose";

export const DBConn = async()=>{
    const DB_URI = process.env.MDB_URL;
    await mongoose.connect(DB_URI).then(()=>console.log("connected to the db"))
} 