import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@reducers/index';
import {changeWeather} from '@actions/weather';
import {WeatherData} from '@app/interfaces';
import {getCurrentWeather} from '@app/services';
import {getLocation} from '@services/location/location_service';

export const useWeather = (): {
  weatherData: WeatherData;
  getWeather: () => void;
  loading: Boolean;
  error: Boolean;
} => {
  let myDispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  //Redux Weather Data
  const weatherData = useSelector((state: RootState) => state.weather);

  const getWeather = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      // Coordinates to get Weather
      let {lat, lon} = await getLocation();
      //Service Call
      let weatherResponse = await getCurrentWeather({lat: lat, lon: lon});
      //Updating Redux
      myDispatch(changeWeather(weatherResponse));
    } catch (serviceError: Error | any) {
      Alert.alert(serviceError.toString() || 'something went wrong');
    }
    setLoading(false);
  }, [myDispatch]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  // If weather data last update is not set before, never been successfull data update
  let error: boolean = weatherData.lastUpdated === '';

  //Even Weather Data is not updated, return Redux weather da to show last updated
  return {weatherData, getWeather, loading, error};
};
