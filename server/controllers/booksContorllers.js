const Book = require('../models/bookModel');

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("❌ Error fetching books:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Add a new book
const addBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const newBook = new Book({ name, price, category, image, title });
    await newBook.save();

    res.status(201).json({ message: "✅ Book added successfully", newBook });
  } catch (error) {
    console.error("❌ Error adding book:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getBooks, addBook };
