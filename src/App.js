import "./App.css";
import Booksearch from "./Components/Booksearch.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Mybookshelf from "./Components/Mybookshelf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem("book")) {
        setResults(JSON.parse(localStorage.getItem("book")));
        localStorage.setItem(
          "book",
          JSON.stringify(JSON.parse(localStorage.getItem("book")))
        );
      }
    } catch (error) {
      localStorage.clear();
    }
  }, []);

  const add_books = (book) => {
    var stored = results;
    if (stored.length == 0) {
      stored.push(book);
      localStorage.setItem("book", JSON.stringify(stored));
    } else if (stored.length != 0) {
      var res = JSON.parse(localStorage.getItem("book"));
      res.push(book);
      localStorage.setItem("book", JSON.stringify(res));
    }
    toast.success("Book is added Successfully!!", {
      transition: Flip,
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Booksearch add_books={add_books} />}
          ></Route>
          <Route exact path="/Mybookshelf" element={<Mybookshelf />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
