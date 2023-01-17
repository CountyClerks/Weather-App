import { get } from "lodash";

const API_KEY = 'c7dd5531253eb3d7d8f017a306484476';

//API can be called with imperial units by replacing '&units=metric' with '&units=imperial'
const getWeatherURL = function (location) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${API_KEY}&units=metric`;
}

//Assign data from the API into an array accessed inside 'weather.js'
const getWeatherData = async function (url) {

    let weatherData = [];

    try {
        const response = await fetch(url);
        const dataToday =  await response.json();

        weatherData.locationCity = dataToday.name;
        weatherData.locationCountry = dataToday.sys.country;
        weatherData.clouds = dataToday.weather[0].main;
        weatherData.windspeed = Math.round((dataToday.wind.speed* 3.6) * 10) /10;
        weatherData.temp = Math.round(dataToday.main.temp * 10) /10;
        weatherData.humidity = dataToday.main.humidity;
    
        return weatherData;

    } catch (error) {
        console.log(error);
    }
}

const getWeather = async function(location) {

    let forcastURL = getWeatherURL(location);
    let forcast = await getWeatherData(forcastURL);
    return {forcastURL, forcast};
}

export {
    getWeatherURL,
    getWeatherData,
    getWeather
}