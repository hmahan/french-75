$(document).ready(function() {
	
$('#page_effect').fadeIn(2000); 

/////////////***JAVASCRIPT VARIABLES***///////////
var history = document.getElementById("history");
var $history = $("#history");
var start = document.getElementById("start");
var steps = document.getElementById("steps");

var timesClicked = 0; 


//////////***HANDLERS AND FUNCTIONS***///////// 
 
//Goes to ingredients page, changes button 
start.onclick=function ingredients() {
	if(timesClicked == 0){
	  $('#history').html( '<img src="http://www.haileymahan.com/portfolio/75/75ingredients.jpg"/>' );
	  $('#steps').html('<p>For the perfect French 75 you need a cocktail shaker, a champagne flute, ice, champagne, gin, lemon, and simple syrup</p>');
	  $(this).html("Mix");
	  timesClicked++;
	}else if(timesClicked == 1){
	  $('#history').html( '<div id="anim"></div>' );
	  sprite();
	  $('#steps').html('<p>Put 3 tablespoons gin in a cocktail shaker with ice</p>');
	  timesClicked++;
	}else if(timesClicked == 2){
		$('#anim').css('background-image', 'url(http://www.haileymahan.com/portfolio/75/french2sprite.jpg)');
		$('#steps').html('<p>Add 1 1/2 tablespoons fresh lemon juice</p>');
		timesClicked++;
	}else if(timesClicked == 3){
		$('#anim').css('background-image', 'url(http://www.haileymahan.com/portfolio/75/french3sprite.jpg)');
		$('#steps').html('<p>Finish off the mix with 1 tablespoon simple syrup</p>');
		timesClicked++;
	}else if(timesClicked == 4){
		$('#anim').css('background-image', 'url(http://www.haileymahan.com/portfolio/75/french4sprite.jpg)');
		$('#steps').html('<p>SHAKE! And then pour into a champagne flute.</p>');
		timesClicked++;
	}else if(timesClicked == 5){
		$("#start").html("Restart");
		$('#anim').css('background-image', 'url(http://www.haileymahan.com/portfolio/75/french5sprite.jpg)');
		$('#steps').html('<p>Top off with champagne and serve with the lemon peel.</p>');
		timesClicked = 0;
	}
}


//Sprite
function sprite() {
	var imageWidth=1200;
	var imageHeight=300;
	var xpos=0;
	var ypos=0;
	var index=0;
	var numFrames = 4;
	var frameSize= 300;
	
	function init() {	
		setInterval(loop, 800 / 4);
	}
	
	function loop() {
	
		$('#anim').css("background-position",(-xpos)+"px "+(-ypos)+"px");
		
		xpos += frameSize;
		
		index += 1;
		
		if (index >= numFrames) {
			xpos =0;
			index=0;
			
		} else if (xpos + frameSize > imageWidth){
			xpos =0;
		}
	}
	
	init();
}


});




