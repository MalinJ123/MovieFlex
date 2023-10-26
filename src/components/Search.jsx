import React, { useState } from "react";
import data from "../data/movieFlex";
import "../stylesheet/search.css";

// Omstrukturera data till en array av kategorier
const categories = Object.values(data);

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [expandedMovie, setExpandedMovie] = useState(null);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const lowercaseSearchTerm = newSearchTerm.toLowerCase();

    // Filtrera filmer baserat på söktermen i alla kategorier
    const filteredMovies = [];

    categories.forEach((category) => {
      const matchingMovies = category.filter((movie) => {
        const lowercaseTitle = movie.Title.toLowerCase();
        return lowercaseTitle.includes(lowercaseSearchTerm);
      });

      filteredMovies.push(...matchingMovies);
    });

    setSearchResult(filteredMovies);
  };

  const handleMovieClick = (index) => {
    if (expandedMovie === index) {
      setExpandedMovie(null);
    } else {
      setExpandedMovie(index);
    }
  };

  return (
    <div className="cont">
      <div className="input-container">
        <div className="input-to-center">
          <input
            className="search-input"
            type="text"
            placeholder="Search movie by title"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {searchTerm.trim() === "" ? (
          <p></p>
        ) : (
          searchResult.map((movie, index) => (
            <div className="card-container">
              <div key={index} className="movie-card">
                <h2 onClick={() => handleMovieClick(index)}>{movie.Title}</h2>
                {expandedMovie === index && (
                  <div className="movie-details">
                    <p>Genre: {movie.Genre}</p>
                    <p>Premiere: {movie.Premiere}</p>
                    <p>Runtime: {movie.Runtime}</p>
                    <p>Language: {movie.Language}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
