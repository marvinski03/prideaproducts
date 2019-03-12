jQuery(document).ready(function() {
	
	jQuery(".checkout .paypal-installment-specific-promotion").css("display","none");

	function checkFinanzierungsanzeige(){
		if( jQuery("#PP_Installments").hasClass("selected") ){
			jQuery(".checkout .paypal-installment-specific-promotion").css("display","block");
			alert("leider nein");
		}else{
			jQuery(".checkout .paypal-installment-specific-promotion").css("display","none");
			alert("leider ja");
		}
	}

	jQuery(".paymentMethodRow").click(function(){
		checkFinanzierungsanzeige();
	});

});