'use strict';

/* jshint -W098 */
angular.module('mean.geekdom').controller('GeekdomController', ['$scope', 'Global', 'Geekdom',
  function($scope, Global, Geekdom) {
    $scope.global = Global;
    $scope.package = {
      name: 'geekdom'
    };
  }
]);
