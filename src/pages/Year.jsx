import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { getMoviesByYear } from "../services/api";
import "../css/Home.css";

function Year() {
  const { year } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const results = await getMoviesByYear(year);
        setMovies(results);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [year]);

  return (
    <div className="home">
      <h2>Movies from {year}</h2>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Year;