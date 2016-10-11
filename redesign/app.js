$(document).ready(function() {

	// $('#search').click(function(){

	$('#comedy-button').click(function(){
 		$('#comedy-movies').toggleClass("hidden")
	});
	
	$('#drama-button').click(function(){
	   $('#drama-movies').toggleClass("hidden");
 	});

 	$('#thriller-button').click(function(){
	   $('#thriller-movies').toggleClass("hidden");
 	});
 	$('#childrens-button').click(function(){
	   $('#childrens-movies').toggleClass("hidden");
 	});
 	$('#adapted-button').click(function(){
	   $('#adapted-movies').toggleClass("hidden");
 	});
 	$('#scifi-button').click(function(){
	   $('#drama-movies').toggleClass("hidden");
 	});
 	$('#musical-button').click(function(){
	   $('#drama-movies').toggleClass("hidden");
 	});
 	$('#awards-button').click(function(){
	   $('#drama-movies').toggleClass("hidden");
 	});

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

