jQuery(document).ready(function($) {

	$('.cons-form').magnificPopup();
	$('.bid-form').magnificPopup();

	$('.close-btn').on('click',function(e){
		e.preventDefault();
		$.magnificPopup.close();
		return false;
	})
	$('.btn-send').on('click',function(e){
		e.preventDefault();
		$.magnificPopup.close();
		return false;
	})
	
	$('#check').on("change", function() {
		if ($("#check").is(':checked')) { 
			$('.bid-form').removeAttr('disabled');
		} else {
			$('.bid-form').attr('disabled',true);
		}
	})

	$('#checkbox-agree').on("change", function() {
		if ($("#checkbox-agree").is(':checked')) { 
			$('.btn-send').removeAttr('disabled');
		} else {
			$('.btn-send').attr('disabled',true);
		}
	})

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},900);
	});

});