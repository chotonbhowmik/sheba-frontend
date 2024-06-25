import  { useState } from "react";
import { fetchMovies } from "../../Api/Api"; 
const Movies = () => {
  const [searchItem, setsearchItem] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchMovies(searchItem);
      if (data.Response === "True") {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      console.error("Failed to fetch movies:", err);
      setError("Failed to fetch movies");
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          className="grow input input-bordered"
          placeholder="Search Here"
          value={searchItem}
          onChange={(e) => setsearchItem(e.target.value)}
        />
      
      </form>
      {error && <p className="error">{error}</p>}
      <div className="movie-list grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto justify-items-center">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie mt-5">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>
              <b>{movie.Title}</b>
            </h3>
            <p>Year: {movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
