$(document).scroll(function(e) {
	var t = $(document).scrollTop();
	var sel = -1;
	$('.section').each(function(i, section) {
		if($(section).offset().top < t) {
			sel = i;
		}
	});
	//if(sel<0) return;

	$('.stickable').each(function(i, stickable) {
		if(i==sel) $(stickable).addClass('stick');
		else $(stickable).removeClass('stick');
	});
});