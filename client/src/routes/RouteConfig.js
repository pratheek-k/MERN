import {
  Login,
  Home,
  ManageUser,
  ErrorPage
} from '../components';
import { roles } from '../config/config';

const routes = [
  {
    path: '/',
    exact: true,
    component: Login,
    access: roles.any,
    isPrivate: false,
    title: 'Login',
    noNav: true
  },
  {
    path: '/home',
    exact: true,
    component: Home,
    access: roles.all,
    isPrivate: true,
    title: 'Home',
    noNav: false
  },
  {
    path: '/manage-user',
    exact: true,
    component: ManageUser,
    access: roles.admin,
    isPrivate: true,
    title: 'Manage User',
    noNav: false
  },
  {
    path:'/error',
    exact: true,
    component: ErrorPage,
    access: roles.any,
    isPrivate: false,
    title: 'Error',
    noNav: true
  }
];

export default routes;