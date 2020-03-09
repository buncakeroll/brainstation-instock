import React, { Component } from "react";
import DisplayThing from "./../components/DisplayPage/DisplayPage";
import WarehouseCard from "./../components/WarehouseCard/WarehouseCard";
import CreateWarehouse from "./../components/AddComponent/CreateWarehouse";
import "./warehouses.scss";
import axios from "axios";

class Warehouses extends Component {
  state = {
    reload: false,
    list: []
  };

  reloader = () => {
    this.setState({
      reload: true
    });
  };

  updateList() {
    axios.get("http://localhost:8080/warehouse").then(data => {
      this.setState({
        list: data.data
      });
    });
  }

  searchHandler(userRequest) {
    console.log(userRequest);
    axios.get("http://localhost:8080/warehouse").then(data => {
      let filtered;
      if (userRequest === "") {
        filtered = data.data;
      } else {
        const lowerRequest = userRequest.toLowerCase();
        filtered = data.data.filter(item => {
          if (
            item.name.toLowerCase().includes(lowerRequest) ||
            item.address.street.toLowerCase().includes(lowerRequest) ||
            item.address.location.toLowerCase().includes(lowerRequest) ||
            item.inventoryCategories.toLowerCase().includes(lowerRequest) ||
            item.contact.name.toLowerCase().includes(lowerRequest) ||
            item.contact.position.toLowerCase().includes(lowerRequest) ||
            item.contact.phone.includes(userRequest) ||
            item.contact.email.toLowerCase().includes(lowerRequest)
          ) {
            return item;
          }
        });
      }
      console.log(filtered);
      this.setState({
        list: filtered
      });
    });
  }

  componentDidMount() {
    this.updateList();
  }

  render() {
    return (
      <div>
        <DisplayThing
          heading={"Location"}
          searchHandler={this.searchHandler.bind(this)}
        />
        <div className="locations__labelscontainer">
          <p className="locations__label locations__label1">WAREHOUSE</p>
          <div className="locations__container">
            <p className="locations__label locations__label2">CONTACT</p>
            <p className="locations__label locations__label3">
              CONTACT INFORMATION
            </p>
            <p className="locations__label locations__label4">CATEGORIES</p>
          </div>
        </div>
        <WarehouseCard
          warehouseList={this.state.list}
          reload={this.state.reload}
        />
        <CreateWarehouse reload={this.reloader} />
      </div>
    );
  }
}

export default Warehouses;
