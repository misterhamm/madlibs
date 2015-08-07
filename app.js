var myApp = angular.module('myApp', ['ngMessages'])
    
        myApp.controller('MyCtrl', function($scope) {
            
            //fill placeholder values/story placeholders
            $scope.name = '{Name}';
            $scope.job = '{Occupation}';
            $scope.taskTedious = '{Tedious Task}';
            $scope.jobDirty = '{Dirty Job}';
            $scope.celebrity = '{Obnoxious Celebrity}';
            $scope.skill = '{Useless Skill}';
            $scope.adjective = '{Adjective}';
            $scope.crazyName = '{Crazy Name}';
            $scope.number = '{Number}';
            
            //Male/Female support
            $scope.gender = {"pronoun":"she", "possesive":"her", "objective":"her"};
            $scope.female = function() {
                $scope.gender = {"pronoun":"she", "possesive":"her", "objective":"her"};
            };
            $scope.male = function() {
                $scope.gender = {"pronoun":"he", "possesive":"his", "objective":"him"};
            };
            
            //Submit Function
            $scope.submit = function() {
                //does something 
            };
});
                               
                               
