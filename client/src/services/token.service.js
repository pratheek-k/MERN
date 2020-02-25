import { StorageService } from './storage.service';
import { constants } from '../config/config';

export class TokenService {
  static setAuthToken(token) {
    StorageService.setItem(constants.token, token, constants.currentStorage);
  }

  static getAuthToken() {
    let token = StorageService.getItem(constants.token, constants.currentStorage);

    if (token && token !== '' && token !== null) {
      token = `Bearer ${token}`;
    }

    return token;
  }

  static clearToken() {
    StorageService.removeItem(constants.token, constants.localStorage);
    StorageService.removeItem(constants.token, constants.sessionStorage);
  }
}