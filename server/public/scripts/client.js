var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LandingController as vm',
      // resolve: {
      //   getuser : function(UserService){
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/landing', {
      templateUrl: '/views/templates/landing.html',
      controller: 'LoginController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/report', {
      templateUrl: '/views/templates/report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/resources', {
      templateUrl: '/views/templates/resources.html',
      controller: 'ResourcesController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/update', {
      templateUrl: '/views/templates/update.html',
      controller: 'UpdateController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/modify', {
      templateUrl: '/views/templates/modify.html',
      controller: 'ModifyController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm',
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/disclaimer', {
      templateUrl: '/views/templates/disclaimer.html',
      controller: 'DisclaimerController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/data', {
      templateUrl: '/views/templates/data.html',
      controller: 'DataController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/scoreChart', {
      templateUrl: '/views/templates/scoreChart.html',
      controller: 'ScoreChartController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/glucose', {
      templateUrl: '/views/charts/glucose.html',
      controller: 'GlucoseController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/hdl', {
      templateUrl: '/views/charts/hdl.html',
      controller: 'HDLController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/ldl', {
      templateUrl: '/views/charts/ldl.html',
      controller: 'LDLController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/trg', {
      templateUrl: '/views/charts/trg.html',
      controller: 'TRGController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/hearthealth', {
      templateUrl: '/views/charts/hearthealth.html',
      controller: 'HeartHealthController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/waist', {
      templateUrl: '/views/charts/waist.html',
      controller: 'WaistController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/activity', {
      templateUrl: '/views/charts/activity.html',
      controller: 'ActivityController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/aaa', {
      templateUrl: '/views/templates/aaa.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/bp_report', {
      templateUrl: '/views/reports/bp_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/trg_report', {
      templateUrl: '/views/reports/trg_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/bmi_report', {
      templateUrl: '/views/reports/bmi_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/sleep_report', {
      templateUrl: '/views/reports/sleep_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/hhs_report', {
      templateUrl: '/views/reports/hhs_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/bp_resource', {
      templateUrl: '/views/resources/bp_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/hdl_resource', {
      templateUrl: '/views/resources/hdl_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/ldl_resource', {
      templateUrl: '/views/resources/ldl_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/glu_resource', {
      templateUrl: '/views/resources/glu_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/waist_resource', {
      templateUrl: '/views/resources/waist_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/activity_resource', {
      templateUrl: '/views/resources/activity_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/nicotine_resource', {
      templateUrl: '/views/resources/nicotine_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/sleep_resource', {
      templateUrl: '/views/resources/sleep_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/history_report', {
      templateUrl: '/views/reports/history_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/nicotine_report', {
      templateUrl: '/views/reports/nicotine_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/activity_report', {
      templateUrl: '/views/reports/activity_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/waist_report', {
      templateUrl: '/views/reports/waist_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/ldl_report', {
      templateUrl: '/views/reports/ldl_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/hdl_report', {
      templateUrl: '/views/reports/hdl_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/age_report', {
      templateUrl: '/views/reports/age_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/glu_report', {
      templateUrl: '/views/reports/glu_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/bmi', {
      templateUrl: '/views/charts/bmi.html',
      controller: 'BMIController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/sleep', {
      templateUrl: '/views/charts/sleep.html',
      controller: 'SleepController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/weight', {
      templateUrl: '/views/charts/weight.html',
      controller: 'WeightController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/bp', {
      templateUrl: '/views/charts/bp.html',
      controller: 'BPController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
