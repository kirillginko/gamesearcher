import React from "react";
//Components
import Home from "./pages/Home";
import Game from "./components/Game";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
