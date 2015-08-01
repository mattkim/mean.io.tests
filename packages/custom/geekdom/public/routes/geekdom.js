'use strict';

angular.module('mean.geekdom').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('geekdom example page', {
      url: '/geekdom/example',
      templateUrl: 'geekdom/views/index.html'
    });
  }
]);
