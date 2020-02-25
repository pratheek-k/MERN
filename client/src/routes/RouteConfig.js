import {
  Login,
  Home,
  ManageUser,
  ErrorPage
} from "../components";

const routes = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/manage-user',
    exact: true,
    component: ManageUser
  },
  {
    path:'/error',
    exact: true,
    component: ErrorPage
  }
];

export default routes;