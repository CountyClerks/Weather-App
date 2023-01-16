import {format, getDate} from 'date-fns';

let date = new Date();
let currentDate = getDate(date);
let currentDay = format(date, 'EEEE');
let currentMonth = format(date, 'LLL');
let currentYear = format(date, 'yyyy');

let weekDay = document.querySelector('#week-day');
let todayDate = document.querySelector('#today-date');
let locationName = document.querySelector('#location');

let tempTitle = document.querySelector('#temp');
let cloudCover = document.querySelector('#cloud-cover');

let humidityPercent = document.querySelector('#humidity-percent');
let windSpeed = document.querySelector('#wind-speed');

todayDate.innerText = `${currentDate} ${currentMonth} ${currentYear}`;
weekDay.innerText = currentDay;

function updateWeatherData(location, forcast) {

    cloudCover.innerText = `${forcast.clouds}`;
    locationName.innerText = `${forcast.locationCity}, ${forcast.locationCountry}`;
    tempTitle.innerText = `${forcast.temp}°C`;
    humidityPercent.innerText = `${forcast.humidity}%`;
    windSpeed.innerText = `${forcast.windspeed} km/h`;

}

export {
    updateWeatherData
}