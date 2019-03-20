myApp.controller('ReportController', ['$http', '$location', 'UserService', 'DataService', 'PostDataService', 'ScoringService', 'UpdateService', function($http, $location, UserService, DataService, PostDataService, ScoringService, UpdateService) {
  //  console.log('ReportController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.PostDataService = PostDataService;
    self.getGluData = PostDataService.getGluData;
    self.getInactivityData = PostDataService.getInactivityData;
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
    self.dataArray = ScoringService.dataArray;
    self.getData = ScoringService.getData;
    self.id = UserService.userObject.id;
    self.getAllReportData = ScoringService.getAllReportData;
    self.reportPage = PostDataService.reportPage;
    self.resourcePage = PostDataService.resourcePage;
    self.ageReport = ScoringService.ageReport;
    self.bpReport = ScoringService.bpReport;
    self.stressReport = ScoringService.stressReport;
    self.inactivityReport = ScoringService.inactivityReport;
    self.acsmReport = ScoringService.acsmReport;
    self.waistReport = ScoringService.waistReport;
    self.historyReport = ScoringService.historyReport;
    self.activityReport = ScoringService.activityReport;
    self.nicotineReport = ScoringService.nicotineReport;
    self.sleepReport = ScoringService.sleepReport;
    self.trgReport = ScoringService.trgReport;
    self.bmiReport = ScoringService.bmiReport;
    self.wellReport = ScoringService.wellReport;
    self.mybmi = ScoringService.mybmi;
    self.wellRisk = ScoringService.wellRisk;
    self.sleepRisk = ScoringService.sleepRisk;
    self.trgRisk = ScoringService.trgRisk;
    self.bmiRisk = ScoringService.bmiRisk;
    self.ageRisk = ScoringService.ageRisk;
    self.bpRisk = ScoringService.bpRisk;
    self.inactivityRisk = ScoringService.inactivityRisk;
    self.stressRisk = ScoringService.stressRisk;
    self.acsmRisk = ScoringService.acsmRisk;
    self.waistRisk = ScoringService.waistRisk;
    self.activityRisk = ScoringService.activityRisk;
    self.historyRisk = ScoringService.historyRisk;
    self.nicotineRisk = ScoringService.nicotineRisk;
    self.goBpReport = DataService.goBpReport;
    self.goGluReport = DataService.goGluReport;
    self.goAgeReport = DataService.goAgeReport;
    self.goLdlReport = DataService.goLdlReport;
    self.goHhsReport = DataService.goHhsReport;
    self.goInactivityReport = DataService.goInactivityReport;
    self.goWaistReport = DataService.goWaistReport;
    self.goHistoryReport = DataService.goHistoryReport;
    self.goActivityReport = DataService.goActivityReport;
    self.goNicotineReport = DataService.goNicotineReport;
    self.goSleepReport = DataService.goSleepReport;
    self.goTrgReport = DataService.goTrgReport;
    self.goBmiReport = DataService.goBmiReport;
    self.nicotineDisplay = ScoringService.nicotineDisplay;
    self.historyDisplay = ScoringService.historyDisplay;
    self.stressDisplay = ScoringService.stressDisplay;
    self.ageClass = ScoringService.ageClass;
    self.bpClass = ScoringService.bpClass;
    self.inactivityClass = ScoringService.inactivityClass;
    self.stressClass = ScoringService.stressClass;
    self.acsmClass = ScoringService.acsmClass;
    self.waistClass = ScoringService.waistClass;
    self.historyClass = ScoringService.historyClass;
    self.activityClass = ScoringService.activityClass;
    self.nicotineClass = ScoringService.nicotineClass;
    self.sleepClass = ScoringService.sleepClass;
    self.bmiClass = ScoringService.bmiClass;
    self.wellClass = ScoringService.wellClass;
    self.newNicotine = ScoringService.dataArray.list[0].nicotine_value.toString();
    self.newStress = ScoringService.dataArray.list[0].total_stress_value.toString();
    self.newHistory = ScoringService.dataArray.list[0].family_history_value.toString();

    console.log(self.dataArray);


    self.dashView = function() {
      $location.url('/dashboard');
    }

    self.reportView = function() {
      $location.url('/report');
    }

    self.editData = function(data){
      data.editing = true;
    }

    self.cancelUpdate = function(data){
      data.editing = false;
    }
    
    self.goAgeInfo = function() {
      self.hi = true;
    }

    self.updateData = function(){
      $location.url('/modify_entry');
  }
   
  self.viewResources = function(){
    $location.url('/resources');
}


self.saveData = function(data, nic, his){
  //  console.log('PUT DATA', data, nic, his);

    updateObject = {
        entry_id: data.entry_id,
        id: data.id,
        data_date: data.data_date,
        age_value: data.age_value,
        family_history_value: self.newHistory,
        physical_activity_value: data.physical_activity_value,
        systolic_value: data.systolic_value,
        diastolic_value: data.diastolic_value,
        nicotine_value: self.newNicotine,
        inactivity_value: data.inactivity_value,
        acsm_value: data.acsm_value,
        total_stress_value: self.newStress,
        stress_management_value: data.stress_management_value,
        waist_value: data.waist_value,
        sleep_value: data.sleep_value,
        height_value: data.height_value,
        weight_value: data.weight_value,
        gender: data.gender
    }
  //  console.log('updateObject', updateObject);
    UpdateService.packEntry(updateObject);
  } // end saveData


  }]); // end Report Controller