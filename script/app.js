const temperature = document.querySelector(".temperature");
const cityName = document.querySelector(".city_name");
const weather = document.querySelector(".icon_text");
const cloudyInfo = document.querySelector(".cloudy_info");
const humidityInfo = document.querySelector(".humidity_info");
const windinfo = document.querySelector(".wind_info");
const iconWeather = document.querySelector(".icon");
const time = document.querySelector(".day");
const search = document.querySelector(".search");
const searchInput = document.querySelector("#search");
//Cityes list
const Yerevan = document.querySelector(".yerevan");
const Hrazdan = document.querySelector(".hrazdan");
const Moscow = document.querySelector(".moscow");
const NewYork = document.querySelector(".newYork");

//city weather url
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d0fe5157aae24c711b0d61eb63d834c`;

//Zapros
async function getWeatherByCity(city = "Yerevan") {
  const resp = await fetch(url(city));
  const data = await resp.json();
  addWeatherPage(data);
}
//Page property
function addWeatherPage(data) {
  cityName.textContent = `${data.name}`;
  temperature.textContent = `${Math.round(data.main.temp - 273.15)}°`;
  weather.textContent = `${data.weather[0].main}`;
  windinfo.textContent = `${data.wind.speed} Km/H`;
  iconWeather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="icon_size">`;
  humidityInfo.textContent = `${data.main.humidity} %`;
  cloudyInfo.textContent = `${data.clouds.all} %`;
}
//Search
search.addEventListener("click", () => {
  const city = searchInput.value;
  if (city) {
    getWeatherByCity(city);
  }
});
//Default
Yerevan.addEventListener("click", () => {
  getWeatherByCity(Yerevan.dataset.city);
});
Hrazdan.addEventListener("click", () => {
  getWeatherByCity(Hrazdan.dataset.city);
});
Moscow.addEventListener("click", () => {
  getWeatherByCity(Moscow.dataset.city);
});
NewYork.addEventListener("click", () => {
  getWeatherByCity(NewYork.dataset.city);
});
getWeatherByCity();

//time
const date = new Date();
setInterval(() => {
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = date.getDate();
  let dateDay = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  time.textContent = `${day} ${monthArr[month]} ${year} ${dayArr[dateDay]}`;
});
