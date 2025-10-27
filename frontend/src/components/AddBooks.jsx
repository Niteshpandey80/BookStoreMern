import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate(); // for redirecting
  const [book, setBook] = useState({
    title: "",
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/book/add", book);
      toast.success(res.data.message || "Book added successfully!");
      setBook({ title: "", name: "", price: "", category: "", image: "" });
      
      // Redirect to homepage after 1 second (to show toast)
      setTimeout(() => {
        navigate("/"); // go to home page
        window.location.reload(); // refresh to fetch updated data
      }, 1000);
      
    } catch (err) {
      console.error(err);
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-xl w-96 space-y-3"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Add New Book</h2>

        <input
          type="text"
          placeholder="Title"
          className="border px-3 py-2 w-full rounded"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Author Name"
          className="border px-3 py-2 w-full rounded"
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="border px-3 py-2 w-full rounded"
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
          required
        />

        <select
          className="border px-3 py-2 w-full rounded"
          value={book.category}
          onChange={(e) => setBook({ ...book, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          className="border px-3 py-2 w-full rounded"
          value={book.image}
          onChange={(e) => setBook({ ...book, image: e.target.value })}
        />

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded w-full transition-all"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
