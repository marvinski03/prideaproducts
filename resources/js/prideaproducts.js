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
		},1000);
	}

	checkFinanzierungsanzeige();

	jQuery(".payment-method-select").click(function(){
		checkFinanzierungsanzeige();
	});

});