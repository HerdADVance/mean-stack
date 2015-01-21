// WITHOUT CACHING
// angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCourse, $routeParams){
// 	$scope.course = mvCourse.get({_id:$routeParams.id})
// })

angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCachedCourses, $routeParams){
	mvCachedCourses.query().$promise.then(function(collection){
		collection.forEach(function(course){
			if(course._id === $routeParams.id){
				$scope.course = course;
			}
		})
	})
});