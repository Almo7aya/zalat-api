import { Router } from 'express';
import { authRoute } from './auth.route';

export const routes = Router();

interface IRoute {
  path: string;
  route: Router;
}

const defaultIRoute: IRoute[] = [
  {
    path: '/auth',
    route: authRoute,
  },
];

defaultIRoute.forEach((route) => {
  routes.use(route.path, route.route);
});
