import React from "react";
import "./App.css";
import Specialmovies from "./components/Specialmovies";
import Premieremonth from "./components/Premieremonth";
import MovieLength from "./components/length";
import Genre from "./components/Genre";
import Search from "./components/Search.jsx";
import Start from './routes/start'

function App() {
  return (
    <>
    
      <Start/>

      {/* <h3>Search</h3> */}
      <Search />

      {/* <h3>Genre</h3> */}
      {/* <Genre /> */}
      {/* <h2>Movie lenght </h2> */}
      {/* <MovieLength /> */}
      {/* <h2>Premiere month</h2> */}
      {/* <Premieremonth /> */}
      {/* <h2>charts</h2> */}
      {/* <Specialmovies /> */}
    </>
  );
}

export default App;
