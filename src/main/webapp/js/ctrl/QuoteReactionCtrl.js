app.controller('QuoteReactionCtrl', ['$scope', '$routeParams', 'ReactionSvc', function($scope, $routeParams, ReactionSvc) {
    $scope.selectReaction = function(reaction) {
	ReactionSvc
	    .insert($routeParams.quoteId, reaction)
	    .success(function(response) {
		updateReactions();
	    });
    };
    $scope.reactions = [];
    function updateReactions() {
        if (!$routeParams.quoteId) return;
        ReactionSvc
            .findByQuoteId($routeParams.quoteId)
            .success(function(response) {
            console.log(response);
            //TODO:
                $scope.reactions = {};
            angular.forEach(response, function(reaction) {
              if ($scope.reactions[reaction.reaction] === undefined) {
                $scope.reactions[reaction.reaction] = [reaction];
              } else {
                $scope.reactions[reaction.reaction].push(reaction);
              }
            });
            console.log('reactions:',reaction);
            });
    }
    updateReactions();
}]);