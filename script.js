const apiKey = "8aff1c35fbd224756cd16c6ce387aaf8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "Weather app/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "Weather app/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "Weather app/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "Weather app/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "Weather app/images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
