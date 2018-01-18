import React, { Component } from "react";
import "./wishlist.css";

import ProductCondensed from "../product-condensed/product-condensed";

class WishList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishList: [
        {
          title: "Bologna Killer",
          price: 23.99,
          _id: "klj4rlk4"
        },
        {
          title: "China",
          price: 89.21,
          _id: "fda4"
        },
        {
          title: "Superman",
          price: 56.84,
          _id: "dsf654"
        }
      ]
    };

    //bind funcion
    this.createWishList = this.createWishList.bind(this);
  }
  createWishList = () => {
    return this.state.wishList.map(product => {
      console.log("hej");
      return <ProductCondensed product={product} key={product._id} />;
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
            {this.createWishList()}
            hej
          </ul>
        </div>
      </div>
    );
  }
}

export default WishList;
