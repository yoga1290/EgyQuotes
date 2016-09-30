app.controller('gridCtrl',
	    ['$scope', '$location', 'QuoteSvc','TagSvc','PersonSvc','VideoSvc','$timeout','$routeParams', 'PageLoader', 'ResponseDialog',
	    function(sp, $location, QuoteSvc,TagSvc,PersonSvc,VideoSvc,to,$routeParams, PageLoader, ResponseDialog){
		    sp.quotes=[];
		    sp.PageLoader = PageLoader;
		    sp.ResponseDialog = ResponseDialog;
		    
		    var onload=(function(){
			if(location.href.indexOf("access_token=")>0) {
			    localStorage.setItem('access_token',location.href.substring(location.href.indexOf("access_token=")+13,location.href.indexOf('&expires')));
			}
		    }());
		    
		    sp.onQuoteClick=function(quote) {
			$location.path('/quote/' + quote.id);
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
//			sp.quoteLoader.setQuery(tags,personId);
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
					
//					sp.$emit('QuoteGridCtrl.query', 0, 10, '', {}, 'airedTime', false);
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
				    //TODO
//				    sp.$emit('QuoteGridCtrl.query', 0, 10, '', {}, 'airedTime', false);
//				    sp.quoteLoader.setQuery(tags,personId);
				}
			};
		    }(sp));
		    
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
			console.log(videoId);
			VideoSvc.getChannelId(videoId).success(function(response){
			    if (response.items.length > 0)
			    VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data){
				url = {url: data.items[0].snippet.thumbnails.default.url};
			    });
			});
			return url.url;
		    };
    }]); 