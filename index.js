import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js"

import dotenv from "dotenv";
dotenv.config();

const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tqvbcgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoURI).then(
    ()=>{
        console.log("Connected to the mongoDB cluster")
    }
).catch(
    (error)=>{
        console.log("Connection error ",error)
    }
)

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json())
app.use("/students",studentRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

