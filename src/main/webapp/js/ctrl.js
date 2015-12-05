app
    .controller('dashCtrl',function($scope,facebookSvc,QuoteSvc,QuoteAnalyticsSvc,VideoSvc,ChannelSvc){
	$scope.isAuthenticated=false;
	$scope.picture='';
	facebookSvc.getUserPicture().success(function(data){
	    $scope.picture=data.picture.data.url;
	    $scope.isAuthenticated=true;
	});
	$scope.login=function(){
	    location.href=config.OAuth.facebook.login;
	};
	
	$scope.topLikedQuotes=[];
	$scope.topLikesPage=5;
	$scope.loadTopLikes=function(){
	    QuoteAnalyticsSvc.findByTopLikes($scope.topLikedQuotes.length,$scope.topLikesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.likes=o.likes;
				$scope.topLikedQuotes.push(quote);
			    });
			});
			    
		    });
	};
	$scope.topSharesQuotes=[];
	$scope.topSharesPage=5;
	$scope.loadTopShares=function(){
	    QuoteAnalyticsSvc.findByTopShares($scope.topSharesQuotes.length,$scope.topSharesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.shares=o.shares;
				$scope.topSharesQuotes.push(quote);
			    });
			});
			
		    });
	};
//	$scope.loadTopShares();
	
	$scope.videoURL='';
	$scope.onVideoURLChange=function(){
	    var videoid = $scope.videoURL.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
	    if(videoid == null) return;
		location.href="#/new/"+videoid[1];
	};
	
	$scope.channels=[];
	$scope.loadChannels=function(){
	    ChannelSvc.list(0,100).success(function(channels){
		angular.forEach(channels,function(channel,i){
		    VideoSvc.getChannelData(channel.channelId)
			.success(function(data){
			    $scope.channels.push(data.items[0].snippet.thumbnails.default.url);
			});
		});
	    });
	};
	$scope.loadChannels();
	
    })
    .controller('gridCtrl',
	    ['$scope','QuoteSvc','TagSvc','PersonSvc','VideoSvc','$timeout',
	    function(sp,QuoteSvc,TagSvc,PersonSvc,VideoSvc,to){
		    sp.quotes=[];
		    QuoteSvc.query(0,50,[],[]).success(function(response){
			    sp.quotes=response;
		    });
		    
		    var onload=(function(){
			if(location.href.indexOf("access_token=")>0)
			    localStorage.setItem('access_token',location.href.substring(location.href.indexOf("access_token=")+13,location.href.indexOf('&expires')));
		    }());
		    
		    /*sp.video={playQuotes:function(quote){
			    video.execAfterReady(function(){
				video.playQuotes(quote);
			    });
			    
		    }};//*/
		
		    sp.menu=(function($scope){
			var self={};
			return self={
			    newQuote:function(){
				$scope.$broadcast('newQuote');
			    }
			};
		    }(sp));
		    
		    sp.onQuoteClick=function(quote){
			location.href='#/quote/'+quote.key.id;
		    };
		    
		    sp.search=(function(sp){
			var self={};
			return self={
				field:'',
				result:[],
				backClick:true,
				isHidden:function(){
				    return ( self.backClick); 
				},
				tagSelected:{},
				isTagSelected:function(index){
				    return self.tagSelected[self.tags[index].key.name]===true;
				},
				personSelected:{},
				isPersonSelected:function(person){
				    return self.personSelected[person.key.name]===true;
				},
				selected:{
				    people:[],
				    tags:[]
				},
				tags:[],
				people:[],
				lastReq:null,
				lastPersonReq:null,
				query:function(){
				    if(self.field.length<=0) return;
				    
				    self.tags=[];
				    self.people=[];
				    
				    if(self.lastReq!==null) self.lastReq.abort();
				    self.lastReq=
					TagSvc
					.find(self.field)
					.success(function(response){ 
					    self.tags=response;
					    self.tagSelected={};
					});
				    self.people=[];
				    if(self.lastPersonReq!==null) self.lastPersonReq.abort();
				    self.lastPersonReq=
				    PersonSvc
					.findByName(self.field)
					.success(function(response){
					    self.people=response;			    
	    				    self.personSelected={};
					});
				},
				selectTag:function(index){
				    if(self.tagSelected[self.tags[index].key.name]!==true)
				    {
					self.selected.tags.push(self.tags[index]);
					self.tagSelected[self.tags[index].key.name]=true;
				    }
				    else{
					for(var i=0;i<self.selected.tags.length;i++)
					    if(self.selected.tags[i].key.name===self.tags[index].key.name)
						self.selected.tags.splice(i,1);
					self.tagSelected[self.tags[index].key.name]=false;
				    }
				    self.search();
				},
				unselectTag:function(tag){
				    if(self.tagSelected[tag.key.name]!==false)
				    {
					self.tagSelected[tag.key.name]=false;
					$(self.selected.tags).each(function(i,tag2){
					    if(tag2.key.name===tag.key.name)
						self.selected.tags.splice(i,1);
					});
				    }
				    self.search();
				},
				unselectPerson:function(person){
				    if(self.personSelected[person.key.name]!==false)
				    {
					self.personSelected[person.key.name]=false;
					$(self.selected.people).each(function(i,person2){
					    if(person2.key.name===person.key.name)
						self.selected.people.splice(i,1);
					});
					
				    }
				    self.search();
				},
				selectPerson:function(index){
				    if(self.personSelected[self.people[index].key.name]!==true)
				    {
					self.selected.people.push(self.people[index]);
					self.personSelected[self.people[index].key.name]=true;
				    }
				    else
				    {
					for(var i=0;i<self.selected.people.length;i++)
					    if(self.selected.people[i].key.name===self.people[index].key.name)
						self.selected.people.splice(i,1);
					self.personSelected[self.people[index].key.name]=false;
				    }
				    self.search();
				},
				search:function(){
				    var tags=[],personId=[];
				    $(self.selected.tags).each(function(i,tag){
					tags.push(tag.key.name);
				    });
				    $(self.selected.people).each(function(i,person){
					personId.push(person.key.name);
				    });
				    sp.quoteLoader.setQuery(tags,personId);
				}
			};
		    }(sp));

		    
		    sp.quoteLoader=(function(){
			    var self={};
			    return self={
				    offset:0,
				    page:10,
				    count:10,
				    hasNext:true,
				    tags:[],
				    personIds:[],
				    init:function(){
					    var tmp=
						    $('<div>')
						    .css('top','0px')
						    .css('visibility','hidden')
						    .css('height','100%')
						    .appendTo('body');
					    var h=tmp.height();
						    tmp.css('display','none').remove();
					    $(document).scroll(function(){
						    if(self.isBusy) return;
						    
						    var H=$(document).height()-10;
						    var s=$('body').scrollTop();
						    if(s+h>=H)
//						    if((H-s)<h)
							    self.more();
					    });
				    },
				    setQuery:function(tags,personIds){
					self.tags=tags;
					self.personIds=personIds;
					self.offset=0;
					self.hasNext=true;
					sp.quotes=[];
					self.more();
				    },
				    more:function(){
					    if(!self.hasNext) return;
					    QuoteSvc
						    .query(self.offset,self.page,self.tags,self.personIds)
						    .success(function(response){
							if(response.length==0)
							{
							    self.hasNext=false;
							    return;
							}
							$(response).each(function(i,quote){
							    sp.quotes.push(quote);
							    
							    /*
							    VideoSvc.getChannelId(quote.videoId)
							    .success(function(videoData){
								VideoSvc.getChannelData(videoData.items[0].id)
								.success(function(channelData){
								    quote.logo=channelData.items[0].snippet.thumbnails.default.url;
								});
							    });//*/
							    
							});
							
						    });
					self.offset+=self.page;
				    }
			    };
		    }());
		    sp.quoteLoader.init();
		    
		    
		    sp.parseInt=function(x){
			return parseInt(x);
		    };
		    sp.to2Digit=function(x){
			x=parseInt(x)+'';
			while(x.length<2)
			    x+='0'+x;
			return x;
		    };
		    sp.stopPropagation=function(e){
			e.stopPropagation();
		    };
    }]);



    var video=(function(){
	var self={};
	return self={
	    isYTReady:false,
	    q:[],
	    execAfterReady:function(x){
		if(x!==undefined)
		    self.q.push(x);
//		if(self.isYTReady)
//		    for(var i=0;i<self.q.length;i++)
//			self.q.pop()();
	    }
	};
    }());
    function onYouTubeIframeAPIReady(){
	    video.isYTReady=true;
	    video.execAfterReady();
    };

	app
		.controller('videoCtrl',
			['$scope','QuoteSvc','TagSvc','PersonSvc','VideoSvc','ChannelSvc','$timeout','$routeParams',
			function(sp,QuoteSvc,TagSvc,PersonSvc,VideoSvc,ChannelSvc,to,$routeParams){
				
				
				sp.vidProgress=(function(){
				    var self={};
				    return self={
					result:[],
					show:false,
					isBarActive:function(index){
					    return false;//(parseInt(video.playlist[self.currentPlayingIndex].properties.start)===self.result[index].start);
					},
					getPreBarWidth:function(index){
					    if(index-1>=0)
						    return ( (self.result[index].start-self.result[index-1].end)*100/video.player.getDuration() );
					    return ( self.result[index].start*100/video.duration );
					},
					getBarWidth:function(index){
					    return ( (self.result[index].end-self.result[index].start)*100/video.player.getDuration() );
					},
					getLastBarWidth:function(){
					    if(self.result.length>0)
						    return ( (video.player.getDuration() - self.result[self.result.length-1].end) *100/video.player.getDuration());
						return 0;
					},
					init:function(videoId){
					    self.result=[];
					    self.show=false;
					    VideoSvc.findById(videoId).success(function(response){
						var result=[];
						for(var i=0;i<response.start.length;i++)
						    result.push({
							start:response.start[i],
							end:response.end[i],
							quoteId:response.quoteId[i]
						    });
						
						result.sort(function(a,b){
						    if(a.start<b.start) return -1;
						    if(a.start>b.start) return 1;
						    return (a.end-b.end);
						});
						self.result=result;
						self.show=true;
//						(function(d, s, id) {  var js, fjs = d.getElementsByTagName(s)[0];  if (d.getElementById(id)) return;  js = d.createElement(s); js.id = id;  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";  fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
					    });
					}
				    };
				}());
//				if(video.isYTReady)
//				    sp.video=video;
//				else
//				if(sp.video===undefined)
				sp.video=video=(function(sp,to){
				var self={};
				return self={
					isYTReady:video.isYTReady,
					q:video.q,
					execAfterReady:function(x){
					    if(x!==undefined)
						self.q.push(x);
					    if(self.isYTReady)
						for(var i=0;i<self.q.length;i++)
						    self.q.pop()();
					},
					show:false,
					duration:1,
					videoId:'',
					playlist:[],
					currentPlayingIndex:0,
					player:null,
					needProgressUpdate:false,
					onReady:function(){
					},
					onStateChange:function(event){
					    if(event.data===YT.PlayerState.PLAYING && self.needProgressUpdate)
					    {
						self.needProgressUpdate=false;
						self.duration=self.player.getDuration();
						//sp.vidProgress.init(self.videoId);
					    }
					    if(event.data===YT.PlayerState.ENDED)
						    if(self.currentPlayingIndex+1 < self.playlist.length)
					    {
						    self.currentPlayingIndex++;
						    self.load(self.playlist[self.currentPlayingIndex].videoId,self.playlist[self.currentPlayingIndex].start,self.playlist[self.currentPlayingIndex].end);
					    }
					},
					playQuotes:function(quotes){
					    self.playlist=quotes;
					    self.currentPlayingIndex=0;
					    self.load(quotes[0].videoId,quotes[0].start,quotes[0].end);
					},
					load:function(videoId,start,end){
					    self.videoId=videoId;
					    self.needProgressUpdate=true;
					if(!self.isYTReady) 
					{
						self.execAfterReady(function(){
						self.load(videoId,start,end);
						});
						return;
					}
					to(function(){
						sp.show=true;
						sp.childClick=sp.parentClick=false;
						$(document).scrollTop(0);
					});
					var param={'autoplay': 1,'suggestedQuality': 'small','videoId': videoId,'suggestedQuality': 'small','origin':'https://egyquotes.appspot.com'};
					var playerVars={ 'autoplay': 1,'videoId': videoId,'suggestedQuality': 'small','origin':'https://egyquotes.appspot.com'};
					if((location.href.indexOf('#e=')>-1))
						playerVars.end=param.endSeconds=parseInt(
							location.href.substring(
							location.href.indexOf('e=')+2,
							location.href.indexOf('s=')) );
					if((location.href.indexOf('s=')>-1))
						playerVars.start=param.startSeconds=parseInt(
							location.href.substring(
							location.href.indexOf('s=')+2,
							location.href.indexOf('v=')) );
					if(start!==undefined)
						playerVars.start=param.startSeconds=parseInt(start);
					if(end!==undefined)
						playerVars.end=param.endSeconds=parseInt(end);


					if(self.player===null || self.player===undefined)
						self.player=new YT.Player('video', {
						height: '390',
						width: '640',
						videoId: videoId,
						playerVars: playerVars,
						events: {
						  'onReady': function(event){
			//			        	  	YTPlayer=event.target;
		//					    self.player=event.target;
//							video.player.loadVideoById(param);
							self.onReady(event);
		//					    self.player.setPlaybackQuality('small');
			//					       video.updateProgress();
			//					TimeLine.load(video.videoId,event.target);       
						  },
						  'onStateChange': function(event){
							  self.onStateChange(event);
			//			        	  	 var player=event.target;
			//			        	  	 if(event.data==YT.PlayerState.PLAYING)
			//			        	  		 TimeLine.setPointer(player);
						  }
						}
						});
					else
					{
					    self.player.loadVideoById(param);
					}
				}
				};
			}(sp,to));
			
			if((location.href.indexOf('#s=')>-1)||(location.href.indexOf('#/s=')>-1)){
			    var s=parseInt(
					location.href.substring(
					location.href.indexOf('s=')+2,
					location.href.indexOf('v=')) );
			    var v=location.href.substring(
					location.href.indexOf('v=')+2,
					location.href.length);
					//TODO: load quotes
			    video.load(v,s);
			}

			sp.show=false;
			sp.childClick=false;
			sp.parentClick=false;
			sp.isHidden=function(){
				return !sp.show;//(!sp.show || (!sp.childClick && sp.parentClick));
			};
			sp.overlayClick=function(){
				sp.parentClick=true;
				sp.show=!(!sp.childClick && sp.parentClick);
				sp.childClick=sp.parentClick=false;
				if(!sp.show)
				{
					video.player.stopVideo();
					sp.newQuote.destroy();
					window.location.href="#/";
				}
			};
			sp.click=function(){
			    sp.childClick=true;
			};
			
			
			sp.newQuote=(function(PersonSvc,QuoteSvc,TagSvc){
			    var self={};
			    return self={
				quotes:[],
				text:'',
				show:false,
				authorName:'',
				videoURL:'',
				authors:[],
				selectedAuthor:null,
				findByAuthorName:function(event){
				    if(event.keyCode===13){
					PersonSvc.findByName(self.authorName)
					    .success(function(response){
						if(response.length>0)
						    self.authors=response;
						else
						    self.selectedAuthor={key:{name:self.authorName}};
					    });
					event.preventDefault();
					event.stopPropagation();
				    }
				},
				tagNames:[],
				selectedTags:{},
				tagNameQuery:'',
				findByTagName:function(){
				    TagSvc.find(self.tagNameQuery)
					.success(function(response){
					    self.tagNames=response;
					});
				},
				selectTag:function(tag){
				    if(self.selectedTags[tag.key.name]!==true)
					self.selectedTags[tag.key.name]=true;
				    else if(self.selectedTags[tag.key.name]!==undefined)
					self.selectedTags[tag.key.name]=false;
				},
				/*
				onVideoURLChange:function(){
				    var videoid = self.videoURL.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
				    if(videoid == null) return;
				    else
					video.execAfterReady(function(){
					    sp.newQuote.show=true;
					    sp.show=true;
					    sp.video.playlist=[];
					    video.load(videoid[1]);
					});
				    
				},//*/
				isRecording:false,
				recordingStartTime:0,
				recordingEndTime:0,
				quoteId:null,
				edit:function(quote){
				    self.quoteId=quote.id;
				},
				record:function(){
				    //TODO: alert or smth?
				    if(self.isRecording)
				    {
					self.isRecording=false;
					var nQuote={
					    videoId: video.player.getVideoData().video_id,
					    start: self.recordingStartTime,
					    quote: self.text,
					    personId: self.selectedAuthor.key.name,
					    end: video.player.getCurrentTime()
					};
					if(self.quoteId!==null)
					{
					    nQuote.quoteId=self.quoteId;
					    self.quoteId=null;
					}
					self.quotes.push(nQuote);
				    }
				    else{
					self.isRecording=true;
					self.recordingStartTime=video.player.getCurrentTime();
					var updateEndTime=function(){
					    to(function(){
						sp.newQuote.recordingEndTime=video.player.getCurrentTime();
					    });
					    if(self.isRecording)
						to(updateEndTime,500);
					};
					to(updateEndTime,500);
				    }
				},
				save:function(quote){
				    if(self.selectedAuthor===null) return;
				    var insertTags=function(quoteId){
					angular.forEach(self.selectedTags,function(isSelected,tag){
					    if(isSelected)
						TagSvc.insert(tag,quoteId);
					});
				    };
				    
				    if(self.selectedAuthor!==undefined
					&&
					self.selectedAuthor!==undefined
					&&
					self.selectedAuthor.key!==undefined){
					    quote.personId=self.selectedAuthor.key.name;
					    QuoteSvc.insert(quote).success(insertTags);
					}
					else
					    PersonSvc.insert(self.selectedAuthor.name)
						.success(function(response){
						    self.selectedAuthor=response;
						    quote.personId=response.key;
						    QuoteSvc.insert(quote).success(insertTags);
						});
				},
				step:1,
				forward:function(){
				    if(self.step<2)
					self.step*=2;
				    video.player.getPlaybackRate(video.player.getPlaybackRate()*self.step);
				},
				forward:function(){
				    if(self.step>0.2)
					self.step/=2;
				    video.player.getPlaybackRate(video.player.getPlaybackRate()*self.step);
				},
				destroy:function(){
				    self.step=1;
				    video.player.getPlaybackRate(1);
				    self.show=false;
				}
			    };
			}(PersonSvc,QuoteSvc,TagSvc));
			sp.$root.$on('newQuote', function(event, args) {
			    video.execAfterReady(function(){
				sp.newQuote.show=true;
				sp.newQuote.videoURL=args;
				sp.newQuote.onVideoURLChange();
			    });
			});
			
			sp.tagger=(function(TagSvc){
			    var self={};
			    return self={
				tagNameQuery:'',
				tagName:[],
				selectedTags:{},
				lastReq:{abort:function(){}},
				findByTagName:function(tagName){
				    self.lastReq.abort();
				    self.lastReq=
					TagSvc.find(self.tagNameQuery)
					    .success(function(response){
						self.tagNames=response;
						if(response.length==0)
						    self.tagNames=[{key:{name:self.tagNameQuery}}];
					    });
				},
				selectTag:function(tag){
//				    if(self.selectedTags[tag.key.name]!==true)
//				    {
//					self.selectedTags[tag.key.name]=true;
					TagSvc.insert(tag.key.name,sp.video.playlist[0].key);
//				    }
				    //TODO: remove tag
//				    else if(self.selectedTags[tag.key.name]!==undefined)
//					self.selectedTags[tag.key.name]=false;
				}
			    };
			}(TagSvc));
			sp.favourites=(function(){
			    var show=false;
			    var mark={};
			    function add(quote){
				mark[quote.key.id]=quote;
			    }
			    function remove(quote){
				mark[quote.key.id]=null;
			    }
			    function isFavourite(quote){
				return (mark[quote.key.id]!==null && mark[quote.key.id]!==undefined);
			    }
			    
			    return {
				show:show,
				quotes:mark,
				add:add,
				remove:remove,
				isFavourite:isFavourite
			    };
			}());

			sp.$routeParams=$routeParams;
			if($routeParams.quoteId!==undefined)
			    QuoteSvc.findById($routeParams.quoteId)
				.success(function(quote){
//				    video.execAfterReady(function(){
					to(function(){
					   video.playQuotes([quote]); 
					});
//				    });
				});
			else if($routeParams.videoId!==undefined)
			    VideoSvc.getChannelId($routeParams.videoId)
				.success(function(response){
				    
				    ChannelSvc.isVerified(response.items[0].snippet.channelId)
				    .success(function(){
					video.execAfterReady(function(){
					    sp.newQuote.show=true;
					    sp.show=true;
					    sp.video.playlist=[];
					    video.load($routeParams.videoId);
					}); 
				    });
				    
				});
			}]);