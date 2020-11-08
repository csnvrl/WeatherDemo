import config from '@app/config';
import {
  GetCurrentWeatherParams,
  GetCurrentWeatherResult,
  WeatherData,
} from '@app/interfaces';
import {baseApi} from '../api_base';
import {timestampToFormattedString} from '@app/utils/utils';

export const getCurrentWeather = async (
  params: GetCurrentWeatherParams,
): Promise<WeatherData> => {
  try {
    const {lon, lat} = params;
    const apiResult = await baseApi.get<GetCurrentWeatherResult>('weather', {
      params: {
        lat: lat,
        lon: lon,
        appid: config.appId,
        units: config.weatherUnit,
      },
    });

    const resultData: GetCurrentWeatherResult = apiResult.data;

    const weatherData: WeatherData = {
      weather: resultData.weather[0],
      tmp: resultData.main.temp,
      name: resultData.name,
      dt: resultData.dt,
      lastUpdated: timestampToFormattedString(Date.now()),
    };
    return weatherData;
  } catch (error) {
    throw Error('Weather coulndt be updated');
  }
};
