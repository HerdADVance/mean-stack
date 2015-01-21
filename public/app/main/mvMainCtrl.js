// WITHOUT CACHING
// angular.module('app').controller('mvMainCtrl', function($scope, mvCourse){
// 	$scope.courses = mvCourse.query();
// }); 

angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCourses){
	$scope.courses = mvCachedCourses.query();
});