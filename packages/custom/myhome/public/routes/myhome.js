'use strict';

//angular.module('mean.myhome').config(['$stateProvider',
//  function($stateProvider) {
//    $stateProvider.state('myhome example page', {
//      url: '/myhome/example',
//      templateUrl: 'myhome/views/index.html'
//    });
//  }
//]);

angular.module('mean.myhome').config(['$viewPathProvider', '$stateProvider',
  function($viewPathProvider, $stateProvider) {
    $viewPathProvider.override('system/views/index.html', 'myhome/views/index.html');
    //$viewPathProvider.override('system/views/header.html', 'myhome/views/header.html');
    $stateProvider.state('myhome example page', {
      url: '/myhome/example',
      templateUrl: 'myhome/views/index.html'
    });
}]);

//angular.module('mean.myhome', ['mean.system'])
//.config(['$viewPathProvider', function($viewPathProvider) {
//    $viewPathProvider.override('system/views/header.html', 'myhome/views/header.html');
//}]);
