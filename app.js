var myApp = angular.module('myApp', ['ngMessages', 'ngAnimate'])
    
       /* myApp.controller('genderCtrl')
        myApp.controller('storyTwoCtrl')*/
        myApp.controller('MyCtrl', function($scope) {
            
            //fill placeholder values/story placeholders
           /* $scope.name = '{Name}';
            $scope.job = '{Occupation}';
            $scope.taskTedious = '{Tedious Task}';
            $scope.jobDirty = '{Dirty Job}';
            $scope.celebrity = '{Obnoxious Celebrity}';
            $scope.skill = '{Useless Skill}';
            $scope.adjective = '{Adjective}';
            $scope.crazyName = '{Crazy Name}';
            $scope.number = '{Number}';*/
            
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
                $scope.showStory=true; 
            };
            
            //Reset 
            $scope.reset = function() {
                $scope.name = '';
                $scope.job = '';
                $scope.taskTedious = '';
                $scope.jobDirty = '';
                $scope.celebrity = '';
                $scope.skill = '';
                $scope.adjective = '';
                $scope.crazyName = '';
                $scope.number = '';
                angular.element(document.querySelector('.numberInput')).val('');
                $scope.showStory=false; 
            };
});
                               
                               
