var seconds = 0;
var minutes = 0;
var hours = 0;
var handler = null;
var Timer = function(){};


Timer.prototype.init = function(){
	this.startTimer();
};

Timer.prototype.startTimer = function(){
	handler = setInterval(this.formatTime,1000);	
};

Timer.prototype.formatTime = function(){
	var counter = Timer.prototype.updateCounter();
	stringSeconds = (counter.seconds <= 10)?('0'+counter.seconds).slice(-2):('00'+counter.seconds).slice(-2);
	stringMinutes = (counter.minutes <= 10)?('0'+counter.minutes).slice(-2):('00'+counter.minutes).slice(-2);
	stringHours = (counter.hours <= 10)?('0'+counter.hours).slice(-2):('0'+counter.hours).slice(-1);
	document.getElementById('seconds').innerHTML = stringSeconds ;
	document.getElementById('minutes').innerHTML = stringMinutes ;
	document.getElementById('hours').innerHTML = stringHours ;

};

Timer.prototype.updateCounter = function(){
	seconds = (seconds < 60 )? seconds+1 : 0;
	if(seconds === 60){minutes++; seconds = 0;}
	if(minutes === 60){hours++; minutes = 0;}
	
	return { seconds: seconds, minutes:minutes, hours:hours};
};

Timer.prototype.stopCounter = function(){
	clearInterval(handler);
};
