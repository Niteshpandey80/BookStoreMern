import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";

const FreeBooks = () => {
  const [book, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-[#DA07B9]/10 to-white">
      <h1 className="text-2xl md:text-3xl font-bold ml-6 md:ml-20 mt-5 text-[#8681FF]">
        Free Offered Courses
      </h1>
      <p className="ml-6 md:ml-20 text-base md:text-lg text-gray-700 max-w-3xl">
        Explore our handpicked free courses designed to help you learn and grow with ease!
      </p>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10 pb-10"
      >
        {book
          .filter((item) => item.category === "free")
          .map((item) => (
            <SwiperSlide key={item._id}>
              <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden border border-[#8681FF]/40 hover:shadow-2xl transition-all duration-500 w-[90%] mx-auto h-[420px] flex flex-col group">
                
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] object-cover rounded-t-2xl transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
                  <span className="absolute bottom-3 left-3 bg-[#8681FF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Free Course
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-lg font-bold text-[#8681FF] line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600">By {item.name}</p>
                    <p className="text-sm mt-1">
                      Category:{" "}
                      <span className="font-semibold text-[#8681FF]">
                        {item.category}
                      </span>
                    </p>
                  </div>
                  <button className="mt-3 w-full py-2 bg-[#8681FF] text-white rounded-lg font-semibold hover:bg-[#b30694] transition">
                    Start Learning
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FreeBooks;
