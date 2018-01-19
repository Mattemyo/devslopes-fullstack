import React, { Component } from "react";
import "./product.css";
import DataService from "../services/data-service";

const ds = new DataService();
class Product extends Component {
  constructor(props) {
    super(props);
    // bind functions
    this.onButtonlicked = this.onButtonlicked.bind(this);
  }

  onButtonlicked = () => {
    ds.addWishListItem(this.props.product);
  };

  render() {
    return (
      <div className="card product">
        <img
          src={this.props.product.imgUrl}
          alt="Product"
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title"> {this.props.product.title} </h4>
          <p className="card-text">Price: ${this.props.product.price}</p>
          <a
            href="#"
            onClick={() => this.onButtonlicked()}
            className="btn btn-primary"
          >
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
