import React, { useState } from "react";
import "./App.css";
import Specialmovies from "./components/Specialmovies";
import Premieremonth from "./components/Premieremonth";
import MovieLength from "./components/length";
import Genre from "./components/Genre";
import Search from "./components/Search.jsx";
import Start from "./routes/start";

function App() {

 // State variable to track whether the diagram is currently displayed
 const [isDiagramVisible, setIsDiagramVisible] = useState(false);
 // State variable to track which diagram to display
 const [selectedDiagram, setSelectedDiagram] = useState(null);

 // Function to toggle the display of the diagram when a button is clicked
 const toggleDiagram = (diagramName) => {
   if (isDiagramVisible) {
     // If the diagram is already visible, hide it
     setIsDiagramVisible(false);
     setSelectedDiagram(null); // Clear the selected diagram
   } else {
     // If the diagram is hidden, show it
     setIsDiagramVisible(true);
     setSelectedDiagram(diagramName);
   }
 };
  
  return (
    <>
      <Start />

      {/* <h3>Search</h3> */}
      {/* <Search /> */}

      {/* <section className="chart">
      </section> */}
       <section className="btn-container">

       <button className="genre-btn" onClick={() => toggleDiagram('genre')}>
        {selectedDiagram === 'genre' && isDiagramVisible
          ? 'Hide Genre Diagram'
          : 'Show Genre Diagram'}
      </button>

      <button className="length-btn" onClick={() => toggleDiagram('length')}>
        {selectedDiagram === 'length' && isDiagramVisible
          ? 'Hide Movie Length Diagram'
          : 'Show Movie Length Diagram'}
      </button>

      <button className="premiere-btn" onClick={() => toggleDiagram('premiere')}>
        {selectedDiagram === 'premiere' && isDiagramVisible
          ? 'Hide Premiere Month Diagram'
          : 'Show Premiere Month Diagram'}
      </button>

      <button className="special-btn" onClick={() => toggleDiagram('special')}>
        {selectedDiagram === 'special' && isDiagramVisible
          ? 'Hide Special Movies Diagram'
          : 'Show Special Movies Diagram'}
      </button>

       </section>
      {isDiagramVisible && (
        <>
          {selectedDiagram === 'genre' && <Genre />}
          {selectedDiagram === 'length' && <MovieLength />}
          {selectedDiagram === 'premiere' && <Premieremonth />}
          {selectedDiagram === 'special' && <Specialmovies />}
        </>
      )}
    </>
  );
}


export default App;
