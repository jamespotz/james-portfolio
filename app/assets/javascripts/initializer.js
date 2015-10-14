function applyTooltipWarning(selector) {
	$(selector).tooltip({
		html: true,
		trigger: 'manual',
		container: 'body',
		placement: 'top',
		animation: true,
		template: '<div class="tooltip warning" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	});
}


function initializeRequired() {
	applyTooltipWarning('.required');
	$('.required').focusin(function () {
   		$(this).tooltip('hide');
   	});
	$('.required').focusout(function (e) {
		if ($.trim($(this).val()).length == 0)
			$(this).data('isValid', false); 
		else $(this).data('isValid', true); 
		
		setTimeout($.proxy(function() {
			if ($.trim($(this).val()).length == 0) {
   				$(this).attr('data-original-title',
	   				'<div class="tooltip-icon"><span class="glyphicon glyphicon-alert"></span></div>' +
					'<div class="tooltip-content">This field is <b>required</b> and should not be empty.</div>');
				
   				$(this).tooltip('show');
   				$(this).closest('div[class*="form-group"]').addClass('has-error');
   				setTimeout($.proxy(function() { $(this).tooltip('hide'); }, this), 30000000);
	   		} else {
	   			$(this).closest('div[class*="form-group"]').removeClass('has-error');
	   		}
		}, this), 200);
   	});
   	
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function initializeEmailValidator() {
	applyTooltipWarning('.validate-email');
	$('.validate-email').focusin(function () {
   		$(this).tooltip('hide');
   	});
	$('.validate-email').focusout(function (e) {
		if ($.trim($(this).val()).length == 0 || !IsEmail($(this).val()))
			$(this).data('isValid', false); 
		else $(this).data('isValid', true); 
		
		setTimeout($.proxy(function() {
			if ($.trim($(this).val()).length != 0 && !IsEmail($(this).val())) {
   				$(this).attr('data-original-title',
	   				'<div class="tooltip-icon"><span class="glyphicon glyphicon-envelope"></span></div>' +
					'<div class="tooltip-content">Please enter a valid <b>email address format</b>. (e.g. name@email.com)</div>');
   				$(this).tooltip('show');
   				$(this).closest('div[class*="form-group"]').addClass('has-error');
   				setTimeout($.proxy(function() { $(this).tooltip('hide'); }, this), 3000);
   			} else if ($.trim($(this).val()).length != 0) {
	   			$(this).closest('div[class*="form-group"]').removeClass('has-error');
	   		}
		}, this), 250);
   	});
}

function initializeSubmitValidator(submitButtonIdentifiyer, onValidCallback, onInvalidCallback){
	$(submitButtonIdentifiyer).click(function (e) {
		e.preventDefault();
		$('.loading').show('fast');
		setTimeout($.proxy(function() {
			var isAllValid = true;
			$('.required, .validate-email').each(function() {
				$(this).focusout();					
			    isAllValid = isAllValid && $(this).data('isValid');
			});
			if (isAllValid) {
				if(onValidCallback && (typeof onValidCallback == "function")) { onValidCallback(); }
			}
			else {
				if(onInvalidCallback && (typeof onInvalidCallback == "function")) { onInvalidCallback(); }
				$('body,html').stop(true,true).animate({scrollTop: 100}, 800, 'easeOutQuint');
				$('#alert').show('fast');
			}
			$('.loading').hide('fast');
		}, this), 300);
	});
}