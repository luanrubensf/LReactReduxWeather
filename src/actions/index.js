import axios from 'axios';

const WEATHER_API_KEY = '1996d9508d97cad67f587d76cea48b57';

const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${BASE_URL}&q=${city},br`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
