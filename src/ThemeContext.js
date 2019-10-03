import { createContext } from "react";

const ThemeContext = createContext([
  { loadSpinner: false, loadCards: false, default: true, movies: {} },
  () => {}
]);
export default ThemeContext;
