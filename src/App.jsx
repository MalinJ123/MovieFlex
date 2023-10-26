import React, { useState } from "react";
import "./App.css";
import Specialmovies from "./components/Specialmovies";
import Premieremonth from "./components/Premieremonth";
import MovieLength from "./components/length";
import Genre from "./components/Genre";
import Search from "./components/Search.jsx";
import Start from "./routes/start";
import { IconComponent } from './routes/IconComponent';

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
          Genre Chart
        </button>
        {isGenreVisible && <Genre onClose={closeGenre} />}


        <button className="premiere-btn" onClick={togglePremiere}>
          Premiere Chart
        </button>
        {isPremiereVisible && <Premieremonth onClose={closePremiere} />}

        <button className="length-btn" onClick={toggleLength}>
          Length Chart
        </button>
        {isLengthVisible && <MovieLength onClose={closeLength} />}
        
        <button className="special-btn" onClick={toggleSpecial}>
          Language Chart
        </button>
        {isSpecialVisible && <Specialmovies onClose={closeSpecial} />}

      </section>
        <Search />
        {/* <IconComponent/>  */}
    </section>
  )
}

export default App;
