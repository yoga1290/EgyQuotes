app.controller('gridCtrl',
	    ['$scope','QuoteSvc','TagSvc','PersonSvc','VideoSvc','$timeout','$routeParams', 'PageLoader',
	    function(sp,QuoteSvc,TagSvc,PersonSvc,VideoSvc,to,$routeParams, PageLoader){
		    sp.quotes=[];
		    sp.PageLoader = PageLoader;
		    
		    var onload=(function(){
			if(location.href.indexOf("access_token=")>0) {
			    localStorage.setItem('access_token',location.href.substring(location.href.indexOf("access_token=")+13,location.href.indexOf('&expires')));
			}
		    }());
		
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
		    
		    var tags=[],personId=[];
		    if($routeParams.tags !== undefined) {
			angular.forEach($routeParams.tags.split(','), function(tag){
			    tags.push(tag);
			});
		    }
		    if($routeParams.personId !== undefined) {
			angular.forEach($routeParams.personId.split(','), function(person){
			    personId.push(person);
			});
		    }
		    if(tags.length >0 || personId.length>0) {
			sp.search.selected.people = personId;
			sp.search.selected.tags = tags;
			sp.quoteLoader.setQuery(tags,personId);
		    }
		    
		    sp.search=(function(sp){
			var self={};
			return self={
				field:'',
				result:[],
				backClick:true,
				isHidden:function(){
				    return ( self.backClick); 
				},
				selected:{
				    people:{},
				    tags:{}
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
					});
				    self.people=[];
				    if(self.lastPersonReq!==null) self.lastPersonReq.abort();
				    self.lastPersonReq=
				    PersonSvc
					.findByName(self.field)
					.success(function(response){
					    self.people=response;
					});
				},
				selectTag:function(tag){
				    if(self.selected.tags[tag] === true)
					self.selected.tags[tag] = false;
				    else self.selected.tags[tag] = true;
				    self.search();
				},
				selectPerson:function(person){
				    if(self.selected.people[person] === true)
					self.selected.people[person] = false;
				    else self.selected.people[person] = true;
				    self.search();
				},
				search:function(){
				    // TODO: #?tags=..&people=..
				    var tags=[],personId=[];
				    angular.forEach(self.selected.tags, function(isSelected,tag) {
					if(isSelected)
					    tags.push(tag);
				    });
				    angular.forEach(self.selected.people, function(isSelected,person) {
					if(isSelected)
					    personId.push(person);
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
						    
						    var H=$(document).height()-100;
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
							    
							    VideoSvc.getChannelId(quote.properties.videoId).success(function(response){
								VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data){
								    quote.logo = data.items[0].snippet.thumbnails.high.url;
								    sp.quotes.push(quote);
								});
							    });
							    
							});
							
						    });
					self.offset+=self.page;
				    }
			    };
		    }());
		    sp.quoteLoader.init();
		    sp.quoteLoader.setQuery([], []);
		    
		    
		    sp.parseInt = parseInt;
		    sp.to2Digit=function(x){
			x=parseInt(x)+'';
			while(x.length<2)
			    x+='0'+x;
			return x;
		    };
		    sp.stopPropagation=function(e){
			e.stopPropagation();
		    };
		    sp.show = false;
		    sp.childClick = false;
		    sp.parentClick = true;
		    sp.overlayClick=function(){
			sp.parentClick=true;
			sp.show=!(!sp.childClick && sp.parentClick);
			sp.childClick=sp.parentClick=false;
		    };
		    sp.click=function(){
			sp.childClick=true;
		    };
		    
		    sp.getChannelLogoByVideoId = function(videoId) {
			var url={url:''};
			VideoSvc.getChannelId(videoId).success(function(response){
			    VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data){
				url = {url: data.items[0].snippet.thumbnails.default.url};
			    });
			});
			return url.url;
		    };
    }]); 