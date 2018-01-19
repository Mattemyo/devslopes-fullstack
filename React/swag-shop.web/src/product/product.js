import React, { Component } from "react";
import "./product.css";
import wishlist from "../wishlist/wishlist";
import DataService from "../services/data-service";
import NotificationService, {
  NOTIF_WISHLIST_CHANGED
} from "../services/notification-service";
let ds = new DataService();
let ns = new NotificationService();

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { onWishList: ds.itemOnWishList() };
    // bind functions
    this.onButtonlicked = this.onButtonlicked.bind(this);
    this.onWishListChanged = this.onWishListChanged.bind(this);
  }

  componentDidMount() {
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
  }

  componentWillMount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }
  onWishListChanged(newWishList) {
    this.setState({
      onWishList: ds.itemOnWishList(this.props.product)
    });
  }

  onButtonlicked = () => {
    if (this.state.onWishList) {
      ds.removeWishListItem(this.props.product);
    } else {
      ds.addWishListItem(this.props.product);
    }
  };

  render() {
    let btnClass;

    if (this.state.onWishList) {
      btnClass = "btn btn-danger";
    } else {
      btnClass = "btn btn-primary";
    }

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
            className={btnClass}
          >
            {this.state.onWishList === true
              ? "Remove From Wishlist"
              : "Add to Cart"}
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
