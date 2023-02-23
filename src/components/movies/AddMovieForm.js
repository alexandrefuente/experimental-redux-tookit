import { useCreateMovieMutation } from "../../services/jsonServerApi";

const AddMovieForm = () => {
  const [createMovie, { isLoading }] = useCreateMovieMutation();

  const submitMovie = (event) => {
    event.preventDefault();
    if (!event.target["title"].value) {
      return;
    }
    createMovie(event.target["title"].value);
    event.target.reset();
  };

  return (
    <>
      <h2>Add new movie</h2>
      <form onSubmit={(e) => submitMovie(e)} style={{ display: "flex" }}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" />
        </div>
        <div>
          <input
            type="submit"
            className="btn"
            value="Add movie"
            disabled={isLoading}
          />
          {isLoading && "Loading..."}
        </div>
      </form>
    </>
  );
};

export default AddMovieForm;
