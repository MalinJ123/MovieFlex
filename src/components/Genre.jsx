import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);
import React from "react";
import { Pie } from "react-chartjs-2";

import { getGenre } from "./../data/genre";

const Genre = ({ onClose }) => {
  const genreConfig = getGenre();

  return (
    <div className="overlay">
      <div className="chart-container">
        <button className="close-button" onClick={onClose}>
          ✖️
        </button>
        <p className="chart-p">Shows Genre</p>
        <Pie className="piechart" data={genreConfig} />
      </div>
    </div>
  );
};

export default Genre;
