const app = angular.module('Food_Cata', []);

app.controller('MainController', ['$http', function($http)
  {
  this.test= "hello";
  this.Recipe = '';

//show all food
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


  this.getRecipe=  (food) => {
    this.Recipe = food;
    console.log(this.Recipe.name);
    }

//delete Recipe
this.deleteRecipe = (id) => {
  console.log("im going to eat you", id);
  $http({
    method: 'Delete',
    url   : '/food/' + id
  }).then (response =>{
    const removeByIndex =
    this.foods.findIndex( food => food._id === id)//ask about this.
    this.foods.splice( removeByIndex, 1
    );
  } , error =>{
    console.error (error.message);
  }).catch (err => console.error('Catch: ', err));
}

}]);
