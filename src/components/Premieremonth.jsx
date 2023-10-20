
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement )
import React from "react";
import { Bar } from "react-chartjs-2";
import { getPremieremonth } from "../data/getPremieremonth"; 

const Premieremonth = () => {
  const barConfig = getPremieremonth();

  const data = {
    labels: barConfig.labels,
    datasets: barConfig.datasets,
  };

  return (
    <section>
      <p>Shows New Premiere month</p>
      <Bar data={data} />
    </section>
  );
};
export default Premieremonth;