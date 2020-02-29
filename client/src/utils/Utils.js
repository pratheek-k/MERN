import routes from "../routes/RouteConfig";

export default class Utils {
  static getTitle(path) {
    const currentRoute = routes.find(route => path === route.path);
    const title = currentRoute ? currentRoute.title : ''

    return title;
  }
}