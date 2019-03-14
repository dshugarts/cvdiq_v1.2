myApp.controller('ReportController', ['$http', '$location', 'UserService', 'DataService', 'PostDataService', 'ScoringService', 'UpdateService', function($http, $location, UserService, DataService, PostDataService, ScoringService, UpdateService) {
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
    self.dataArray = ScoringService.dataArray;
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
    self.newNicotine = self.dataArray[0].nicotine_value.toString();
    self.newStress = self.dataArray[0].total_stress_value.toString();
    self.newHistory = self.dataArray[0].family_history_value.toString();

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