const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express();

dotenv.config();
const PORT = process.env.PORT ; 
const MONG = process.env.MongoDBURI ; 

mongoose.connect(MONG)
.then(() => console.log("✅ Connected to MongoDB")).catch((err) => console.error("❌ MongoDB connection error:", err));

app.get('/' , (req,res)=>{
    res.send("Hello Bro")
})
app.listen(PORT , ()=>{
    console.log(`Runing on ${PORT}`); 
})