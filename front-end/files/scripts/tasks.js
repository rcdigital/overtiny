define(['jquery','exports'], function($,exports){
	var Tasks = function(){
		this.currentTask = null;
		this.isStarted = false;
	};

	Tasks.prototype.onSubmitForm = function(e){
		var scope = this;
		e.preventDefault();
		var $form = $(e.currentTarget);
		$.post('/start_timer', {taskName: $('#task_name').val() , client: $('#client').val() }, function(res){ 
			scope.currentTask = res.task_id; 
			console.log(scope);
		},'json' );
	};

	Tasks.prototype.addEventListeners = function(){
		$('#frm_savetask').submit($.proxy(this.onSubmitForm,this));
	};

	Tasks.prototype.init = function(){
		this.addEventListeners();
	};

	exports.Tasks = Tasks;
});
