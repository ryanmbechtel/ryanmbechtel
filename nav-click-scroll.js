	

$(document).ready(function() {
	$('#myNav').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#about').offset().top}, 200);
	})
});
