import withRoot from "./modules/withRoot";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCategories from "./modules/views/ProductCategories";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import AppAppBar from "./modules/views/AppAppBar";
import Quote from "./Quote";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </Router>
  );
}

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
