myApp.controller('LoginController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    // console.log('LoginController created');
    var self = this;
    self.dataService = DataService;
    self.user = {
      username: '',
      password: '',
      user_role: 1
    };
    self.message = '';

    self.login = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Enter your username and password!";
        self.user.username = "";
        self.user.password = "";
      } else {
       // console.log('sending to server...', self.user);
        $http.post('/api/user/login', self.user).then(
          function (response) {
            if (response.status == 200) {
            //  console.log('success: ', response.data);
              // location works with SPA (ng-route)
              self.determineUser(self.user);
             // $location.path('/disclaimer');
            } else {
             // console.log('failure error: ', response);
              self.message = "Incorrect credentials. Please try again.";
              console.log('ERROR 1');
              self.user.username = "";
              self.user.password = "";
            }
          },
          function (response) {
           // console.log('failure error: ', response);
            self.message = "Incorrect credentials. Please try again.";
            console.log('ERROR 2');
            self.user.username = "";
            self.user.password = "";
          });
      }
    };

    self.registerUser = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Choose a username and password!";
        self.user.username = "";
        self.user.password = "";
      } else {
       // console.log('sending to server...', self.user);
        $http.post('/api/user/register', self.user).then(function (response) {
        //  console.log('success');
        let user = self.user;
        console.log('registerUser user = ', user);
        self.newLogin(user);
        },
          function (response) {
          //  console.log('error');
            self.message = "Something went wrong. Please try again."
          });
      }
    } // end registerUser

    self.newLogin = function (user) {
       console.log('sending to server...', user);
       $http.post('/api/user/login', user).then(
         function (response) {
           if (response.status == 200) {
           //  console.log('success: ', response.data);
             // location works with SPA (ng-route)
             $location.url('/terms');
           } else {
           //  console.log('failure error: ', response);
             self.message = "Incorrect credentials. Please try again.";
           }
         },
         function (response) {
          // console.log('failure error: ', response);
           self.message = "Incorrect credentials. Please try again.";
         });
     }; // end newLogin

    self.determineUser = function (user) {
      const name = user.username;
      $http({
        method: 'GET',
        url: `/path/${name}`
      }).then(function (response) {
        const id = response.data[0].id;
        const role = response.data[0].user_role;
        DataService.getData(id);
        console.log('in determineUser ', id, role);
        self.determineRole(id, role);
      }).catch(function (error) {
       // console.log('Error getting data', error);
      })
    } // end determineUser

    self.determineRole = function (id, role) {
      console.log('in determineRole ',id, role);
      if (role === 4) {
        $location.url('/super_AdminHome');
      } else if (role === 3) {
        $location.url('/admin_Home');
      } else if (role === 2) {
        $location.url('/coach_Home');
      } else if (role === 1) {
        $location.url('/dashboard');
      } else {
        self.message = "Something went wrong. Please try again."
        $location.url('/home');
      }
    } // end determineRole




}]);
