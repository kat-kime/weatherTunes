/*
 * Creating OpenWeatherMap Form
 */

// API Key
var apiKey = "71c8945bd722c0d2516350227eaca8c3";

// Submit Button
var submitButton = document.getElementById("weather-submit");

// Creating Playlists
var sunnyPlaylist = "<iframe src='https://open.spotify.com/embed/playlist/6qG2LAyFtispNndOJpBdAk' width='800' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
var rainyPlaylist ="<iframe src='https://open.spotify.com/embed/playlist/1vjtuPuEJfxhwsgycei52c' width='800' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
var snowyPlaylist ="<iframe src='https://open.spotify.com/embed/playlist/4j4ud9BHjKk3ohGDGAyxqs' width='800' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
var clowdyPlaylist = "<iframe src='https://open.spotify.com/embed/playlist/5y5ounuDj6fiehiBtH03eH' width='800' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";


// API Call
var apiCall = function(event) {

  // Setting up the variables
  var request = new XMLHttpRequest();
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "," +
  state + ",US&appid=" + apiKey;

  // Make the Call
  request.open("GET", url, false);
  request.addEventListener("load", function() {
    if(request.status >= 200 && request.status < 400) {

      // Parse the Data
      var response = JSON.parse(request.responseText);
      var weather = response.weather[0].main.toLowerCase();

      document.getElementById('weather-reveal').textContent = "The weather in " + city + ": " + weather;

      // Delivering Playlist
      if (weather.includes("cloud")) {
        document.getElementById('playlist').innerHTML = clowdyPlaylist;
      }
      else if (weather.includes("clear")) {
        document.getElementById('playlist').innerHTML = sunnyPlaylist;
      }
      else if (weather.includes("rain")) {
        document.getElementById('playlist').innerHTML = rainyPlaylist;
      }
      else if (weather.includes("snow")) {
        document.getElementById('playlist').innerHTML = snowyPlaylist;
      }
    }

    else {
      console.log("Error in network request: " + request.statusText);
  }
});

  request.send(null);
  event.preventDefault();
}

// Bind the Submit Button
submitButton.addEventListener("click", apiCall);

/*
 * Slideshow Functionality
 */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
