jQuery(document).ready(function() {
	
	jQuery(".checkout .paypal-installment-specific-promotion").css("display","none");

	function checkFinanzierungsanzeige(){
		setTimeout(function(){
			if( jQuery("#checkoutButtonPayPalInstallment").text() == "Ratenzahlung beantragen" ){
				jQuery("#paypal-installment-specific-promotion_").css("display","block");
			}else{
				jQuery("#paypal-installment-specific-promotion_").css("display","none");
			}
		},500);
	}

	checkFinanzierungsanzeige();

	$("body").on('DOMSubtreeModified', "#checkoutButtonPayPalInstallment", function() {
	    checkFinanzierungsanzeige();
	});

	/** VORBESTELLEN **/

	if ($(".release-date").length > 0){
		$(".category-list-view-port .btn-primary").html('<i aria-hidden="true" class="fa fa-shopping-cart"></i> Jetzt vorbestellen');
	}


	$(".yt-preview-img").click(function(e){
		e.preventDefault();
		$(this).css("display","none");
		$(this).parent().children(".yt-preview-vid").css("display","block");
	});


});