const API_KEY = '6587c4fbd7f70fd8e51ddc9223d32a49';

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:last-child');
      city.innerText = `${data.name}, `;
      weather.innerText = `${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
