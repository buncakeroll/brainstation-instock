import React, { Component } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";

export default class productSummary extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ProductDetails props={this.props} />
      </div>
    );
  }
}
