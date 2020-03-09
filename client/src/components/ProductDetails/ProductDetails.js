import React, { Component } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/svg/Icon-back-arrow.svg";

export default class ProductDetails extends Component {
  state = {
    itemData: {},
    location: {}
  };

  getProductData = id => {
    axios
      .get(`http://localhost:8080/inventory/${id}`)
      .then(result => {
        this.setState({
          itemData: result.data
        });
        this.getWarehouseData(this.state.itemData.warehouseId);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getWarehouseData = id => {
    axios
      .get(`http://localhost:8080/warehouse/${id}`)
      .then(result => {
        this.setState({
          location: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProductData(this.props.props.match.params.id);
  }

  render() {
    const stock = this.state.itemData.isInstock ? (
      <h2 className="product__in">In Stock</h2>
    ) : (
      <h2 className="product__out">Out Of Stock</h2>
    );
    return (
      <div className="product">
        <div className="product__headline">
          <Link to={"/inventory"} className="product__name">
            <img className="arrow" src={backArrow} alt="" />
            <h1 className="product__title">{this.state.itemData.name}</h1>
          </Link>
          <div className="product__instock">{stock}</div>
        </div>
        <div className="product__boddy">
          <div className="product__description">
            <h2 className="product__subtitle">ITEM DESCRIPTION</h2>
            <p className="product__info">{this.state.itemData.description}</p>
          </div>
          <div className="product__contain">
            <div className="product__container1">
              <div className="product__col">
                <h2 className="product__subtitle">ORDERED BY</h2>
                <p className="product__info">{this.state.location.name}</p>
              </div>
              <div className="product__col">
                <h2 className="product__subtitle">REFERENCE NUMBER</h2>
                <p className="product__info">{this.state.itemData.id}</p>
              </div>
            </div>
            <div className="product__container2">
              <div className="product__col">
                <h2 className="product__subtitle">LAST ORDERED</h2>
                <p className="product__info">
                  {this.state.itemData.lastOrdered}
                </p>
              </div>
              <div className="product__col">
                <h2 className="product__subtitle">LOCATION</h2>
                <p className="product__info">
                  {this.state.itemData.city}, {this.state.itemData.country}
                </p>
              </div>
            </div>
            <div className="product__col">
              <h2 className="product__subtitle">QUANTITY</h2>
              <p className="product__info">{this.state.itemData.quantity}</p>
            </div>
            <div className="product__col">
              <h2 className="product__subtitle">CATEGORIES</h2>
              <p className="product__info">{this.state.itemData.categories}</p>
            </div>
          </div>
        </div>
        <button className="product__btn--edit">EDIT</button>
      </div>
    );
  }
}
