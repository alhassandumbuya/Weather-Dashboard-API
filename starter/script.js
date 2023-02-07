// Add your own API key between the ""
//var APIKey = "e10da35d7020e3de6262203a6622a4be";
// 5day = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e10da35d7020e3de6262203a6622a4be

// let searchInputEl = document.querySelector("#search-input");


//giving functionality to the search button 
$("#search-button").on("click", function(event) {
  event.preventDefault();
  //time variable 
  let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(dateTime);

  // getting search input
  let searchInputEl = document.querySelector("#search-input");
  let cityName = searchInputEl.value;

// function for getting the Name and timezone of the search city
  let queryUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=385a32858a53481a94767949076e6357&location=${cityName}`
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
  let LocationDateAndTime = response.datetime;
  let locationTimeZone =  response.timezone_abbreviation
  console.log(LocationDateAndTime);
  console.log(locationTimeZone);
})
$('#today').append = ``



// Here we are building the URL we need to query the database
var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=e10da35d7020e3de6262203a6622a4be`
  //
  // We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
  // A then function to store the lat and lon details
}).then(function(response) {
  let lat = response[0].lat; 
  let lon = response[0].lon;
  let cityId = response[0].name;
// An ajax call to get the full datailed array per loctaion 
  $.ajax({
    url : `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e10da35d7020e3de6262203a6622a4be`,
    method: "GET"
    }).then(function(response) {
    //   let weatherInfo = $("#pb-3");
    // $weatherInfo.append(`
    // <div class="searchel">${queryURL}</div>
    // `)
      console.log(response);
      // console.log(cityId);
      
    });
})




})
