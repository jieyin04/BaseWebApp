// $(document).ready(function(){
// 	getWeather();
// })

// function getWeather(searchQuery) {
// 	var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&appid="+apiKey;
	
// 	$(".city").text("");
// 	$(".temp").text("");
// 	$(".error-message").text("");


// 	$.ajax(url, {success: function(data) {
// 		$(".city").text(data.name);
// 		$(".temp").text(data.main.temp);
// 	}, error: function(error){
// 		$(".error-message").text("An error occured");
// 	}
// })
// }

// function searchWeather() {
// 	var searchQuery = $(".search").val();
// 	getWeather(searchQuery);
// }



// function showPicture(){
//   // use jQuery ($ is shorthand) to find the div on the page and then change the html
//   // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
//   $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
//   $("p").html("High five! You're building your first web app!");

//   // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
// }


// $(document).ready(function (){
// 	getPokemonA();
// 	getPokemonB();
// })

// function getPokemonA(){
// 	var pokemonA = Math.floor((Math.random() * 151) + 1);
// 	console.log(pokemonA);
// 	var url ="https://pokeapi.co//api/v2/pokemon/"+pokemonA+"/";
// 	$.ajax(url, {
// 		success: function(data) {
// 			$(".nameA").text("data.name");
// 		},
// 		error: function(error){
// 			$(".error-message").text("An error occured");
// 		}
// 	})
// }

// function getPokemonB(){
// 	var pokemonB = Math.floor((Math.random() * 151) + 1);
// 	var url ="https://pokeapi.co//api/v2/pokemon/"+pokemonB"/";
// 	$.ajax(url, {
// 		success: function(data) {
// 			$(".nameB").text(data.name);
// 		},
// 		error: function(error){
// 			$(".error-message").text("An error occured");
// 		}
// 	})
// }

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

P.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response);
    });
    





