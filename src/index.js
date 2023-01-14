import _, { max } from 'lodash';
import __ from './fetch';
import './style.css';

const API_KEY = 'c7dd5531253eb3d7d8f017a306484476';


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
    
    getWeatherData();
});
