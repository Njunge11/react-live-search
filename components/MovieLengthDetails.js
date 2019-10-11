const MovieLengthDetails = ({ movie }) => {
  return (
    <div>
      <span className="time dot">{movie.Runtime}</span>
      <span className="time dot">{movie.Year}</span>
      <span className="rated">{movie.Rated}</span>
    </div>
  );
};
export default MovieLengthDetails;
