var stickingEffect=(function(){


    var initPosition=[];

    function scan(){
	$('.stickable').not('[initposition]').each(function(i,o){
	    $(o).attr('initposition',$(o).position().top);
	    $(document).scroll(function(){
		if( $('body').scrollTop()>=$(o).attr('initposition'))
		    $(o).addClass('stickOnTop');
		else
		    $(o).removeClass('stickOnTop');
	    });
	});
    }

    return {
	scan:scan
    };

}());