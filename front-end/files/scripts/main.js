require.config({
	paths:{
		timer: 'libs/timer'
	}
});

require(['jquery','csrftokenrequest','tasks'],function($,csrftokenrequest,tasks){
	
	function init(){
		var csrfTokenRequest = new csrftokenrequest.CsrftokenRequest();
		var tasksModule = new tasks.Tasks();
		csrfTokenRequest.setup();
		tasksModule.init();

	}

	function onReady(){
		$(document).ready(init);
	}

	onReady();
});
