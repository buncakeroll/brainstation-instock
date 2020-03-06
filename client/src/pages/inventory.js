import React, { Component } from "react";
import CreateProduct from '../components/AddComponent/CreateProduct';
import InventoryTable from "../components/InventoryTable/InventoryTable";
import DisplayPage from '../components/DisplayPage/DisplayPage';
import axios from 'axios';

export default class Inventory extends Component {


  state = {
    list: [],
    deleted: false
  }

  updateList() {
    axios.get('http://localhost:8080/inventory').then(data => {
        this.setState({
            list: data.data
        })
    })
  }

  deleteHandler() {
    this.setState({
      deleted: true
    })
  }

  componentDidUpdate() {
    if (this.state.deleted) {
      //axios.get
      //then set state list to axios get result and changed deleted to false!
    }
  }

  componentDidMount() {
    this.updateList();
  }

    render() {
      return (
        <div>
          <DisplayPage heading='Inventory'/>
          <CreateProduct addHandler={this.updateList.bind(this)}/>
          <InventoryTable list={this.state.list} deleteHandler={this.deleteHandler}/>
        </div>
      )
    }
  }
  