var stickingEffect=(function(){


    var initPosition=[];

    $(function(){
	$(document).scroll(function(){
	    $('.stickable').each(function(i,o){
		if( $('body').scrollTop()>=parseInt($(o).attr('initposition')))
		    $(o).addClass('stickOnTop');
		else
		    $(o).removeClass('stickOnTop');
	    });
	});
    });
    
    function scan(){
	$(function(){
	    $('.stickable').not('[initposition]').each(function(i,o){
		$(o).attr('initposition',$(o).position().top);
	    });
	});
    }

    return {
	scan:scan
    };

}());