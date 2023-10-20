import data from "./movieFlex.json";


// Funktion för att filtrera filmer baserat på söktermen
function searchByTitle(searchTerm) {
  // Konvertera söktermen och filmtitlarna till små bokstäver för att göra sökningen fall-insensitiv
  const lowercaseSearchTerm = searchTerm.toLowerCase();

  // Filtrera filmer som matchar söktermen
  const filteredMovies = data.filter((movie) => {
    const lowercaseTitle = movie.Title.toLowerCase();
    return lowercaseTitle.includes(lowercaseSearchTerm);
  });

  return filteredMovies;
}

// Hantera användarens sökterm och uppdatera resultatet
function handleSearch(event) {
  const searchTerm = event.target.value;
  const filteredMovies = searchByTitle(searchTerm);

  // Uppdatera resultatet på något sätt, t.ex. genom att rendera om det eller uppdatera en komponent i ditt UI
  renderMovies(filteredMovies); // Du måste implementera denna funktion baserat på ditt UI-ramverk eller bibliotek
}

// Lyssna på ändringar i sökfältet
const searchInput = document.getElementById("searchInput"); // Byt ut "searchInput" mot den faktiska ID:n för ditt sökfält
searchInput.addEventListener("input", handleSearch);