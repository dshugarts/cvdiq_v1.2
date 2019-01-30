
myApp.controller('LandingController', ['$location', function($location) {
    // console.log('LandingController created');
    var self = this;

    self.toLogin = function() {
        $location.url('/landing')
      } // end toLogin

  }]);


