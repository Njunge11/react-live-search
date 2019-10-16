import IMDBRatings from "./IMDBRatings";
import RottenRatings from "./RottenRatings";
import AddToFavouritesButton from "./AddToFavouritesButton";
import ActiveButton from "./ActiveButton";

function testing(e) {
  alert("button clicked");
}
const MovieRatings = ({ ratings }) => {
  return (
    <div>
      <IMDBRatings rating={ratings ? ratings[0].Value : ""} />
      <RottenRatings rating={ratings ? ratings[1].Value : ""} />
      <AddToFavouritesButton onClick={e => testing(e)} />
    </div>
  );
};
export default MovieRatings;
