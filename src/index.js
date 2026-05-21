import dotenv from "dotenv";
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import express  from 'express';
import connectDB from "./db/index.js";

dotenv.config();
const app = express();

console.log(process.env.MONGODB_URI);

connectDB();

/*
( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", ()=>{
            console.log("ERROR", error);
            throw error;
        })

        app.listen( process.env.PORT, ()=>{
             console.log(`App is listening on ${process.env.PORT}`);
        } )

    } catch (error){ 
        console.log("ERROR: ", error);
         throw error;
    }
})()
*/