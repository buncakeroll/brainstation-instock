import React, { Component } from "react";
import DisplayThing from "./../components/DisplayPage/DisplayPage";
import WarehouseCard from "./../components/WarehouseCard/WarehouseCard";
import CreateWarehouse from "./../components/AddComponent/CreateWarehouse";
import "./warehouses.scss";
import axios from "axios";

class Warehouses extends Component {
  state = {
    reload: false,
    list: [],
    warehouseList: {},
    displayForm: false
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


  toggleForm = () => {
    console.log("toggle")
    if (!this.state.displayForm) {
      this.setState({
        displayForm: true
      });
    } else {
      this.setState({
        displayForm: false
      });
    }
  };

  submitHandler = event => {
    event.preventDefault();
    let warehouseNameInput = event.target.warehouseName.value;
    let warehouseIdInput = event.target.warehouseId.value;
    let warehouseAddressInput = event.target.warehouseAddress.value;
    let locationInput = event.target.location.value;
    let contactNameInput = event.target.contactName.value;
    let contactPositionInput = event.target.contactPosition.value;
    let contactTelephoneInput = event.target.contactTelephone.value;
    let contactEmailInput = event.target.contactEmail.value;
    let descriptionInput = event.target.description.value;

    if (warehouseNameInput === '') {
      return alert('Please enter a warehouse name');
    }
    if (warehouseIdInput === '') {
      return alert('Please enter a warehouse id');
    }
    if (warehouseAddressInput === '') {
      return alert('Please enter an address');
    }
    if (locationInput === '') {
      return alert('Please enter a location');
    }
    if (contactNameInput === '') {
      return alert('Please enter a name');
    }
    if (contactPositionInput === '') {
      return alert('Please enter a position');
    }
    if (contactTelephoneInput === '') {
      return alert('Please enter a phone number');
    }
    if (contactEmailInput === '') {
      return alert('Please enter an email address');
    }
    if (descriptionInput === '') {
      return alert('Please enter a category')
    }

    axios.post('http://localhost:8080/warehouse', {
      id: warehouseIdInput,
      name: warehouseNameInput,
      address: {
        street: warehouseAddressInput,
        location: locationInput
      },
      contact: {
        name: contactNameInput,
        position: contactPositionInput,
        phone: contactTelephoneInput,
        email: contactEmailInput
      },
      inventoryCategories: descriptionInput
    }).then(() => {
      this.toggleForm();
      axios.get("http://localhost:8080/warehouse").then(data => {
        this.setState({
          list: data.data
        });
      });
    })
  };


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
        <CreateWarehouse displayForm={this.state.displayForm} submitHandler={this.submitHandler} toggleForm={this.toggleForm} reload={this.reloader} />
      </div>
    );
  }
}

export default Warehouses;
