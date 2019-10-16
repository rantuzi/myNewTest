angular.module('drag',[])
  .controller("body", function($scope, $http) {
    $scope.goods=[
      {name:'连衣裙',price:200,regdate:new Date()},
      {name:'衬衣',price:100,regdate:new Date("2017-5-5")}
    ];
    $http.get('http://m-test.fxyishu.com/api/v2/banner/getBanners?show_in=103').then(function(response) {
      console.log(response);
    })
    $http({
      method: 'GET',
      url: 'http://m-test.fxyishu.com/api/v2/banner/getBanners?show_in=103'
    }).then(function successCallback(response){
      // 请求成功
    },function errorCallback(response) {
      // 请求失败
    })
  })

  
//   .config(['$routeProvider', function($routeProvider){
//     $routeProvider
//     .when('/',{template:'这是首页页面'})
//     .when('/computers',{template:'这是电脑分类页面'})
//     .when('/printers',{template:'这是打印机页面'})
//     .otherwise({redirectTo:'/'});
// }]);
