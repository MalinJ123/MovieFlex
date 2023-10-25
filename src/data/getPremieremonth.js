import { useEffect, useState } from 'react';
import jsonData from './movieFlex.json'; 

export function getPremieremonth() {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const categories = ["Feature", "Specials", "Dokumentaries"];
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const categoryData = {};
    categories.forEach((category) => {
      categoryData[category] = {};
      months.forEach((month) => {
        categoryData[category][month] = 0;
      });
    });

    // Loopar igenom filmdatan direkt från jsonfilen.
    Object.keys(jsonData).forEach((category) => {
      jsonData[category].forEach((movie) => {
        const premiereMonth = movie.Premiere.split(" ")[0];

        if (categories.includes(category) && months.includes(premiereMonth)) {
          categoryData[category][premiereMonth]++;
        }
      });
    });

    const categoryColors = {
      Specials: "rgba(255, 99, 132, 0.8)",
      Feature: "rgba(54, 162, 235, 0.8)",
      Dokumentaries: "rgba(255, 206, 86, 0.8)",
    };

    const chartData = {
      labels: months,
      datasets: categories.map((category) => ({
        label: category,
        data: months.map((month) => categoryData[category][month]),
        backgroundColor: categoryColors[category],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      })),
    };

    setData(chartData);
  }, []);

  return data;
}

export default getPremieremonth;
