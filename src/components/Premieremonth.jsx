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
import { Bar } from "react-chartjs-2";
import { getPremieremonth } from "../data/getPremieremonth";

const Premieremonth = ({ onClose }) => {
  const barConfig = getPremieremonth();

  const data = {
    labels: barConfig.labels,
    datasets: barConfig.datasets,
  };

  return (
    <div className="overlay">
      <div className="chart-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <p>Shows New Premiere month</p>
        <Bar className="chart" data={data} />
      </div>
    </div>
  );
};
export default Premieremonth;
