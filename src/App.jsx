import "./App.css";
import Specialmovies from "./components/Specialmovies";
import Premieremonth from './components/Premieremonth'
import React from "react";
import MovieLength from "./components/length";
import Genre from "./components/Genre";

function App() {
  return (
    <>
      <h1>MovieFlex </h1>
      <h3>Genre</h3>
      <Genre/>
      <h2>Movie lenght </h2>
      <MovieLength/>
      <h2>Premiere month</h2>
      <Premieremonth />
      <h2>charts</h2>
      <Specialmovies />
    </>
  );
}

export default App;
