const Card = ({ movieID, moviePoster }) => {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={moviePoster} alt="card image" />
      </div>
    </div>
  );
};
export default Card;
