let instance = null;
const wishList = [];

class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  addWishListItem = item => {
    wishList.push(item);
  };

  removeWishListItem = item => {
    for (let i = 0; i < wishList.length; i++) {
      const element = wishList[i];
      if (element._id === item._id) {
        wishList.splice(i, 1);
        break;
      }
    }
  };
}

export default DataService;
