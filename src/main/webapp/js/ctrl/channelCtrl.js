app
.controller('channelCtrl',[
	'$scope',
	'$timeout',
	function(sp,to){
		sp.channels=[];


                sp.init=function(){
                    ChannelSvc.list(0,100,function(response){
                        
                        
                        var temp=[];
                        var loop=function(i){
                            
                                    YTSvc.getChannelData(response[i].key.name,function(data){
                                        temp.push({
                                                logo:data.thumbnail
                                            });
                                        if(i+1<response.length)
                                                loop(i+1);
                                        else to(function(){
                                            sp.channels=temp;
                                            console.log(sp.channels);
                                        },10);
                                        
                                        
                                     });
                          
                        };
                            
                        loop(0);
                    });
                };
                sp.init();


	}]);