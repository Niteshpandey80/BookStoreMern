const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const bookRoute = require('./routes/bookRoutes');
const userRoute = require('./routes/userRoutes'); // make sure this file exists

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MongoDBURI;

// MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
