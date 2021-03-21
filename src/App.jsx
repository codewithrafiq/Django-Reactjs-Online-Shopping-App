import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NabBar from "./components/NabBar";
import HomePage from "./page/HomePage";
import ProductDetails from "./page/ProductDetails";
import SingleBrandsProducts from "./page/SingleBrandsProducts";
import SingleCategoryProducts from "./page/SingleCategoryProducts";

const App = () => {
  return (
    <BrowserRouter>
      <NabBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/p-:title-:id" component={ProductDetails} />
        <Route
          exact
          path="/category-:title-:id"
          component={SingleCategoryProducts}
        />
        <Route
          exact
          path="/brand-:title-:id"
          component={SingleBrandsProducts}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
