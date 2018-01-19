import NotificationService, {
  NOTIF_WISHLIST_CHANGED
} from "./notification-service";
import wishlist from "../wishlist/wishlist";

let ns = new NotificationService();

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
    ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
  };

  removeWishListItem = item => {
    for (let i = 0; i < wishList.length; i++) {
      const element = wishList[i];
      if (element._id === item._id) {
        wishList.splice(i, 1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);

        break;
      }
    }
  };
}

export default DataService;
