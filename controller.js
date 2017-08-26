var myApp = angular.module('myApp', []);
// the empty array is for all the depencendies for this to run
myApp.controller('myController', function($scope){
	// $scope is the glue between the view and the controller
	// this allows something to be available in html in {{}}
	$scope.firstName = "Merilee";
	$scope.lastName = "Wheelock";
	// console.log($scope.firstName)
	$scope.students = [
		'Chad',
		'Shane',
		'Carla',
		'Porscha',
		'Guido'
	]
	$scope.addStudent = function(){
		// console.log("User submitted!")
		$scope.students.push($scope.newStudent)
		$scope.newStudent = '';
	}
	$scope.removeStudent = function(studentName){
		var index = $scope.students.indexOf(studentName)
		$scope.students.splice(index,1);
	}
})
