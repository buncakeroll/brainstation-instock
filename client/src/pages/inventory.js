import React, { Component } from "react";
import CreateProduct from '../components/AddComponent/CreateProduct';
import InventoryTable from "../components/InventoryTable/InventoryTable";
import DisplayPage from '../components/DisplayPage/DisplayPage';
import axios from 'axios';

export default class Inventory extends Component {

  state = {
    list: []
  }

  updateList() {
    axios.get('http://localhost:8080/inventory').then(data => {
        this.setState({
            list: data.data
        })
    })
  }

  searchHandler(userRequest) {
    //Requests inventory list in case of repeated inventory search
    axios.get('http://localhost:8080/inventory').then(data => {
      let filtered;
      //If the user entered an empty string the full list is rendered
      if (userRequest === '') {
        filtered = data.data
      } else {
        //Otherwise user request is converted to lower case and appropriate 
        //feilds are checked for it's presence
        const lowerRequest = userRequest.toLowerCase();
        filtered = data.data.filter(item => {
        let inStock = item.isInstock === true ? 'in Stock' : 'out of stock';
        //Checks name, order date, location, quantity, and status
        if (item.name.toLowerCase().includes(lowerRequest) || 
            item.lastOrdered.includes(userRequest) ||
            item.city.toLowerCase().includes(lowerRequest) ||
            item.country.toLowerCase().includes(lowerRequest) ||
            item.quantity.includes(userRequest) ||
            inStock.includes(lowerRequest)) {
              return item
            }
        })
      }
      //re-renders components with filtered list
      this.setState({
        list: filtered
      })
    })
  }

  deleteHandler(id) {
    axios.delete('http://localhost:8080/inventory/'+id).then(newList => {
      this.setState({
        list: newList.data
      })
    })
  }

  componentDidMount() {
    this.updateList();
  }

    render() {
      return (
        <div>
          <DisplayPage heading='Inventory' searchHandler={this.searchHandler.bind(this)}/>
          <CreateProduct addHandler={this.updateList.bind(this)}/>
          <InventoryTable list={this.state.list} deleteHandler={this.deleteHandler.bind(this)}/>
        </div>
      )
    }
  }
  