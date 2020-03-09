import React, { Component } from "react";
import DisplayThing from './../components/DisplayPage/DisplayPage';
import WarehouseCard from './../components/WarehouseCard/WarehouseCard';
import CreateWarehouse from './../components/AddComponent/CreateWarehouse';
import './warehouses.scss';
import axios from 'axios';

class Warehouses extends Component {

  state = {
    reload: false
  }

  reloader = () => {
    this.setState({
      reload: true
    })
  }

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
      <WarehouseCard areload={this.state.reload} />
      <CreateWarehouse reload={this.reloader} />
    </div >
    )
  }
}

export default Warehouses;