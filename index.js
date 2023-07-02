function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayIndex];

  return `${days} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityHeading = document.querySelector("#city");
  cityHeading.innerHTML = cityInput.value;
}

// wk 5 Homework //

function showCity(event) {
  event.preventDefault();
  let apikey = "edbd33bd3684105eea9f312768dc818b";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector("#searchbar");
searchForm.addEventListener("submit", search);

function showPosition(position) {
  console.log(position);
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  axios.get(apiUrl).then(showWeather);
}

function showLocalTemp(position) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector("#currentlocation");
currentLocationButton.addEventListener("click", showLocalTemp);
