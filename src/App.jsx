import React, { useState } from "react";
import "./App.css";
import Specialmovies from "./components/Specialmovies";
import Premieremonth from "./components/Premieremonth";
import MovieLength from "./components/length";
import Genre from "./components/Genre";
import Search from "./components/Search.jsx";
import Start from "./routes/start";

function App() {
  const [isGenreVisible, setIsGenreVisible] = useState(false);
  const [isLengthVisible, setIsLengthVisible] = useState(false);
  const [isPremiereVisible, setIsPremiereVisible] = useState(false);
  const [isSpecialVisible, setIsSpecialVisible] = useState(false);

  const toggleGenre = () => {
    setIsGenreVisible(!isGenreVisible);
  };
  const toggleLength = () => {
    setIsLengthVisible(!isLengthVisible);
  };
  const togglePremiere = () => {
    setIsPremiereVisible(!isPremiereVisible);
  };
  const toggleSpecial = () => {
    setIsSpecialVisible(!isSpecialVisible);
  };

  const closeGenre = () => {
    setIsGenreVisible(false);
  };
  const closeLength = () => {
    setIsLengthVisible(false);
  };
  const closePremiere = () => {
    setIsPremiereVisible(false);
  };
  const closeSpecial= () => {
    setIsSpecialVisible(false)
  }

  return (
    <section>
      <Start />
     
      <section className="btn-container">
        <button className="genre-btn" onClick={toggleGenre}>
          Show Genre Chart
        </button>
        {isGenreVisible && <Genre onClose={closeGenre} />}

        <button className="length-btn" onClick={toggleLength}>
          Show Length Chart
        </button>
        {isLengthVisible && <MovieLength onClose={closeLength} />}

        <button className="premiere-btn" onClick={togglePremiere}>
          Show Premiere Chart
        </button>
        {isPremiereVisible && <Premieremonth onClose={closePremiere} />}

        <button className="special-btn" onClick={toggleSpecial}>
          Show Language Chart
        </button>
        {isSpecialVisible && <Specialmovies onClose={closeSpecial} />}

      </section>
        {/* <Search /> */}
    </section>
  );
}

export default App;
