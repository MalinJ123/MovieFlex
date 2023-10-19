import data from "./movieFlex.json";

export function getPremieremonth() {
  const categories = ["Specials", "Feature", "Dokumentaries"];
  const months = {
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

  // Loop through each category
  categories.forEach((category) => {
    data[category].forEach((movie) => {
      const premiereMonth = new Date(movie.Premiere).getMonth();
      months[Object.keys(months)[premiereMonth]]++;
    });
  });

  const categoryColors = {
    Specials: "rgba(255, 99, 132, 0.8)",
    Feature: "rgba(54, 162, 235, 0.8)",
    Dokumentaries: "rgba(255, 206, 86, 0.8)",
  };


  const labels = Object.keys(months);
  const datasets = categories.map((category) => ({
    label: category,
    data: labels.map((month) => months[month]),
    backgroundColor: categoryColors[category], // Använd specifik färg för varje kategori
    
  }));
  return {
    labels,
    datasets,
  };
}
