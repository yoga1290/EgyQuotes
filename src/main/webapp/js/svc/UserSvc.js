app
    .service('UserSvc',['$http',function($http) {

        this.getUser = function() {
            var chain=
                $http.get('/user');
            return chain;
        };

        this.getPicture = function() {
            var chain=
                $http.get('/user/picture');
            return chain;
        };
    }]);