import Axios from './axios.service';
import { StorageService } from './index';
import { urls, constants } from '../config/config';

export class UserService {
  static login(data) {
    return Axios.post(urls.login, data, {
      headers: {
        'Skip-Auth': true
      }
    });
  }

  static getAllUsers(data) {
    return Axios.get(urls.getAllUsers);
  }

  static deleteUser(id) {
    return Axios.delete(`${urls.deleteUser}/${id}`)
  }

  static setUser(user) {
    StorageService.setItem(constants.user, user, constants.currentStorage);
  }
}