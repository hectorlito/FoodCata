const app = angular.module('Food_Cata', []);

app.controller('MainController', ['$http', function($http)
  {
  this.test= "hello";

  this.getfoods= () => {
    $http({
       url: '/food',
    method: 'GET'
  }).then((response) =>{
    console.log(response.data);
    this.foods = response.data
      console.log(this.foods);
  }, error => {
      console.log(error);
  }).catch(err => this.error = 'server broke?')
}

this.getfoods();

}]);
