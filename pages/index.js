import React, { useState } from "react";
import withLayout from "../components/Layout";
import Search from "../components/Search";
import Content from "../components/Content";
import ThemeContext from "../src/ThemeContext";
const Index = () => {
  const themeHook = useState({
    loadSpinner: false,
    loadCards: false,
    loadDefault: true,
    movies: {}
  });
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <Search />
        <Content />
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
export default withLayout(Index);
