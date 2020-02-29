import Axios from './axios.service';
import { urls } from '../config/config';

export class UsersService {
  static getAllUsers() {
    return Axios.get(urls.getAllUsers);
  }

  static addUser(user) {
    return Axios.post(urls.addUser, user);
  }

  static deleteUser(id) {
    return Axios.delete(`${urls.deleteUser}/${id}`);
  }
}