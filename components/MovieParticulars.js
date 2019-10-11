import Cast from "../components/Cast";
import Genre from "../components/Genre";
import Director from "../components/Director";
const MovieParticulars = ({ movie }) => {
  return (
    <div className="movie-particulars">
      <Cast cast={movie ? movie.Actors : ""} />
      <Genre genre={movie ? movie.Genre : ""} />
      <Director director={movie ? movie.Director : ""} />
    </div>
  );
};

export default MovieParticulars;
