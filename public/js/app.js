const app = angular.module('Food_Cata', []);

app.controller('MainController', ['$http', function($http)
  {
  this.test= "hello";
  this.Recipe = '';
  this.food = "";

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

this.formdata = {};


//create
this.processForm = () => {
  $http({
    method: 'POST',
    url   : '/food',
    data  : this.formdata
  }).then(response => {
    this.foods.push(response.data)//NEED TO FINISH THIS LINE
    console.table(this.foods)
    this.formdata = {};
  }, error => {
    console.error(error.message);
  }).catch(err => console.error('Catch', err));
}
//udpate
this.formDataUpdate= {};
this.updateRecipe =  (food) => {
  console.log("this is food ", food);
  this.food = food;
}

this.updateRecipe2= () => {
  $http({
    method : 'PUT',
    url    : '/food/' + this.food._id,
    data   : this.formDataUpdate
  }).then(response => {
       // this.food = food;
    this.food = this.formDataUpdate;
    const updateByIndex = this.foods.findIndex(food => food._id === response.data._id)
    this.foods.splice(updateByIndex, 1, response.data)
    console.log(this.food);
    console.log(this.formdata);
    console.log(this.Recipe);
    console.log("formdata", response.data.formdata);
    this.formDataUpdate = {};
  }, error =>{
    console.log(error.message);
  }).catch ( err => console.error('Catch:', err))
}


}]);
