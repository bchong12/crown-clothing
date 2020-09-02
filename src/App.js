import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Homepage from "./pages/homepage/homepage.component.jsx";
import SignPage from "./pages/sign-in-sign-up/sign-in-sign-up.component.jsx";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
