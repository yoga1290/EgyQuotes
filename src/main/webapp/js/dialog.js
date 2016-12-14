app.run(['$location', function($location) {
    $(document).click(function(e) {
	if (e.target.className.toUpperCase()==='OVERLAY') {
		$location.path('/');
		window.location.href = $location.absUrl();
	}
    });
}]);