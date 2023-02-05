// Add your own API key between the ""
//var APIKey = "e10da35d7020e3de6262203a6622a4be";
// 5day = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e10da35d7020e3de6262203a6622a4be

// let searchInputEl = document.querySelector("#search-input");


//giving functionality to the search button 
$("#search-button").on("click", function(event) {
  event.preventDefault();

  // getting search input
  let searchInputEl = document.querySelector("#search-input");
  let cityName = searchInputEl.value;
// Here we are building the URL we need to query the database
var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=e10da35d7020e3de6262203a6622a4be`
  //
  // We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  let lat = response[0].lat; 
  let lon = response[0].lon;

  $.ajax({
    url : `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e10da35d7020e3de6262203a6622a4be`,
    method: "GET"
    }).then(function(response) {
      console.log(response);
      
    });
})

})
