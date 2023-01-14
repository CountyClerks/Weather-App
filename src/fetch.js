let location = document.querySelector('input[name="search"]');

const getWeatherData = async function () {
    const weatherToday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${API_KEY}&units=metric`);
    const dataToday = await weatherToday.json();
    console.log(dataToday);

    const futureWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location.value}&appid=${API_KEY}&units=metric`);
    const dataFuture = await futureWeather.json();
    console.log(dataFuture);
}


export {
    getWeatherData
}