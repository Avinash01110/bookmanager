import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Green color : #003d29

const booksearch = ({ add_books }) => {
  const [search, setSearch] = useState();

  const [result, setResult] = useState([]);

  useEffect(() => {}, []);

  const Update_results = async () => {
    await axios
      .get(`https://openlibrary.org/search.json?q=${search}&limit=10&page=1`)
      .then((response) => {
        setResult(response.data.docs);
      });
  };

  const handleOnChange = async (e) => {
    if (e.target.name == "search") {
      setSearch(e.target.value);
    }
    Update_results();
    console.log(result);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <nav className="pt-4 flex flex-col gap-y-4 sm:flex-row h-auto w-full justify-between items-center">
          <ul className="flex flex-col gap-4 w-full justify-center items-center">
            <h2 className="font-bold text-xl">Search by Book name :</h2>
            <input
              onChange={handleOnChange}
              className="pl-4 pb-1 h-8 w-72 rounded-full font-light border-[#003d29] border-2"
              type="search"
              name="search"
              id="search"
              placeholder="Enter bookname for search"
            />
          </ul>
          <ul className="flex justify-center items-center pb-8 pr-10">
            <Link to={"/Mybookshelf"}>
              <button className="flex justify-center items-center rounded-full h-10 w-32 bg-[#003d29] font-semibold text-base border-2 border-[#003d29] relative overflow-hidden text-white transition ease-in-out duration-500 hover:scale-90">
                My Bookshelf
              </button>
            </Link>
          </ul>
        </nav>
      </div>

      <div className="mt-14 h-auto w-full flex justify-center">
        <div className="md:px-12 lg:px-20 xl:px-40 2xl:px-56 pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {result &&
            result.map((element) => {
              return (
                <div
                  key={element.key}
                  className="border-2 border-[#003d29] py-6 px-6 flex flex-col gap-y-8 h-72 w-72 bg-white rounded-lg"
                >
                  <div className="flex flex-row gap-x-2">
                    <h3 className="font-bold">Book Title:</h3>
                    <span className="font-semibold">
                      {element.title.slice(0, 50)}
                    </span>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <h3 className="font-bold">Edition count:</h3>
                    <span className="font-semibold">
                      {element.edition_count}
                    </span>
                  </div>
                  <div className="pt-5 flex flex-row justify-end items-end h-full">
                    <button
                      onClick={() => {
                        add_books(element);
                      }}
                      className="flex justify-center items-center rounded-full h-10 w-60 bg-[#003d29] font-semibold text-base border-2 border-[#003d29] relative overfloow-hidden text-white transition ease-in-out duration-500 hover:scale-90"
                    >
                      Add to Bookshelf
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default booksearch;
