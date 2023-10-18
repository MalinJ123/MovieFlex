import data from "./movieFlex.json";

console.log("getting all movies", data);

//EN FUNKTION FÖR ATT HÄMTA ALLA SPRÅKEN I : Specials", "Feature", "Dokumentaries

export function getConfig(sortOrder) {
  const languageCounts = {
    English: 0,
    Spanish: 0,
    Polish: 0,
    Tamil: 0,
    // Add more languages as needed
  };

  // Count the languages for each category
  data.Specials.forEach((movie) => {
    languageCounts[movie.Language]++;
  });

  data.Feature.forEach((movie) => {
    languageCounts[movie.Language]++;
  });

  data.Dokumentaries.forEach((movie) => {
    languageCounts[movie.Language]++;
  });

  // Sort the language counts based on the given sortOrder
  const sortedCounts = Object.entries(languageCounts)
    .sort((a, b) => (sortOrder === "asc" ? a[1] - b[1] : b[1] - a[1]))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  const labels = Object.keys(languageCounts);
  const counts = Object.values(languageCounts);

  return {
    labels,
    datasets: [
      {
        label: "Language Counts",
        data: counts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          // Add more colors as needed
        ],
      },
    ],
  };
}
