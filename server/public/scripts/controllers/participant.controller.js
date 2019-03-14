myApp.controller('ParticipantController', ['$http', '$location', 'UserService', 'ScoringService', function($http, $location, UserService, ScoringService) {
    //  console.log('UpdateController created');
      var self = this;
      self.userService = UserService;
      self.scoringService = ScoringService
      self.userObject = UserService.userObject;
      self.newEntry = ScoringService.newEntry;
      self.entryObject = ScoringService.entryObject;
      self.id = UserService.userObject.id;
      self.packEntry = ScoringService.packEntry;


    }]);