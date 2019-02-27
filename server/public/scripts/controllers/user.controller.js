myApp.controller('UserController', ['$location', 'UserService', 'DataService', function($location, UserService, DataService) {
//  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.DataService = DataService;
  self.userObject = UserService.userObject;
  self.dataArray = DataService.dataArray;
  self.getData = DataService.getData;
  self.id = UserService.userObject.id;
  self.myScore = DataService.myScore;
  self.pScore = DataService.pScore;

  self.newData = function(){
    $location.url('/update');
}
 // self.getData(self.id);
  
 const sectors = [{
  color : "red",
      lo : 0,
      hi : 6.9
                },{
      color : "gold",
      lo : 8,
      hi : 14
    },{
      color : "green",
      lo : 14.9,
      hi : 20
    }];

  var g = new JustGage({
    id: "gauge",
    value: DataService.myScore,
    min: 0,
    max: 20,
    customSectors: sectors,
    pointer: true,
    pointerOptions: {
      toplength: -12,
      bottomlength: 50,
      bottomwidth: 8,
      color: 'black',
    },
    gaugeWidthScale: 0.5,
    title: "My Heart Health Score",
    label: "Healthy Points Earned"
  });


}]);
