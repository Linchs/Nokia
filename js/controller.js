var contactsApp=angular.module('contactsApp',[]);

contactsApp.controller('jsonCtrl', function($scope){
	JSON.stringify(data);
	$scope.contacts=data;
});

contactsApp.controller('searchCntrl', function ($scope) {
    $scope.acnts = false;
	$scope.jPlaceholder = true;
	$scope.contactsDT = false;
	$scope.linkClass="notActive";
	
	$scope.searchBtn = function () {
		$scope.acnts = true;		
    }
	
	$scope.showContacts = function () {
		if ($scope.linkClass === "notActive")
			$scope.linkClass = "active";
		else		
		$scope.linkClass = "notActive";
		
		$scope.jPlaceholder = false;
		$scope.contactsDT = true;		
	}	
});

