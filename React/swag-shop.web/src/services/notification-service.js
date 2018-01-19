export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

const observers = {};
let instance = null;

class NotificationService {
  consructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  postNotification = (notifName, data) => {
    const obs = observers[notifName];
    for (let i = 0; i < obs.length; i++) {
      const obj = obs[i];
      obj.callBack(data);
    }
  };

  removeObserver = (observer, notifName) => {
    const obs = observers[notifName];

    if (obs) {
      for (let i = 0; i < obs.length; i++) {
        const element = obs[i];
        if (observer === element.observer) {
          obs.splice(i, 1);
          observers[notifName] = obs;
          break;
        }
      }
    }
  };

  addObserver = (notifName, observer, callBack) => {
    const obs = observers[notifName];

    if (!obs) {
      observers[notifName] = [];
    }
    const obj = { observer: observer, callBack: callBack };
    observers[notifName].push(obj);
  };
}

export default NotificationService;
