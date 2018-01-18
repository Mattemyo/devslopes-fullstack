import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "../product/product";

import HttpService from "../services/http-service";

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    //bind products
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }),
      err => {};
  };

  render() {
    return (
      <div className="container-fluid App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="constainer App-main">
          <div className="row">
            <Product
              className="col-sm-4"
              price="4.34"
              title="cool toy gun"
              imgUrl="https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54ca62c3d99f0_-_waterguns-5.jpg"
            />
            <Product
              className="col-sm-4"
              price="4.34"
              title="cool toy gun"
              imgUrl="https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54ca62c3d99f0_-_waterguns-5.jpg"
            />
            <Product
              className="col-sm-4"
              price="4.34"
              title="cool toy gun"
              imgUrl="https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54ca62c3d99f0_-_waterguns-5.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
