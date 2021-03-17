import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NabBar from "./components/NabBar";
import HomePage from "./page/HomePage";
import SingleCategoryProducts from "./page/SingleCategoryProducts";

const App = () => {
  return (
    <BrowserRouter>
      <NabBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/category-:title-:id"
          component={SingleCategoryProducts}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
