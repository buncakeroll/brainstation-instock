import React from "react";
import DisplayThing from './../components/DisplayPage/DisplayPage';
import WarehouseCard from './../components/WarehouseCard/WarehouseCard';
import './warehouses.scss';

export default function Warehouses() {
  return <div>
    <DisplayThing
      heading='Locations'
    />
    <div className='locations__labelscontainer'>
      <p className='locations__label'>WAREHOUSE</p>
      <p className='locations__label'>CONTACT</p>
      <p className='locations__label'>CONTACT INFORMATION</p>
      <p className='locations__label'>CATEGORIES</p>
    </div>
    <WarehouseCard />
  </div>;
}
