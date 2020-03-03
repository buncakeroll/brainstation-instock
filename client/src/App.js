import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import warehouses from "./pages/Warehouses";
import inventory from "./pages/inventory";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={warehouses} />
          <Route path="/warehouses" component={warehouses} />
          <Route path="/inventory" component={inventory} />
          <Route exact path="/warehouses/:id" component={warehouses} />
          <Route exact path="/inventory/:id" component={inventory} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
