import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

import React from "react";
import { Line } from "react-chartjs-2";
import { getMovieLength } from '../data/length';

const MovieLength = ({ onClose }) => {
  const config = getMovieLength();

  return (
    <>
    <section className="overlay">
    <div className="chart-container">
    <button className="close-button" onClick={onClose}>
          &times; 
        </button>
    <p>Here is the length of the films in ascending order</p>
      <Line className="chart" data={config.data} options={config.options} />
      </div>
    </section>
    </>
  );
};

export default MovieLength;
