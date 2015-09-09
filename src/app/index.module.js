import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import NavbarDirective from './components/navbar/navbar.directive';
import ServerError from './components/errors/server_error.directive';

angular.module(
  'blog',
  ['ui.router', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap', 'restangular']
);

angular.module('blog')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('navbar', NavbarDirective)
  .directive('serverError', ServerError);
