import IMDBRatings from "./IMDBRatings";
import RottenRatings from "./RottenRatings";
const MovieRatings = ({ ratings }) => {
  return (
    <div>
      <IMDBRatings rating={ratings ? ratings[0].Value : ""} />
      <RottenRatings rating={ratings ? ratings[1].Value : ""} />
    </div>
  );
};
export default MovieRatings;
