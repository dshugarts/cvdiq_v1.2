myApp.service('UpdateService', ['$http', '$location', 'DataService', function($http, $location, DataService){
//    console.log('UpdateService Loaded');
    var self = this;
    self.dataService = DataService;
    self.getData = DataService.getData;
    self.newEntry = {};
    self.entryObject = {};




    self.putData = function(entry) {
      //  console.log(entry);
        $http({
            method: 'PUT',
            url: `/data/update/${entry.entry_id}`,
            data: {entry: entry}
        }).then(function(response) {
          //  console.log('Update response = ', response);
            self.getData(entry.id);
        }).then(function(response) {
            swal("Data successfully updated!", "", "success")
            $location.url('/data');
            self.newEntry = {};
        }).catch(function (error) {
          //  console.log('put error', error);
        })
    } // end putData


    self.scoreData = function(newEntry) {
      //  console.log('updateObject = ', newEntry);
        let glu_score = 0;
        if (newEntry.glu_value >= 100 && newEntry.glu_value < 126) {
            glu_score = 1;
        } else if (newEntry.glu_value < 100) {
            glu_score = 2;
        } else {
            glu_score = 0;
        } // end glu score if
        
        let nicotine_score = 0;
        if (newEntry.nicotine_value === "false") {
            nicotine_score = 2;
        } else {
            nicotine_value = 0;
        } // end nicotine if
       
        let sleep_score = 0;
        if (newEntry.sleep_value >= 7) {
            sleep_score = 2;
        } else {
            sleep_score = 0;
        } // end sleep if
    
        let family_history_score = 0;
        if (newEntry.family_history_value === "false") {
            family_history_score = 2;
        } else {
            family_history_score = 0;
        } // end family history if
    
        let bp_score = 0;
        if ((newEntry.systolic_value < 180 && newEntry.systolic_value > 130) || (newEntry.diastolic_value <120 && newEntry.diastolic_value > 80)) {
            bp_score = 1;
        } else if (newEntry.systolic_value < 131 && newEntry.diastolic_value < 81) {
            bp_score = 2;
        } else {
            bp_score = 0;
        } // end bp score
    
        let physical_activity_score = 0;
        if (newEntry.physical_activity_value >= 150) {
            physical_activity_score = 2;
        } else {
            physical_activity_score = 0;
        } // end activity score if
    
        let age_score = 0;
        if ((newEntry.age_value < 45 && newEntry.gender === "M") || (newEntry.age_value < 55 && newEntry.gender === "F")) {
            age_score = 2;
        } else {
            age_score = 0;
        } // end age score if
    
        let waist_score = 0;
        if ((newEntry.waist_value < 40 && newEntry.gender === "M") || (newEntry.waist_value < 35 && newEntry.gender === "F")) {
            waist_score = 2;
        } else {
            waist_score = 0;
        } // end waist score if
    
        let hdl_score = 0;
        if (newEntry.hdl_value > 59) {
            hdl_score = 2;
        } else if ((newEntry.hdl_value < 60 && newEntry.hdl_value > 40 && newEntry.gender === "M") || (newEntry.hdl_value < 60 && newEntry.hdl_value > 50 && newEntry.gender === "F")) {
            hdl_score = 1;
        } else {
            hdl_score = 0;
        } // end hdl score if
    
        let ldl_score = 0;
        if (newEntry.ldl_value < 100) {
            ldl_score = 2; 
        } else if (newEntry.ldl_value > 99 && newEntry.ldl_value < 130) {
            ldl_score = 1;
        } else {
            ldl_score = 0;
        } // end ldl score if
    
        let cvd_score = 0;
        cvd_score += age_score;
        cvd_score += waist_score;
        cvd_score += bp_score;
        cvd_score += hdl_score;
        cvd_score += ldl_score;
        cvd_score += glu_score;
        cvd_score += physical_activity_score;
        cvd_score += sleep_score;
        cvd_score += nicotine_score;
        cvd_score += family_history_score;
    
        let now_data_date = new Date();
    
        entryObject = {
            entry_id: newEntry.entry_id,
            id: newEntry.id,
            data_date: newEntry.data_date,
            age_value: newEntry.age_value,
            family_history_value: newEntry.family_history_value,
            physical_activity_value: newEntry.physical_activity_value,
            systolic_value: newEntry.systolic_value,
            diastolic_value: newEntry.diastolic_value,
            nicotine_value: newEntry.nicotine_value,
            glu_value: newEntry.glu_value,
            hdl_value: newEntry.hdl_value,
            ldl_value: newEntry.ldl_value,
            trg_value: newEntry.trg_value,
            waist_value: newEntry.waist_value,
            sleep_value: newEntry.sleep_value,
            height_value: newEntry.height_value,
            weight_value: newEntry.weight_value,
            gender: newEntry.gender,
            age_score: age_score,
            physical_activity_score: physical_activity_score,
            family_history_score: family_history_score,
            bp_score: bp_score,
            nicotine_score: nicotine_score,
            glu_score: glu_score,
            hdl_score: hdl_score,
            ldl_score: ldl_score,
            waist_score: waist_score,
            sleep_score: sleep_score,
            cvd_score: cvd_score
        } // end entryObject
    
       
        self.putData(entryObject);



    } // end scoreData

  

}]);