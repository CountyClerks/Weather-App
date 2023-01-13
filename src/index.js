import _, { max } from 'lodash';
import './style.css';

const API_KEY = 'c7dd5531253eb3d7d8f017a306484476';

const location = document.querySelector('input[name="search"]');
const button = document.querySelector('button');

function weatherData(temp, feelsTemp, windSpeed, humidity, cloudCover, maxTemp, minTemp) {
    this.temp = temp;
    this.feelsTemp = feelsTemp;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.cloudCover = cloudCover;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
}

button.addEventListener("click", () => {
    
    // Promise.all([
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${API_KEY}&units=metric`),
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location.value}&appid=${API_KEY}&units=metric`)
    // ]).then(function(responses) {
    //     return Promise.all(responses.map(function (response) {
    //         return response.json();
    //     }))
    // }).then(function(response) {
    //     console.log(response);
    // }).catch(function(err) {
    //     console.log(err);
    // })
    getWeatherData();
});


async function getWeatherData() {
    const weatherToday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${API_KEY}&units=metric`);
    const dataToday = await weatherToday.json();
    console.log(dataToday);

    const futureWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location.value}&appid=${API_KEY}&units=metric`);
    const dataFuture = await futureWeather.json();
    console.log(dataFuture);
}