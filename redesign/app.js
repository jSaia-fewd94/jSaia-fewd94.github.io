$(document).ready(function() {

	// $('#search').click(function(){

	$('#comedy-button').click(function(){
 		hideEverybody ();
 		$('#comedy-movies').toggle();
	});
	
	$('#drama-button').click(function(){
		hideEverybody ();
	   $('#drama-movies').toggle();
 	});

 	$('#thriller-button').click(function(){
 		hideEverybody ();
	   $('#thriller-movies').toggle();
 	});
 	$('#childrens-button').click(function(){
 		hideEverybody ();
	   $('#childrens-movies').toggle();
 	});
 	$('#adapted-button').click(function(){
 		hideEverybody ();
	   $('#adapted-movies').toggle();
 	});
 	$('#scifi-button').click(function(){
 		hideEverybody ();
	   $('#scifi-movies').toggle();
 	});
 	$('#musical-button').click(function(){
 		hideEverybody ();
	   $('#musical-movies').toggle();
 	});
 	$('#awards-button').click(function(){
 		hideEverybody ();
	   $('#awards-movies').toggle();
 	});

 	function hideEverybody(){
		$('#comedy-movies').hide();
		$('#drama-movies').hide();
		$('#thriller-movies').hide();
		$('#childrens-movies').hide();
		$('#adapted-movies').hide();
		$('#scifi-movies').hide();
		$('#musical-movies').hide();
		$('#awards-movies').hide();
 	}
 	


 var title = "";
$('#submit').click(function(e){
	title = $('#title').val();
	getMovie(title);
    e.preventDefault();
});

function getMovie(movieName){
	$.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
    	console.log(json); 
    	$('#title_output').html(json.Title);
    	$('#starring_output').text(json.Actors);
    	$('#plot_output').text(json.Plot);
    	$('img').attr('src', json.Poster);
  
    });
 
 } 
});

