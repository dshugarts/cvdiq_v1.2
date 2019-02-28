myApp.service('ScoringService', ['$http', '$location', function($http, $location){
       console.log('ScoringService Loaded');
       var self = this;
       self.newEntry = {};
       self.entryObject = {list: []};

       self.postEntry = function(entry) {
           console.log('postEntry = ', entry);
       } // end postEntry

       self.packEntry = function(newEntry, id) {
           console.log('id = ', id, 'entry = ', newEntry);

           let acsm_score = 0;
           if (newEntry.acsm_value === "No") {
               acsm_score = 2;
           } else {
               acsm_score = 0;
           } // end acsm score if

           scoredObject = {
               id: id,
               acsm_value: newEntry.acsm_value,
               acsm_score: acsm_score
           } // end scoredObject

           self.postEntry(scoredObject);
       } // end packEntry



    }]); // end ScoringService