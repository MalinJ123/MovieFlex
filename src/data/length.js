import jsonData from "./movieFlex.json";
import { useEffect, useState } from 'react';

export function getMovieLength() {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [runtimes, setRuntimes] = useState([]);

  useEffect(() => {
    if (!jsonData.Specials || !jsonData.Feature || !jsonData.Dokumentaries) {
      throw new Error("Invalid data structure. Make sure it contains Specials, Feature, and Dokumentaries.");
    }

    const allMovies = [...jsonData.Specials, ...jsonData.Feature, ...jsonData.Dokumentaries];

    // Plockar ut runtimes från filmerna och sortera dem i stigande ordning
    const runtimes = allMovies
      .map((movie) => movie.Runtime)
      .sort((a, b) => {
        // Anpassad sorteringsfunktion för runtime. Delar upp "1" "h" "42" "min" 
        const aParts = a.split(' ');
        const bParts = b.split(' ');

        let aTotalMinutes = 0;
        let bTotalMinutes = 0;

        for (let i = 0; i < aParts.length; i += 2) {
          const value = parseInt(aParts[i]);
          const unit = aParts[i + 1];

          if (unit === 'h') {
            aTotalMinutes += value * 60;
          } else if (unit === 'min') {
            aTotalMinutes += value;
          }
        }

        for (let i = 0; i < bParts.length; i += 2) {
          const value = parseInt(bParts[i]);
          const unit = bParts[i + 1];

          if (unit === 'h') {
            bTotalMinutes += value * 60;
          } else if (unit === 'min') {
            bTotalMinutes += value;
          }
        }

        return aTotalMinutes - bTotalMinutes;
      });

    // Skapa en ny array med objekt för att lagra runtime och antal filmer
    const runtimeCounts = runtimes.reduce((counts, runtime) => {
      counts[runtime] = (counts[runtime] || 0) + 1;
      return counts;
    }, {});

    const runtimeCountsArray = Object.entries(runtimeCounts).map(([runtime, count]) => ({
      runtime,
      count,
    }));

    // Sortera runtimeCountsArray efter kortast tid till längst tid
    runtimeCountsArray.sort((a, b) => {
      // Omvandla runtimes till minuter för jämförelse
      const aParts = a.runtime.split(' ');
      const bParts = b.runtime.split(' ');

      let aTotalMinutes = 0;
      let bTotalMinutes = 0;

      for (let i = 0; i < aParts.length; i += 2) {
        const value = parseInt(aParts[i]);
        const unit = aParts[i + 1];

        if (unit === 'h') {
          aTotalMinutes += value * 60;
        } else if (unit === 'min') {
          aTotalMinutes += value;
        }
      }

      for (let i = 0; i < bParts.length; i += 2) {
        const value = parseInt(bParts[i]);
        const unit = bParts[i + 1];

        if (unit === 'h') {
          bTotalMinutes += value * 60;
        } else if (unit === 'min') {
          bTotalMinutes += value;
        }
      }

      return aTotalMinutes - bTotalMinutes;
    });

    // Uppdatera data och runtimeCounts
    setData({
      labels: runtimeCountsArray.map((item) => item.runtime), 
      datasets: [
        {
          label: "Number of Movies",
          data: runtimeCountsArray.map((item) => item.count), 
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
        },
      ],
    });

    setRuntimes(runtimeCountsArray);

  }, []);

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Runtime',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Quantity',
          },
        },
      },
    },
  };

  return config;
}
