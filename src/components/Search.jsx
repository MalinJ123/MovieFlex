import React, { useState } from "react";
import data from "../data/movieFlex";
import "../stylesheet/search.css";

// Omstrukturera data till en array av kategorier
const categories = Object.values(data);

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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

  return (
    <div>
      <h3>Search function</h3>
      <input
        type="text"
        placeholder="Search by Title"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm.trim() === "" ? (
        <p>No results</p>
      ) : (
        searchResult.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2>{movie.Title}</h2>
            <p>Genre: {movie.Genre}</p>
            <p>Premiere: {movie.Premiere}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Language: {movie.Language}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Search;
