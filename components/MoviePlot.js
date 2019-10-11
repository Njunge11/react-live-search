const MoviePlot = ({ plot }) => {
  return (
    <div className="description">
      <p className="text-color">Plot</p>
      <p>{plot}</p>
    </div>
  );
};
export default MoviePlot;
