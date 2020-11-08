import WeatherComponent from '@app/components/weather_component';
import {useTheme} from '@app/hooks';
import {useWeather} from '@app/hooks';
import React from 'react';
import {Button, View} from 'react-native';
import {styles} from './weather_screen.styles';

export const WeatherScreen = (): JSX.Element => {
  //
  let {weatherData, getWeather, loading, error} = useWeather();

  // Set theme according to weather main description
  let theme = useTheme(weatherData.weather.main);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <WeatherComponent
        error={error}
        loading={loading}
        weatherData={weatherData}
      />
      <Button title={'UPDATE'} onPress={getWeather} />
    </View>
  );
};
