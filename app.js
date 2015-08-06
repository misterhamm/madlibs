var myApp = angular.module('myApp', [])
    
        myApp.controller('MyCtrl', function($scope) {
            $scope.version = '42.42';
            $scope.name = '{Name}';
            $scope.job = '{Occupation}';
            $scope.taskTedious = '{Tedious Task}';
            $scope.jobDirty = '{Dirty Job}';
            $scope.celebrity = '{Obnoxious Celebrity}';
            $scope.skill = '{Useless Skill}';
            $scope.adjective = '{Adjective}';
            $scope.crazyName = '{Crazy Name}';
            $scope.number = '{Number}';
            
            $scope.gender = {"pronoun":"she", "possesive":"her", "objective":"her"};
            
            $scope.female = function() {
                $scope.gender = {"pronoun":"she", "possesive":"her", "objective":"her"};
            };
            
            $scope.male = function() {
                $scope.gender = {"pronoun":"he", "possesive":"his", "objective":"him"};
            };
});
                               
                               
