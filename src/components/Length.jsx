import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

import React from "react";
import { Line } from "react-chartjs-2";
import { getMovieLength } from '../data/length';

const MovieLength = () => {
  const config = getMovieLength();

  return (
    <>
      <p>Here is the length of the films in ascending order</p>
      <Line data={config.data} options={config.options} />
    </>
  );
};

export default MovieLength;
