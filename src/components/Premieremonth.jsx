
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement )
import React from "react";
import { Bar } from "react-chartjs-2";
import { getPremieremonth } from "../data/getPremiermonth";

const Premieremonth = () => {
  const barConfig = getPremieremonth();

  return (
    <section>
      <p>Shows movies premiere month</p>
      <Bar data={barConfig} />
    </section>
  );
};
export default Premieremonth;