import data from "./movieFlex.json";
// import React from "react";
// import { Bar } from "react-chartjs-2";


export function getPremieremonth() {
  const premiereMonths = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };

  // Count the premieres for each month
  data.Specials.forEach((movie) => {
    const premiereMonth = new Date(movie.Premiere).getMonth();
    premiereMonths[Object.keys(premiereMonths)[premiereMonth]]++;
  });

  data.Feature.forEach((movie) => {
    const premiereMonth = new Date(movie.Premiere).getMonth();
    premiereMonths[Object.keys(premiereMonths)[premiereMonth]]++;
  });

  data.Dokumentaries.forEach((movie) => {
    const premiereMonth = new Date(movie.Premiere).getMonth();
    premiereMonths[Object.keys(premiereMonths)[premiereMonth]]++;
  });

  const labels = Object.keys(premiereMonths);
  const counts = Object.values(premiereMonths);

  return {
    labels,
    datasets: [
      {
        label: "Premiere Month Counts",
        data: counts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(51, 204, 51, 0.8)",
          "rgba(255, 102, 102, 0.8)",
          "rgba(102, 102, 255, 0.8)",
          "rgba(204, 51, 255, 0.8)",
          "rgba(255, 153, 51, 0.8)",
          "rgba(80, 80, 80, 0.8)",
        ],
      },
    ],
  };
  return data;
}
