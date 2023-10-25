import data from "./movieFlex.json";

console.log("Getting all movies", data);

export function getConfig(sortOrder) {
  // Kontrollera att data innehåller de nödvändiga kategorierna
  if (!data.Specials || !data.Feature || !data.Dokumentaries) {
    throw new Error(
      "Invalid data structure. Make sure it contains Specials, Feature, and Dokumentaries."
    );
  }

  const languageCounts = {
    English: 0,
    Spanish: 0,
    Polish: 0,
    Tamil: 0,
    Japanese: 0,
    Korean: 0,
    French: 0,
    Italian: 0,
    Indonesian: 0,
    German: 0,
    Swedish: 0,
    Dutch: 0,
    Turkish: 0,
    Portuguese: 0,
    Pashto: 0,
    Thai: 0,
  };

  // Räkna språken för varje kategori i Specials, Feature och Dokumentaries
  data.Specials.forEach((movie) => {
    languageCounts[movie.Language]++;
  });

  data.Feature.forEach((movie) => {
    languageCounts[movie.Language]++;
  });

  data.Dokumentaries.forEach((movie) => {
    languageCounts[movie.Language]++;
  });

  // Sortera språkdatan i fallande ordning
  const sortedCounts = Object.entries(languageCounts)
    .sort((a, b) => (sortOrder === "asc" ? a[1] - b[1] : b[1] - a[1]))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  const labels = Object.keys(sortedCounts);
  const counts = Object.values(sortedCounts);

  return {
    labels,
    datasets: [
      {
        label: "Language Counts",
        data: counts,
        backgroundColor: [
          "rgba(160, 120, 160, 0.5)", //mörk lila

          "rgba(200, 162, 200, 0.5)", //pastell lila
          "rgba(255, 160, 180, 0.5)", //mörk rosa
          "rgba(255, 182, 193, 0.5)", //rosa
          "rgba(173, 220, 230, 0.5)", //ljusblå
          "rgba(173, 210, 230, 0.5)", //ljusblå
          "rgba(135, 200, 235, 0.5)", // mörkare ljusblå
        ],
        borderColor: "rgba(0, 0, 0, 0.09)",
      },
    ],
  };
}
