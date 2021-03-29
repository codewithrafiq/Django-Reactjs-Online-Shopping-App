import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NabBar from "./components/NabBar";
import HomePage from "./page/HomePage";
import ProductDetails from "./page/ProductDetails";
import SearchResultPage from "./page/SearchResultPage";
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
        <Route
          exact
          path='/q-:q'
          component={SearchResultPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
