var current_item = 0;

var section_hide_time = 450;
var section_show_time = 450;

jQuery(document).ready(function($) {
	$("a", '.mainmenu').click(function() {
		if(!$(this).hasClass('active')) {
			current_item = this;
			$('.section:visible').fadeOut(section_hide_time, function() {
				$('a', '.mainmenu').removeClass('active');
				$(current_item).addClass('active');
				var new_section = $($(current_item).attr('href'));
				new_section.fadeIn(section_show_time);
			});
		}
		return false;
	});
});