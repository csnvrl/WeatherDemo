import {WeatherData} from '@app/interfaces';
import {CHANGE_WEATHER} from './types';

export const changeWeather = (weatherData: WeatherData) => {
  return {
    type: CHANGE_WEATHER,
    payload: weatherData,
  };
};
