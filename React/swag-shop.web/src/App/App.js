import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Components
import Product from "../product/product";
import Wishlist from "../wishlist/wishlist";

// Services
import HttpService from "../services/http-service";

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };

    //bind products
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    const self = this;
    http.getProducts().then(data => {
      self.setState({ products: data });
    }),
      err => {};
  };

  productList = () => {
    return this.state.products.map(product => {
      return (
        <div className="col-sm-4" key={product._id}>
          <Product product={product} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="constainer-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row"> {this.productList()}</div>
            </div>

            <div className="col-sm-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
