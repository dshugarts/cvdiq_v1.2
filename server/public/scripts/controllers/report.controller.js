myApp.controller('ReportController', ['$http', '$location', 'UserService', 'DataService', 'PostDataService', function($http, $location, UserService, DataService, PostDataService) {
  //  console.log('ReportController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.PostDataService = PostDataService;
    self.getGluData = PostDataService.getGluData;
    self.getHdlData = PostDataService.getHdlData;
    self.getLdlData = PostDataService.getLdlData;
    self.getTrgData = PostDataService.getTrgData;
    self.getHeartHealthData = PostDataService.getHeartHealthData;
    self.getWaistData = PostDataService.getWaistData;
    self.getSleepData = PostDataService.getSleepData;
    self.getWeightData = PostDataService.getWeightData;
    self.getActivityData = PostDataService.getActivityData;
    self.getBpData = PostDataService.getBpData;
    self.getbmiData = PostDataService.getbmiData;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.getAllReportData = DataService.getAllReportData;
    self.reportPage = PostDataService.reportPage;
    self.resourcePage = PostDataService.resourcePage;
    self.ageReport = DataService.ageReport;
    self.bpReport = DataService.bpReport;
    self.hdlReport = DataService.hdlReport;
    self.ldlReport = DataService.ldlReport;
    self.gluReport = DataService.gluReport;
    self.waistReport = DataService.waistReport;
    self.historyReport = DataService.historyReport;
    self.activityReport = DataService.activityReport;
    self.nicotineReport = DataService.nicotineReport;
    self.sleepReport = DataService.sleepReport;
    self.trgReport = DataService.trgReport;
    self.bmiReport = DataService.bmiReport;
    self.hhsReport = DataService.hhsReport;
    self.mybmi = DataService.mybmi;
    self.cvdRisk = DataService.cvdRisk;
    self.sleepRisk = DataService.sleepRisk;
    self.trgRisk = DataService.trgRisk;
    self.bmiRisk = DataService.bmiRisk;
    self.ageRisk = DataService.ageRisk;
    self.bpRisk = DataService.bpRisk;
    self.ldlRisk = DataService.ldlRisk;
    self.hdlRisk = DataService.hdlRisk;
    self.gluRisk = DataService.gluRisk;
    self.waistRisk = DataService.waistRisk;
    self.activityRisk = DataService.activityRisk;
    self.historyRisk = DataService.historyRisk;
    self.nicotineRisk = DataService.nicotineRisk;
    self.goBpReport = DataService.goBpReport;
    self.goGluReport = DataService.goGluReport;
    self.goAgeReport = DataService.goAgeReport;
    self.goLdlReport = DataService.goLdlReport;
    self.goHhsReport = DataService.goHhsReport;
    self.goHdlReport = DataService.goHdlReport;
    self.goWaistReport = DataService.goWaistReport;
    self.goHistoryReport = DataService.goHistoryReport;
    self.goActivityReport = DataService.goActivityReport;
    self.goNicotineReport = DataService.goNicotineReport;
    self.goSleepReport = DataService.goSleepReport;
    self.goTrgReport = DataService.goTrgReport;
    self.goBmiReport = DataService.goBmiReport;
    self.nicotineDisplay = DataService.nicotineDisplay;
    self.historyDisplay = DataService.historyDisplay;
    self.ageClass = DataService.ageClass;
    self.bpClass = DataService.bpClass;
    self.ldlClass = DataService.ldlClass;
    self.hdlClass = DataService.hdlClass;
    self.gluClass = DataService.gluClass;
    self.waistClass = DataService.waistClass;
    self.historyClass = DataService.historyClass;
    self.activityClass = DataService.activityClass;
    self.nicotineClass = DataService.nicotineClass;
    self.sleepClass = DataService.sleepClass;
    self.bmiClass = DataService.bmiClass;
    self.trgClass = DataService.trgClass;
    self.hhsClass = DataService.hhsClass;
    
    self.goAgeInfo = function() {
      self.hi = true;
    }

    self.updateData = function(){
      $location.url('/modify');
  }
   
  self.viewResources = function(){
    $location.url('/resources');
}




  }]); // end Report Controller