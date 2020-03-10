import React, { Component } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";

export default class productSummary extends Component {
  render() {
    return (
      <div>
        <ProductDetails props={this.props} />
      </div>
    );
  }
}
