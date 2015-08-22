var isYTAPIReady=false;
function onYouTubeIframeAPIReady() {
	console.log('YT Ready');
	isYTAPIReady=true;
}

var video={
	q:function(cb,t){},
	sp:{},
	load:function(videoId,start){
		video.q(function(){
			video.sp.videoId=videoId;
			video.sp.loadVideo(start);
		});
	}
};

app
.controller('videoPlayerCtrl',[
	'$scope',
	'$timeout',
	function($scope,$timeout){
		var sp=$scope;
		
		video.sp=$scope;
		video.q=$timeout;

		//TODO
		sp.isLoggedIn=false;
		if(localStorage.getItem('access_token')!=undefined)
			sp.isLoggedIn=true;

		sp.url='';
		sp.videoId='';
		
		sp.YTPlayer=null;
		sp.quotes=[];//[{text:'Hello',start:0,end:0}]
		sp.isRecording=false;
		sp.isFullScreen=false;

		sp.author='';
		sp.authors=[];//[{properties.name,key.name}];
		sp.allAuthors=[];
		PersonSvc.list(0,100,function(response){
			sp.allAuthors=sp.authors=response;
		});
		$("input[type='text']").off().click(function () {
		   $(this).select();
		});

		sp.loadVideo=function(start){
			if(!isYTAPIReady)
				$timeout(function(){
					sp.loadVideo(start);
				},500);
			else
			{
				if(sp.YTPlayer==null)
					sp.YTPlayer= new YT.Player('video', {
				       // height: '390',
				        width: $('#video').parent().width(),//'640',
				        videoId: sp.videoId,
				        playerVars: { 'autoplay': 1,'origin':'https://egyquotes.appspot.com'},
				        events: {
				          'onReady': function(event){
				        	  	sp.YTPlayer=event.target;
				        	  		sp.YTPlayer=event.target;
				        	  	  sp.YTPlayer.setPlaybackQuality('small');
						       //TODO:
						       //video.updateProgress();
						       
						       if((location.href.indexOf('s=')>-1))
						    	   {
							    	   var s=parseInt(
			        							location.href.substring(
			    										location.href.indexOf('s=')+2,
			    										location.href.indexOf('v=')) );
							       $('#vidURL').val('https://EgyQuotes.appspot.com/#s='+s+"v="+sp.videoId);
							       sp.YTPlayer.seekTo(s,true);
						    	   }
						       else if(start!=null && start!=undefined)
						    	   {
						    	   		sp.YTPlayer.seekTo(start,true);
						    	   		$('#vidURL').val('https://EgyQuotes.appspot.com/#s='+Math.floor(start)+'v='+sp.videoId);
						    	   }
						       else
							    	   $('#vidURL').val('https://EgyQuotes.appspot.com/#v='+sp.videoId);
						       TimeLine.load(sp.videoId,event.target);
						       
						       
				          },
				          'onStateChange': function(event){
				        	  	 var player=event.target;
				        	  	 if(event.data==YT.PlayerState.PLAYING)
				        	  		 TimeLine.setPointer(player);
				          }
				        }
			    	});//end of init YTPlayer; if(!YTPlayer)
				else
				{
					sp.YTPlayer.loadVideoById({'videoId': sp.videoId, 'startSeconds': (start!=undefined ? start:0), 'suggestedQuality': 'small'});
		    		//TODO:
		    		TimeLine.load(sp.videoId,sp.YTPlayer);
				}
			}
		};

		sp.onURLChange=function(){
			sp.videoId= sp.url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
			sp.videoId=sp.videoId[sp.videoId.length-1];

			console.log('videoId='+sp.videoId);
			if(sp.videoId == null) return;
			sp.loadVideo();
		};


		sp.playQuoteStart=function(quote){
			sp.videoId=quote.videoId;
			sp.loadVideo(quote.start);
		};
		sp.playQuoteEnd=function(quote){
			sp.videoId=quote.videoId;
			sp.loadVideo(quote.end);
		};
		sp.removeQuote=function(index){
			var nQuotes=[];
			for (var i = 0; i < sp.quotes.length; i++)
				if(i!=index)
					nQuotes.push( sp.quotes[i] );
			sp.quotes=nQuotes;
			// $('select.tags').off().tokenize({displayDropdownOnFocus:true});
		};



		sp.setIN=function(){
			sp.isRecording=true;
		    sp.quotes.push({videoId:sp.videoId,start:sp.YTPlayer.getCurrentTime(),end:null});
			$timeout(function(){
				$('input.tags').last().off().tokenizer({
					callback: function ($input) {
						
						console.log('tags#'+$($input).index('input.tags')+':');
						console.log($input.tokenizer('get'));
						console.log('tagName:');
						console.log($($input));

						sp.quotes[
							$($input).index('.tags')
							].tags=$input.tokenizer('get');

					},
					onclick: function (word) {},
					numToSuggest:0,
					xContent: '&times;',
					namespace: 'tknz',
					label: '',
					separators: [',', ' ', '.'],
					allowUnknownTags: true,
					source:function(input,cb){
						TagSvc.find(input,function(response){
							var suggested=[];
							for(var i=0;i<response.length;i++)
								suggested.push(response[i].properties.tag);
							cb(suggested);
						});
						// if(input=='test')
						// 	this.allowUnknownTags=true;
						// cb([]);
					}
				});
			},1);

			var updateEndTime=function(){
				if(sp.isRecording)
				{
					sp.quotes[sp.quotes.length-1].end=sp.YTPlayer.getCurrentTime();
					$timeout(updateEndTime,800);
				}
			};
			updateEndTime();
		};
		sp.setOUT=function(){
			sp.isRecording=false;
		    //TODO: check for overlapping
		    if(sp.quotes.length>0)
		    {
			    sp.quotes[sp.quotes.length-1].end=sp.YTPlayer.getCurrentTime();
		    	// $('select.tags').off().tokenize({displayDropdownOnFocus:true});
		    }
		};
		sp.toggleIO=function(){
			if(sp.quotes.length>0 && sp.isRecording)
				sp.setOUT();
			else sp.setIN();
		};

		sp.searchAuthor=function(event,quote){
			if(event.keyCode==13)//enter/return
			{
				console.log('name=');
				console.log(sp.author);
				PersonSvc.findByName(sp.author,function(response){
					sp.authors=response;
					if(response.length==0)
                                        {
						quote.author=sp.author;
                                                quote.isNewAuthor=true;
                                        }
				});
				// sp.authors=[];
				// var found=false;
				// for(var i=0;i<sp.allAuthors.length;i++)
				// 	if(sp.allAuthors[i].indexOf(sp.author)>-1)
				// 	{
				// 		found=true;
				// 		console.log(sp.author);
				// 		sp.authors.push(sp.allAuthors[i]);
				// 	}
				// if(!found)
				// 	quote.author=sp.author;
				event.preventDefault();
				event.stopPropagation();
			}
		};

		sp.insertQuote=function(index){
                    
                    var success=function(quoteId){


							$(sp.quotes[index].tags)
							.each(function(i,tag){
								TagSvc.insert(tag,quoteId,function(){
	console.log('tag#'+tag+' was attached');
});
							});
							sp.removeQuote(index);
				};
                                
                    if(sp.quotes[index].isNewAuthor!=true)
			QuoteSvc
				.insert(
						sp.quotes[index].videoId,
						sp.quotes[index].author,
						sp.quotes[index].text,
						sp.quotes[index].start,
						sp.quotes[index].end,
						success);
                    else
                        PersonSvc.insert(sp.quotes[index].author,function(){
                           sp.quotes[index].isNewAuthor=true;
                           QuoteSvc
				.insert(
						sp.quotes[index].videoId,
						sp.quotes[index].author,
						sp.quotes[index].text,
						sp.quotes[index].start,
						sp.quotes[index].end,
						success);
                        });

		};


		//util
		sp.preventEvent=function(event){
			event.preventDefault();
			event.stopPropagation();
		};
		sp.parseInt=function(x){
			return parseInt(x);
		};
		sp.to2Digit=function(x){
			var x=parseInt(x)+'';
			while(x.length<2)
				x='0'+x;
			return x;
		};


	}]);