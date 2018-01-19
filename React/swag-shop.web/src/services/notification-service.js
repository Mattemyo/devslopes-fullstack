const observers = {};
let instance = null;

class NotificationService {
  consructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
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

export default NotificationService