import {useDispatch} from 'react-redux';
import {Theme, WeatherTheme, themes} from '@app/interfaces';
import {changeTheme} from '@app/actions';
import {useEffect} from 'react';

export const useTheme = (main: WeatherTheme): Theme => {
  let dispatch = useDispatch();

  let theme = getTheme(main);

  useEffect(() => {
    dispatch(changeTheme(theme));
  }, [dispatch, theme]);

  return theme;
};

export const getTheme = (main: WeatherTheme): Theme => {
  let theme: Theme;

  if (main === 'Clear') {
    theme = themes.clear;
  } else if (main === 'Drizzle' || main === 'Rain' || main === 'Thunderstorm') {
    theme = themes.rain;
  } else if (main === 'Snow') {
    theme = themes.snow;
  } else if (main === 'Clouds') {
    theme = themes.cloud;
  } else {
    // For others default one is clear
    theme = themes.clear;
  }

  return theme;
};
