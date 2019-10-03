import ThemeContext from "../src/ThemeContext";
import Card from "./Card";
import publicRuntimeConfig from "../src/config";
const url = publicRuntimeConfig.imageURL;
const Cards = () => {
  return (
    <ThemeContext.Consumer>
      {themeHook => {
        const movies = themeHook[0].movies;
        if (movies) {
          return movies.map(movie => (
            <Card key={movie.id} moviePoster={url + movie.poster_path} />
          ));
        }
      }}
    </ThemeContext.Consumer>
  );
};
export default Cards;
