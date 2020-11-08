import {WeatherData} from '@app/interfaces';
import {CHANGE_WEATHER} from '@actions/types';

export const initialState: WeatherData = {
  weather: {
    id: 0,
    main: '',
    description: '',
    icon: '',
  },
  tmp: 0,
  name: '',
  dt: 0,
  lastUpdated: '',
};

const weather = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_WEATHER:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default weather;
