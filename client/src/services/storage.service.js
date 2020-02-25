export class StorageService {
  static getItem(key, storageType) {
    return JSON.parse(window[storageType].getItem(key));
    // switch (storageType) {
    //   case 'localStorage':
    //     return JSON.parse(localStorage.getItem(key));
    //   case 'sessionStorage':
    //     return JSON.parse(sessionStorage.getItem(key));
    //   default:
    //     return null;
    // }
  }

  static setItem(key, value, storageType) {
    window[storageType].setItem(key, JSON.stringify(value));
    // switch (storageType) {
    //   case 'localStorage':
    //     localStorage.setItem(key, JSON.stringify(value));
    //     break;
    //   case 'sessionStorage':
    //     sessionStorage.setItem(key, JSON.stringify(value));
    //     break;
    // }
  }

  static removeItem(key, storageType) {
    window[storageType].removeItem(key);
    // switch (storageType) {
    //   case 'localStorage':
    //     localStorage.removeItem(key);
    //     break;
    //   case 'sessionStorage':
    //     sessionStorage.removeItem(key);
    //     break;
    // }
  }

  static clearAll(storageType) {
    window[storageType].clear();
    // switch (storageType) {
    //   case 'localStorage':
    //     localStorage.clear();
    //   case 'sessionStorage':
    //     sessionStorage.clear();
    // }
  }
}