import ng, { ui } from 'angular';

export const AppModule = ng.module('app', ['ui.router']);

AppModule.config([
    '$stateProvider',
    ($stateProvider: ui.IStateProvider) => {
      $stateProvider
        .state('main', {
          url: '/main',
          template: '<ui-view/>',
        });
    }
]);
