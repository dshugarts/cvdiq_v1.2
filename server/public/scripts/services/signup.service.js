myApp.service('SignupService', ['$http', '$location', 'UserService', function ($http, $location, UserService) {
    //  console.log('SignupService Loaded');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    id = UserService.userObject.id;

    self.letPass = function () {
        console.log('in Signup Service id = ', id);
        const disclaimer = true;
        const entry = {
            id: id,
            disclaimer: disclaimer
        }
        console.log('in letPass entry = ', entry);
        $http({
            method: 'POST',
            url: '/signup',
            data: {
                entry: entry
            }
        }).then(function (response) {
            $location.path('/general_info');
        }).catch(function (error) {
          //  console.log('disclaimer error');
        })
    } // end letPass




}]);