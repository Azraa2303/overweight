$(document).ready( function() {

	// handlers
	var $card = $('#card'),
		$mainmenu = $card.find('.mainmenu'),
		$submenu = $card.find('.submenu');

	// click on power -> flip to menu
	$('.power').on('click', function() {
		window.location.href='#home';

		setTimeout(function(){
			$card.addClass('flip');
		},300);

		if($card.hasClass('flipback')) {
			setTimeout(function(){
				$card.removeClass('flipback');
			},300);
		}
		
		$submenu.first().delay(900).slideDown(400);
	});
});
