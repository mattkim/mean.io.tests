'use strict';

/* jshint -W098 */
angular.module('mean.myhome').controller('MyhomeController', ['$scope', 'Global', 'Myhome',
  function($scope, Global, Myhome) {
    $scope.global = Global;
    $scope.package = {
      name: 'myhome'
    };
  }
]);
