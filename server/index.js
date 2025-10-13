const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bookRoute = require('./routes/bookRoutes.js')

const app = express();

dotenv.config();
const PORT = process.env.PORT ; 
const MONG = process.env.MongoDBURI ; 

mongoose.connect(MONG)
.then(() => console.log("✅ Connected to MongoDB")).catch((err) => console.error("❌ MongoDB connection error:", err));

//defining routes 
app.use('/book' , bookRoute)

app.listen(PORT , ()=>{
    console.log(`Runing on ${PORT}`); 
})