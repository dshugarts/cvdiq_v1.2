myApp.service('ScoringService', ['$http', '$location', function($http, $location){
       console.log('ScoringService Loaded');
       var self = this;
       self.newEntry = {};
       self.entryObject = {list: []};

       self.packEntry = function(entry, id) {
           console.log('id = ', id, 'entry = ', entry);
       } // end packEntry



    }]); // end ScoringService