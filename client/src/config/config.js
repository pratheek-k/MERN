const baseUrl = process.env.REACT_APP_BASE_URL;

class URLs {
  login = `${baseUrl}/api/user/login`;
  getAllUsers = `${baseUrl}/api/user/all`;
  addUser = `${baseUrl}/api/user/add`;
  deleteUser = `${baseUrl}/api/user/delete`;
}

class Constants {
  user = 'user';
  token = 'token';
  localStorage = 'localStorage';
  sessionStorage = 'sessionStorage';
  currentStorage = this.localStorage;
}

const urls = new URLs();
const constants = new Constants();

export {
  urls,
  constants
}