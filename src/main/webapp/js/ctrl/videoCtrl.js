app
		.controller('videoCtrl',
			['$scope','QuoteSvc','TagSvc','PersonSvc','VideoSvc','ChannelSvc','$timeout','$routeParams','YTPlayer',
			function(sp,QuoteSvc,TagSvc,PersonSvc,VideoSvc,ChannelSvc,to,$routeParams, YTPlayer){
				
				sp.video = YTPlayer.init('video');
				YTPlayer.onload(function(){
				    sp.show=true;
				    sp.childClick=sp.parentClick=false;
				    $(document).scrollTop(0);
				});
				sp.vidProgress=(function(){
				    var self={};
				    return self={
					result:[],
					show:false,
					isBarActive:function(index){
					    return false;
					},
					getPreBarWidth:function(index){
					    if(index-1>=0)
						    return ( (self.result[index].start-self.result[index-1].end)*100/YTPlayer.player.getDuration() );
					    return ( self.result[index].start*100/YTPlayer.duration );
					},
					getBarWidth:function(index){
					    return ( (self.result[index].end-self.result[index].start)*100/YTPlayer.player.getDuration() );
					},
					getLastBarWidth:function(){
					    if(self.result.length>0)
						    return ( (YTPlayer.player.getDuration() - self.result[self.result.length-1].end) *100/YTPlayer.player.getDuration());
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
				
			
			if((location.href.indexOf('#s=')>-1)||(location.href.indexOf('#/s=')>-1)){
			    var s=parseInt(
					location.href.substring(
					location.href.indexOf('s=')+2,
					location.href.indexOf('v=')) );
			    var v=location.href.substring(
					location.href.indexOf('v=')+2,
					location.href.length);
					//TODO: load quotes
			    YTPlayer.load(v,s);
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
					YTPlayer.player.stopVideo();
					YTPlayer.player = null;
					sp.newQuote.destroy();
					window.location.href="#/";
				}
			};
			sp.click=function(){
			    sp.childClick=true;
			};
			
			
			sp.newQuote=(function(PersonSvc,QuoteSvc,TagSvc){
			    var self={};
			    self={
				quotes:[],
				text:'',
				show:false,
				authorName:'',
				videoURL:'',
				authors:[],
				selectedAuthor:null,
				findByAuthorName:function(event){
				    PersonSvc.findByName(self.authorName)
					.success(function(response){
					    if(response.length>0)
						self.authors=response;
					    else
						self.selectedAuthor={properties:{name:self.authorName}};
					});
				    if(event.keyCode===13){
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
					    videoId: YTPlayer.player.getVideoData().video_id,
					    start: self.recordingStartTime,
					    quote: self.text,
					    end: YTPlayer.player.getCurrentTime()
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
					self.recordingStartTime=YTPlayer.player.getCurrentTime();
					var updateEndTime=function(){
					    to(function(){
						self.recordingEndTime=YTPlayer.player.getCurrentTime();
					    });
					    if(self.isRecording)
						to(updateEndTime,500);
					};
					to(updateEndTime,500);
				    }
				},
				save:function(quote){
				    if(self.selectedAuthor===null) return;
				    var insertTags=function(quote){
					angular.forEach(self.selectedTags,function(isSelected,tag){
					    if(isSelected)
						TagSvc.insert(tag,quote);
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
					    PersonSvc.insert(self.selectedAuthor.properties.name)
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
				    YTPlayer.player.setPlaybackRate(YTPlayer.player.getPlaybackRate()*self.step);
				},
				forward:function(){
				    if(self.step>0.2)
					self.step/=2;
				    YTPlayer.player.setPlaybackRate(YTPlayer.player.getPlaybackRate()*self.step);
				},
				destroy:function(){
				    self.step=1;
				    YTPlayer.player.setPlaybackRate(1);
				    self.show=false;
				}
			    };
			    return self;
			}(PersonSvc,QuoteSvc,TagSvc));
			sp.$root.$on('newQuote', function(event, args) {
			    sp.newQuote.show=true;
			    sp.newQuote.videoURL=args;
			    sp.newQuote.onVideoURLChange();
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
					TagSvc.insert(tag.key.name,YTPlayer.playlist[0].key);
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
				    TagSvc.findByQuoteId($routeParams.quoteId)
				    .success(function(tags){
					quote.tags = tags;
					YTPlayer.playQuotes([quote]); 
				    });
				});
			else if($routeParams.videoId!==undefined)
			    VideoSvc.getChannelId($routeParams.videoId)
				.success(function(response){
				    
				    ChannelSvc.isVerified(response.items[0].snippet.channelId)
				    .success(function(){
					sp.newQuote.show=true;
					sp.show=true;
					YTPlayer.playlist=[];
					YTPlayer.load($routeParams.videoId);
				    });
				    
				});
			else if($routeParams.story!==undefined)
			    YTPlayer.playQuotes($routeParams.story.split(','));
			}]);