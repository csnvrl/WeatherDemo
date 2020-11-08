import {GetCurrentWeatherParams} from '@app/interfaces';
import GetLocation from 'react-native-get-location';
import config from '@app/config';

export const getLocation = async (): Promise<GetCurrentWeatherParams> => {
  try {
    const locationConfig: GetLocation.GetCurrentPositionOptions = {
      enableHighAccuracy: false,
      timeout: config.locationTimeout,
    };

    const location: GetLocation.Location = await GetLocation.getCurrentPosition(
      locationConfig,
    );
    return {
      lat: location.latitude,
      lon: location.longitude,
    };
  } catch (error) {
    throw Error(error);
  }
};
