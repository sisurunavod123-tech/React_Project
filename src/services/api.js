const API_KEY = "3509b35e8706cadaa9c9f042c2efbb5f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const getMoviesByYear = async (Year) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=${Year}&sort_by=popularity.desc`
  );
  const data = await response.json();
  return data.results;
};