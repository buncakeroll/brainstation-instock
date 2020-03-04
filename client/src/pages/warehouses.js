import React, { Component } from "react";
import DisplayThing from './../components/DisplayPage/DisplayPage';
import WarehouseCard from './../components/WarehouseCard/WarehouseCard';
import './warehouses.scss';

class Warehouses extends Component {

  render() {
    return (<div>
      <DisplayThing
        heading={'Location'}
      />
      <div className='locations__labelscontainer'>
        <p className='locations__label locations__label1'>WAREHOUSE</p>
        <div className='locations__container'>
          <p className='locations__label locations__label2'>CONTACT</p>
          <p className='locations__label locations__label3'>CONTACT INFORMATION</p>
          <p className='locations__label locations__label4'>CATEGORIES</p>
        </div>
      </div>
      <WarehouseCard />
    </div >
    )
  }
}

export default Warehouses;