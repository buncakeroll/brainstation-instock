import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  const inventoryList = [
    {
      "id": "JK2020FD7811201",
      "name": "Scotch Tape",
      "description": "A clear sticky on one side tape, for all your crafting needs",
      "quantity": "400",
      "lastOrdered": "12/01/2018",
      "city": "Toronto",
      "country": "Ontario",
      "isInstock": false,
      "categories": "Crafts, Office supplies, Paper",
      "warehouseId": "W0"
    },
    {
      "id": "JK2020FD7811202",
      "name": "1/4' Wood Screws",
      "description": "The oh so handy 1/4' screws, all our screws are galvanized.",
      "quantity": "0",
      "lastOrdered": "08/30/2019",
      "city": "Toronto",
      "country": "Ontario",
      "isInstock": true,
      "categories": "Construction, Home hardware, Reno",
      "warehouseId": "W4"
    }, ]


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/locations' component={}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
