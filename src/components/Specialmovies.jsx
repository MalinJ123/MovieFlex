import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)
import { getConfig } from '../data/getConfig'

const pieConfig = getConfig();// Call getConfig as a function
 

const Specialmovies = () => {
    return( 
        <section>
            <p>Specials movie genre</p>
            <Pie data ={pieConfig}/> 
        </section>
    )
} 

export default Specialmovies