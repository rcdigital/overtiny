/* Author:

*/

var timer = new Timer();

$('#frm_savetask').submit(function(e){
	e.preventDefault();
	$.post($(this).attr('action'),{task_name:$('#task_name').val(), id_user: $('#user_id').val() }, function(res){ console.log(res); });
});

$('.start-counter').click(function(e){
		e.preventDefault();
		timer.init();
		return false;
});

$('.stop-counter').click(function(e){
		e.preventDefault();
		timer.stopCounter();
		return false;
});
