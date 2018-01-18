import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  render() {
    return (
      <div className="card">
        <img src="" alt="Product" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title" />
          <p className="card-text">Price: $</p>
          <a href="#" className="btn btn-primary">
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;