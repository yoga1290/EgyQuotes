app
    .controller('SettingsCtrl',['$scope','QuoteSvc','TagSvc', 'ChannelSvc','VideoSvc',
function($scope,QuoteSvc,TagSvc, ChannelSvc, VideoSvc) {
	$scope.downloaded = 0;
	$scope.$parent.show = true;
	$scope.exportProgress = 0;
	
	$scope.export=function(){
	    $scope.$parent.click();
	    $scope.exportProgress = 0;
	    QuoteSvc.count().success(function(count){
		var exported = [];
		var total = parseInt(count);
		var page = 10;
		var load = function(o) {
		    $scope.exportProgress = parseInt( o*page*100 / total );
		    if(o >= total)
			Base64.download(JSON.stringify(exported),'quotes.json');
		    else
			QuoteSvc.list(o, page).success(function(response){
			    angular.forEach(response,function(quote,i){
				TagSvc.findByQuoteId(quote.id).success(function(tags){
				    quote.tags=tags;
				    exported.push(quote);

				})
				.finally(function(){
				    if(i === response.length-1) load(o+1);
				});
				
			    });
			})
		};
		load(0);
	    });
	    
	};
	
	$scope.exportCSV=function(){
	    $scope.$parent.click();
	    $scope.exportProgress = 0;
	    QuoteSvc.count().success(function(count){
		var exported = 'quote , personId , videoId , start , end , tags , youtube \n';
		var total = parseInt(count);
		var page = 10;
		var load = function(o) {
		    $scope.exportProgress = parseInt( o*100 / total );
		    if(o >= total)
			Base64.download(exported,'quotes.csv');
		    else
			QuoteSvc.list(o,Math.min(total-o,page)).success(function(response){
			    angular.forEach(response,function(quote,i){
				
				TagSvc.findByQuoteId(quote.key).success(function(tags){
				    
				    var tmp = '';
				    angular.forEach(tags,function(tag){
					tmp += ' #'+ tag.tag;
				    });
				    
				    exported += ''+quote.quote+' , '
					    + quote.personId +' , '
					    +quote.videoId+' , '
					    +parseInt(quote.start)+' , '
					    +parseInt(quote.end)+' , '
					    +tmp+' , '
					    +'https://youtu.be/'+quote.videoId+'?t='+parseInt(quote.start)+'s \n';

				})
				.finally(function(){
				    if(i === response.length-1) load(o+page);
				});
				
			    });
		    })
		};
		load(0);
	    });
	    
	};
	
	$scope.insertChannelByVideoURL = function(videoURL) {
	    var videoId = $scope.videoURL.match(/(?:v\=)+([^&,^?]*)|(?:youtu\.be\/)+([^&,^?]*)|(?:channel\/)([^&,^?]*)/);
	    if(videoId !== null) {
    	    var i = 1;
            if(videoId[i]===undefined) i++;
            if(videoId[i]!==undefined) {
                VideoSvc.getChannelId(videoId[1]).success(function(response) {
                    ChannelSvc.insert(response.items[0].snippet.channelId);
                    alert('channel#' + response.items[0].snippet.channelId + ' is marked as trusted source');
                });
            }
	    }
	};
    }]);