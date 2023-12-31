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
    "Interactive fiction / Quiz show": 0,
    "Anime": 0,
    "Horror": 0,
    "Historical drama / thriller": 0,
    "Sports comedy": 0,
    "Teen romantic comedy": 0,
    "Slasher": 0, 
    "Comedy": 0,
    "Action thriller": 0, 
    "Science fiction": 0,
    "Animation": 0,
    "Musical comedy drama": 0,
    "Children's fantasy": 0,
    "Spy": 0,
    "Erotic thriller": 0,
    "Action comedy": 0,
    "Supernatural martial arts drama": 0,
    "Documentary": 0,
  };

  let dokumentariesCount = 0; 

  
  data.Specials.forEach((movie) => {
    if (categoryCounts.hasOwnProperty(movie.Genre)) {
      categoryCounts[movie.Genre]++;
    }
  });

  data.Feature.forEach((movie) => {
    if (categoryCounts.hasOwnProperty(movie.Genre)) {
      categoryCounts[movie.Genre]++;
    }
  });

  data.Dokumentaries.forEach((movie) => {
    categoryCounts["Documentary"]++; 
    dokumentariesCount++;
  });

  // Sortera data baserat på sortOrder
  if (sortOrder === "ascending") {
    const sortedCategoryCounts = Object.entries(categoryCounts).sort(
      (a, b) => a[1] - b[1]
    );
    categoryCounts = Object.fromEntries(sortedCategoryCounts);
  } else if (sortOrder === "descending") {
    const sortedCategoryCounts = Object.entries(categoryCounts).sort(
      (a, b) => b[1] - a[1]
    );
    categoryCounts = Object.fromEntries(sortedCategoryCounts);
  }

  const labels = Object.keys(categoryCounts);
  const counts = Object.values(categoryCounts);

  const backgroundColors = [

    "rgba(160, 120, 160, 0.5)", //mörk lila

    "rgba(200, 162, 200, 0.5)", //pastell lila
    "rgba(255, 160, 180, 0.5)", //mörk rosa

 

    "rgba(255, 182, 193, 0.5)", //rosa 


    "rgba(173, 220, 230, 0.5)", //ljusblå
    
    "rgba(173, 210, 230, 0.5)", //ljusblå
    "rgba(135, 200, 235, 0.5)", // mörkare ljusblå
    
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
