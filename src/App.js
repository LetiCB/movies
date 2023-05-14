import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { loadMoviesData } from "./redux/slices/movies/moviesSlice";
import axios from "axios";
import AboutHPPage from "./pages/AboutHP";



function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    loadMovies();
  }, []);

  // --- Movies ---  //
  function loadMovies() {
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        dispatch(loadMoviesData(response.data));
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/abouthp" element={<AboutHPPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
