import React, { Component } from "react";
import CreateProduct from '../components/AddComponent/CreateProduct';
import InventoryTable from "../components/InventoryTable/InventoryTable";
import DisplayPage from '../components/DisplayPage/DisplayPage';

export default class Inventory extends Component {
    render() {
      return (
        <div>
          <DisplayPage heading='Inventory'/>
          <CreateProduct />
          <InventoryTable list={undefined}/>
        </div>
      )
    }
  }
  