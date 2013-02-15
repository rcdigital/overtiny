// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

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
