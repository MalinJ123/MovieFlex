import data from "./movieFlex.json";

console.log("getting all movies", data);

export function getConfig() {

  const specialsCount = data.Specials.length;
  const featureCount = data.Feature.length;
  const dokumentariesCount = data.Dokumentaries.length;

  return {
    labels: ["Specials", "Feature", "Dokumentaries"],
    datasets: [
      {
        label: "All Movies Counts",
        data: [specialsCount, featureCount, dokumentariesCount],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
      },
    ],
  };
}