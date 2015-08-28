app
.controller('globalCtrl',[
	'$scope',
	'$timeout',
	function(sp,to){

            sp.cssClass='light';
            var isBright=true;
            sp.toggleStyle=function(){
                isBright=!isBright;
                sp.cssClass=isBright ? 'light':'dark';
            };
            
            
            
            
            //export:
            var escape=function(txt){
                    var i=txt.indexOf('"');
                    while(i>-1)
                    {
                        i=txt.substring(i+1,txt.length()).indexOf('"');
                        txt=txt.substring(0,i)
                                +txt.substring(i,txt.length).replace('"','""');
                    }
                    return txt;
                };
            sp.isBusy=false;
            var txt='',header='author,quote,youtube\n';
            sp.export=function(i){
                if(i==0 && sp.isBusy) return;
                sp.isBusy=true;

                if(i==0) txt=header;

                QuoteSvc.list(i,200,function(response){
                    for(var i=0;i<response.length;i++)
                        txt+='"'+escape(response[i].properties.personId)+'",'
                                +'"'+escape(response[i].properties.quote)+'",'
                                +'http://youtu.be/'+response[i].properties.videoId+'?t='+Math.floor(response[i].properties.start)+'s\n';
                    if(response.length>0)
                        sp.export(i+response.length);
                    else
                    {
                        to(function(){
                            sp.isBusy=false;
                        },1);
                        Base64.download(txt,'quotes.csv');
                    }
                });

            };
            
            
	}]);