$(document).ready(function(){
	
	$('.dcolumn').mouseover(function(){
		var content = $(this).html();
	//var id = $(this).attr('id');
  // console.log('the element\'s ID is: and content is: '+content);
   });
   
    var blink = function(){
		var fps = 2.5;
        $('.fcolumn').css('background-color','rgba(235, 59, 59, 0.25)');
		setTimeout(function() {
        requestAnimationFrame(blink2);
 
		}, 1000/fps);
    };
	
	var randomColor = function(){
	var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
	return col;
	};
	
	var blink2 = function(){
		var fps = 2.5;
$('.fcolumn').css('background-color','rgba(235, 59, 69, 0)');
	    setTimeout(function() {
			requestAnimationFrame(blink);
 
		}, 1000 /fps);
	};

	Opentip.styles.blackAlert = {
	  // Make it look like the alert style. If you omit this, it will default to "standard"
	  extends: "alert",
	  // Tells the tooltip to be fixed and be attached to the trigger, which is the default target
	  background: 'black',
	  borderColor: 'black',
	  tipJoint: 'bottom',
	  targetJoint: 'top',
	  target: true,
	  stem: true
	};

	Opentip.defaultStyle = 'blackAlert';
	
	requestAnimationFrame(blink);
});
