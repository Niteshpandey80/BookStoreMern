const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bookRoute = require('./routes/bookRoutes.js')
const userRoute = require('./routes/userRoutes.js')

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ; 
const MONG = process.env.MongoDBURI ; 

mongoose.connect(MONG)
.then(() => console.log("✅ Connected to MongoDB")).catch((err) => console.error("❌ MongoDB connection error:", err));

//defining routes 
app.use('/book' , bookRoute)
app.use('/user' , userRoute)

app.listen(PORT , ()=>{
    console.log(`Runing on ${PORT}`); 
})