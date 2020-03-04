const baseUrl = process.env.REACT_APP_BASE_URL;

class URLs {
  login = `${baseUrl}/api/auth/login`;
  getAllUsers = `${baseUrl}/api/users/all`;
  addUser = `${baseUrl}/api/users/add`;
  deleteUser = `${baseUrl}/api/users/delete`;
}

class Constants {
  user = 'user';
  token = 'token';
  localStorage = 'localStorage';
  sessionStorage = 'sessionStorage';
  currentStorage = this.localStorage;
}

class Roles {
  admin = ['Admin'];
  user = ['User'];
  all = ['Admin', 'User'];
  any = [];
}

class RoleList {
  admin = 'Admin';
  user = 'User';
}

const urls = new URLs();
const constants = new Constants();
const roles = new Roles();
const roleList = new RoleList();

export {
  urls,
  constants,
  roles,
  roleList
}