import Axios from './axios.service';
import history from './history.service';
import { StorageService } from './index';
import { urls, constants, roleList } from '../config/config';

export class AuthService {
  static login(data) {
    return Axios.post(urls.login, data, {
      headers: {
        'Skip-Auth': true
      }
    });
  }

  static logout() {
    StorageService.clearAll(constants.currentStorage);
    history.push('/');
  }

  static getCurrentUser() {
    return StorageService.getItem(constants.user, constants.currentStorage);
  }

  static setCurrentUser(user) {
    StorageService.setItem(constants.user, user, constants.currentStorage);
  }

  static isUserAdmin() {
    const currentUser = this.getCurrentUser();

    if (currentUser && currentUser.roles && currentUser.roles.includes(roleList.admin)) {
      return true;
    }

    return false;
  }
}