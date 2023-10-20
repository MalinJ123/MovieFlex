import data from "./movieFlex.json";

console.log("Getting all movies", data);

export function getGenre(sortOrder = "ascending") {
  // Kontrollera att data innehåller de nödvändiga kategorierna
  if (!data.Specials || !data.Feature || !data.Dokumentaries) {
    throw new Error(
      "Invalid data structure. Make sure it contains Specials, Feature, and Dokumentaries."
    );
  }

  let categoryCounts = {
    "Stop motion / dark comedy": 0,
    "Making-of": 0,
    "Fantasy": 0,
    "Drama": 0,
    "Thriller": 0,
    "Animation / interactive fiction": 0,
    "Animation / concert film": 0,
    "Docu-comedy": 0,
    "Interview": 0,
    "Speech": 0,
    "Clipshow": 0,
    "Family": 0,
    "Musical drama": 0,
    "Romantic comedy": 0,
    "Murder mystery": 0,
    "Black comedy": 0,
    "Science fiction comedy": 0,
    "Romantic thriller": 0,
    "Coming-of-age drama": 0,
    "Comedy drama": 0,
    "Romantic drama": 0,
    "Survival": 0,
    "Sports": 0,
  };

  // Räkna kategorierna för varje kategori
  data.Specials.forEach((movie) => {
    categoryCounts[movie.Genre]++;
  });

  data.Feature.forEach((movie) => {
    categoryCounts[movie.Genre]++;
  });

  data.Dokumentaries.forEach((movie) => {
    categoryCounts[movie.Genre]++;
  });

  // Sortera kategoridata baserat på sortOrder (om det behövs)
  if (sortOrder === "ascending") {
    // Sortera i stigande ordning (minsta först)
    const sortedCategoryCounts = Object.entries(categoryCounts).sort(
      (a, b) => a[1] - b[1]
    );
    categoryCounts = Object.fromEntries(sortedCategoryCounts);
  } else if (sortOrder === "descending") {
    // Sortera i fallande ordning (största först)
    const sortedCategoryCounts = Object.entries(categoryCounts).sort(
      (a, b) => b[1] - a[1]
    );
    categoryCounts = Object.fromEntries(sortedCategoryCounts);
  }

  // Skapa cirkeldiagramkonfigurationen
  const labels = Object.keys(categoryCounts);
  const counts = Object.values(categoryCounts);

  // Dina backgroundColors här

  const backgroundColors = [
    "rgba(139, 0, 139, 0.8)",
    "rgba(255, 69, 0, 0.8)", 
    "rgba(0, 0, 139, 0.8)", 
    "rgba(0, 100, 0, 0.8)", 
    "rgba(0, 139, 139, 0.8)", 
    "rgba(139, 0, 0, 0.8)",  
    "rgba(128, 128, 0, 0.8)",  
    "rgba(0, 0, 0, 0.8)", 
    "rgba(139, 0, 139, 0.8)", 
    "rgba(255, 140, 0, 0.8)", 
    "rgba(0, 0, 255, 0.8)", 
    "rgba(0, 100, 0, 0.8)", 
    "rgba(0, 128, 128, 0.8)",  
    "rgba(128, 0, 0, 0.8)",  
    "rgba(128, 128, 0, 0.8)",  
    "rgba(0, 0, 0, 0.8)",  
    "rgba(128, 0, 128, 0.8)",  
    "rgba(255, 165, 0, 0.8)",  
    "rgba(0, 0, 128, 0.8)",  
    "rgba(0, 128, 0, 0.8)", 
    "rgba(0, 128, 128, 0.8)",  
    "rgba(139, 69, 19, 0.8)",  
    "rgba(105, 105, 105, 0.8)",  
    "rgba(128, 0, 128, 0.8)",  
    "rgba(0, 128, 0, 0.8)"   
  ];
  return {
    labels,
    datasets: [
      {
        data: counts,
        backgroundColor: backgroundColors,
      },
    ],
  };
}
