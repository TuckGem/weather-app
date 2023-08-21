let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = now.getDay();
let hour = now.getHours();
let mins = now.getMinutes();
let today = document.querySelector("#date");

today.innerHTML = `${days[day]} ${hour}:${mins}`;

function search(event) {
  event.preventDefault();
  let searchTerm = document.querySelector("#search-input");
  console.log(searchTerm.value);
  searchTerm.innerHTML = `${searchTerm.value}`;
  let location = document.querySelector("#location");
  location.innerHTML = `${searchTerm.value}`;
  currentPosition(searchTerm.value);
}
let searchInput = document.querySelector("#form");
searchInput.addEventListener("submit", search);
let celcius = 20;
document.querySelector("#temp").innerHTML = celcius;

function toCelciusUnit() {
  document.querySelector("#temp").innerHTML = celcius;
  console.log(celcius);
}
let temp = document.querySelector("#to-celcius");
temp.addEventListener("click", toCelciusUnit);
function toFahenreit() {
  let fahenreit = celcius * (9 / 5) + 32;
  document.querySelector("#temp").innerHTML = fahenreit;
}
let fahenreit = document.querySelector("#to-fahenreit");
fahenreit.addEventListener("click", toFahenreit);
//week 5
let searchForm = document.querySelector("#search-bar");
// searchForm.addEventListener("submit", locationButton);

function displayWeather(response) {
  console.log(response.data);
  console.log(response.data.name);
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather").innerHTML = response.data.weather[0].main;
}

function currentPosition(city) {
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(displayWeather);
}

navigator.geolocation.getCurrentPosition(currentPosition);

function locationButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayLocationButton);
}
function displayLocationButton(position) {
  console.log(position);
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(url).then(displayWeather);
}
let currentLocationButton = document.querySelector("#search-bar");
currentLocationButton.addEventListener("click", locationButton);
