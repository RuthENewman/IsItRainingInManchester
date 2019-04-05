let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let hourlyWeatherDescription = document.querySelector('.hourly-weather');
let minutelyWeatherDescription = document.querySelector('.minutely-weather');

manchesterLatitude = 53.483959;
manchesterLongitude = -2.244644;

const proxy = "https://cors-anywhere.herokuapp.com/";

const apiExample = `${proxy}https://api.darksky.net/forecast/bef64b7f9653bd2ecdad26b985f0706b/37.8267,-122.4233`;
const manchesterApi = `${proxy}https://api.darksky.net/forecast/bef64b7f9653bd2ecdad26b985f0706b/53.483959,-2.244644`;

fetch(manchesterApi)
  .then(response => response.json())
  .then(data => {
    const {icon} = data.currently;
    temperatureDegree.textContent = toCelsius(data.currently.temperature);
    temperatureDescription.textContent = data.currently.summary;
    hourlyWeatherDescription.textContent = data.hourly.summary;
    minutelyWeatherDescription.textContent = data.minutely.summary;
    setIcons(icon, document.querySelector('.icon'));

  })

function toCelsius(fahrenheit) {
  return parseFloat((fahrenheit - 32) / 1.8000).toFixed(1);
}

function setIcons(icon, iconID) {
  const skycons = new Skycons({color: "white"});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}
