define(['jquery','exports'], function($,exports){
	var Tasks = function(){};

	Tasks.prototype.onSubmitForm = function(e){
		e.preventDefault();
		var $form = $(e.currentTarget);
		console.log($form);
		$.post('/xhr_save_time',{task_name:$('#task_name').val(), id_user: $('#user_id').val() }, function(res){ console.log(res); });
	};

	Tasks.prototype.addEventListeners = function(){
		$('#frm_savetask').submit(this.onSubmitForm);
	};

	Tasks.prototype.init = function(){
		this.addEventListeners();
	};

	exports.Tasks = Tasks;
});
