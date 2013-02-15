
define(['jquery','exports'], function($,exports){
	var CsrftokenRequest = function(){
		this.csrftokenCookie = this.getCookie('csrftoken');
	};

	CsrftokenRequest.prototype.getCookie = function(name) {
		var cookieValue = null;
		if (document.cookie && document.cookie !== '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};


	CsrftokenRequest.prototype.csrfSafeMethod = function(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	};

	CsrftokenRequest.prototype.setup = function(){
		var scope = this;
		$.ajaxSetup({
			crossDomain: false, // obviates need for sameOrigin test
			beforeSend: function(xhr, settings) {
				if (!scope.csrfSafeMethod(settings.type)) {
					xhr.setRequestHeader("X-CSRFToken", scope.csrftokenCookie);
				}
			}
		});
	};

	exports.CsrftokenRequest = CsrftokenRequest;
});
