import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import { getConfig } from "../data/getConfig";

const pieConfig = getConfig(); 

const Specialmovies = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="chart-container">
        <button className="close-button" onClick={onClose}>
        ✖️
        </button>
        <p className="chart-p" >Shows language in falling order</p>
        <Pie className="piechart" data={pieConfig} />
      </div>
    </div>
  );
};

export default Specialmovies;
