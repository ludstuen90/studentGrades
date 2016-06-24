var myApp = angular.module('myApp',[]);

myApp.controller('inputs', ['$scope', '$http', function($scope, $http){

$scope.addRecord = function(){
  event.preventDefault();
  var newStudent = {
    assignment_number: $scope.assNum,
    first_name: $scope.fName,
    last_name: $scope.lName,
    score: $scope.score,
    date_completed: $scope.dCompleted,
    completed: $scope.trueFalse
  };
$http({
  method: 'POST',
  url: '/newStudentPost',
  data: newStudent
});

  console.log(newStudent);

};

}]);
