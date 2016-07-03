$(document).ready(function(){
	$(".checkbox").click(
		function() {
			$(this).parents('li').toggleClass("checked");
			if($(this).is(":checked")) {
				$(this).parents('li').delay(1000).fadeTo(100, 0);
			} else {
				$(this).parents('li').delay(1000).fadeTo(100, 1);
			};
			if ($(':checked').length == 6) {
				$('.loftblog-courses-content').fadeOut();
				$('.hidden-block').delay(2000).css("display", "block");
			};
	});
});
