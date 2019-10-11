import ThemeContext from "../src/ThemeContext";
import Card from "./Card";
const Cards = () => {
  return (
    <ThemeContext.Consumer>
      {themeHook => {
        const movies = themeHook[0].movies;
        if (movies) {
          return movies.map(movie => (
            <div key={movie.imdbID}>
              <Card movie={movie} />
            </div>
          ));
        }
      }}
    </ThemeContext.Consumer>
  );
};
export default Cards;
