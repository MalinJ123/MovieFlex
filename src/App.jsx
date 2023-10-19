import "./App.css";
import Specialmovies from "./components/Specialmovies";
import Premieremonth from './components/Premieremonth'
import React from "react";

function App() {
  return (
    <>
      <h1>MovieFlex </h1>
      <h2>charts</h2>
      <Specialmovies />
      <h2>Premiere month</h2>
      <Premieremonth />
    </>
  );
}

export default App;
