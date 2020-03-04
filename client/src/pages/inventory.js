import React from "react";
import InventoryTable from "../components/InventoryTable/InventoryTable";
import DisplayPage from '../components/DisplayPage/DisplayPage';
import AddButton from "../components/AddButton/AddButton";

export default function Inventory() {
    return (
      <div>
        <DisplayPage heading='Inventory'/>
        <AddButton />
        <InventoryTable />
      </div>
      );
  }
  