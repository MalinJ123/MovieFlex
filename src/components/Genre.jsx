
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement )
import React from "react";
import { Pie} from "react-chartjs-2";

import { getGenre } from './../data/genre';


const Genre = () => { 

    const genreConfig = getGenre ()

    return(
        <section>
      <p>Shows Genre</p>
      <Pie data={genreConfig} />
    </section>
    )

}

export default Genre;