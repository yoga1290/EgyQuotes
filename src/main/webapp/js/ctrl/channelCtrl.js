app
.controller('channelCtrl',[
	'$scope',
	'$timeout',
	function(sp,to){
		sp.channels=[];


                sp.init=function(){
                    var tmp=[];
                    ChannelSvc.list(0,100,function(response){
                            $(response).each(function(i,channel){
                                    console.log(channel);
                                    YTSvc.getChannelData(channel.key.name,function(data){
                                        
                                        tmp.push({
                                            logo:data.thumbnail
                                        }); 
                                    });
                                    if(i===response.length-1)
                                        to(function(){
                                            sp.channels=tmp;
                                        });
                            });

                    });
                };
                sp.init();


	}]);