import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NabBar from "./components/NabBar";
import { domain, getheader } from "./env";
import AuthPage from "./page/AuthPage";
import HomePage from "./page/HomePage";
import OrderPage from "./page/OrderPage";
import ProductDetails from "./page/ProductDetails";
import ProfilePage from "./page/ProfilePage";
import SearchResultPage from "./page/SearchResultPage";
import SingleBrandsProducts from "./page/SingleBrandsProducts";
import SingleCategoryProducts from "./page/SingleCategoryProducts";
import { useStateValue } from "./state/stateProvider";

const App = () => {
  const [{ profile }, dispatch] = useStateValue();
  useEffect(() => {
    const getprofile = async () => {
      await axios({
        url: `${domain}/api/profile/`,
        method: 'GET',
        headers: getheader
      }).then(response => {
        console.log('App=====', response.data);
        dispatch({
          type: 'PRO',
          value: response.data
        });
      }).catch(_ => {
        dispatch({
          type: 'PRO',
          value: null
        });
      })
    }
    getprofile()
  }, [])
  return (
    <BrowserRouter>
      <NabBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/p-:title-:id" component={ProductDetails} />
        <Route exact path="/category-:title-:id" component={SingleCategoryProducts} />
        <Route exact path="/brand-:title-:id" component={SingleBrandsProducts} />
        <Route exact path='/q-:q' component={SearchResultPage} />
        <Route exact path='/login' component={AuthPage} />
        {
          profile !== null &&
          <>
            <Route exact path='/orders' component={OrderPage} />
            <Route exact path='/profile-:username' component={ProfilePage} />
          </>
        }
        <Route exact component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
