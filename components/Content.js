import Default from "./Default";
import Cards from "./Cards";
import ThemeContext from "../src/ThemeContext";
const Content = () => {
  return (
    <ThemeContext.Consumer>
      {themeHook => {
        //load spinner
        if (themeHook[0].loadSpinner) {
          return <Default />;
          // load cards
        } else if (themeHook[0].loadCards) {
          // load default content
          return <Cards />;
        } else {
          return <Default />;
        }
      }}
    </ThemeContext.Consumer>
  );
};
export default Content;
