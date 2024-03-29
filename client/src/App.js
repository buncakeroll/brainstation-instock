import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import warehouses from "./pages/warehouses";
import warehouseDetails from "./pages/warehouseDetails";
import inventory from "./pages/inventory";
import productSummary from "./pages/productSummary";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/warehouses/:id" component={warehouseDetails} />
          <Route exact path="/inventory/:id" component={productSummary} />
          <Route path="/warehouses" exact component={warehouses} />
          <Route path="/inventory" exact component={inventory} />
          <Route exact path="/" component={warehouses} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
