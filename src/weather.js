import { update } from 'lodash';
import * as fetch from './fetch';
import * as updateDOM from './updateDOM';

const button = document.querySelector('.change-location');

function weather () {

    const userLocation = async function () {
        let location = document.querySelector('input[name="search"]');

        let forcast = await fetch.getWeather(location);
        updateDOM.updateWeatherData(location, forcast.forcast);
            
    }

    userLocation();
}

function renderToDOM() {
    button.addEventListener("click", () => {
        weather();
    });
}

export default renderToDOM;