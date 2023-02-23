import { useState } from "react";
import {
  useUpdateMovieMutation,
  useDeleteMovieMutation,
} from "../../services/jsonServerApi";
import { deleteIcon, editIcon } from "../../utils/icons";

const Movie = ({ props }) => {
  const [isEdit, seIsEdit] = useState(false);
  const [title, setTitle] = useState(props.title);

  const [updateMovie, { isLoading }] = useUpdateMovieMutation();
  const [deleteMovie] = useDeleteMovieMutation();

  const updateMovieHandler = (event) => {
    event.preventDefault();
    const movie = {
      id: props.id,
      title,
    };
    updateMovie(movie);
    seIsEdit(false);
  };

  const deleteMovieHandler = (movieId) => {
    deleteMovie(movieId);
  };

  return (
    <div>
      {isEdit ? (
        <div>
          <form onSubmit={updateMovieHandler}>
            <input
              type={"text"}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button
              className="btn btn-edit"
              style={{
                color: "rgb(13, 13, 13",
                backgroundColor: "rgb(238, 198, 159)",
              }}
              type="submit"
            >
              {isLoading ? "Loading..." : "Update Movie"}
            </button>
          </form>
        </div>
      ) : (
        <>
          <span>{props.title}</span>
          <button
            className="btn btn-edit"
            onClick={() => seIsEdit((prev) => !prev)}
          >
            {editIcon}
          </button>
          <button
            className="btn btn-delete"
            onClick={() => deleteMovieHandler(props.id)}
          >
            {deleteIcon}
          </button>
        </>
      )}
    </div>
  );
};

export default Movie;
