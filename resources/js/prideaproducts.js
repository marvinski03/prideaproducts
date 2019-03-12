jQuery(document).ready(function() {
	
	jQuery(".checkout .paypal-installment-specific-promotion").css("display","none");

	function checkFinanzierungsanzeige(){
		setTimeout(function(){
			if( jQuery("#checkoutButtonPayPalInstallment").text() == "Ratenzahlung beantragen" ){
				jQuery("#paypal-installment-specific-promotion_").css("display","block");
				console.log("finanzierungsmöglichen anzeigen");
			}else{
				jQuery("#paypal-installment-specific-promotion_").css("display","none");
				console.log("finanzierungsmöglichen verbergen");
			}
		},500);
	}

	checkFinanzierungsanzeige();

	$("body").on('DOMSubtreeModified', "#checkoutButtonPayPalInstallment", function() {
	    checkFinanzierungsanzeige();
	});

});