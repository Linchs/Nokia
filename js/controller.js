var contactsApp=angular.module('contactsApp',[]);

contactsApp.controller('jsonCtrl', function($scope){
	//JSON.stringify(data);
	//$scope.contacts=data;

	var exec=[], itdm=[], infl=[];
	for (var i=0; i<data.length; i++){
		if (data[i].Title == "Executive")
			exec.push (data[i]);
		if (data[i].Title == "IT Decision Maker")
			itdm.push (data[i]);
		if (data[i].Title == "Influencer")
			infl.push (data[i]);
	}
	$scope.exec=exec;
	$scope.itdm=itdm;
	$scope.infl=infl;
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

