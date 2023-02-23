import { useState } from "react";
import { useGetMoviesQuery } from "../../services/jsonServerApi";
import AddMovieForm from "./AddMovieForm";
import Movie from "./Movie";

const Movies = () => {
  const [page, setPage] = useState(1);
  const {
    data: movies = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetMoviesQuery(page);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div>
      <ul className="moviesList">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie props={movie} />
          </li>
        ))}
      </ul>
      <div>
        <button
          className="btn"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          className="btn"
          disabled={movies.length < 10}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      <div>
        <AddMovieForm />
      </div>
    </div>
  );
};

export default Movies;
