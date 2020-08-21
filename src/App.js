import React from "react";
import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shop/shop.component.jsx";
import Homepage from "./pages/homepage/homepage.component.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
