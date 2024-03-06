// require('dotenv').config({path: './env'})


import dotenv from "dotenv"
import connectDB from './db/index.js';
import express from 'express'
const app = express();
const port = process.env.PORT || 8000

dotenv.config({
    path: './env'
})
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });


/*
import express from "express"
const app = express()

;( async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listning on prot ${process.env.PORT}`);
        })
    } catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()
*/

