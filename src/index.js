import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config();

console.log(process.env.MONGODB_URI);

connectDB()
.then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
}

).catch((err)=>{
    console.log("MONGODB connnection FAILED !!!", err);
});

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