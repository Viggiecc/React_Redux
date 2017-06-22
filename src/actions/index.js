import axios from 'axios';

const API_KEY = 'a07a31329d123725d32d61d2e72c8bd0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_WEATHER = 'FETCH_WEATHER';
//an action is a function return an action object which must has type

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  //return a promise
  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
