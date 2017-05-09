console.log('\'Allo \'Allo!');

$(document).ready(function() {
	if ($(window).width() < 768) {
		$.fn.fullpage.destroy(all);
	} else {
		$('#fullpage').fullpage();
	}
});