import React, {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './weather_component.styles';
import {useTheme} from '@app/hooks';
import {WeatherData} from '@app/interfaces';

interface Props {
  weatherData: WeatherData;
  loading: Boolean;
  error: Boolean;
}
const WeatherComponent: FC<Props> = (props) => {
  let {weatherData, loading, error} = props;
  let theme = useTheme(weatherData.weather.main);

  if (loading) {
    return <ActivityIndicator color={theme.text} />;
  }

  if (error) {
    return (
      <Text style={[styles.infoText, {color: theme.text}]}>Please Update</Text>
    );
  }

  return (
    <View>
      <Text style={[styles.cityText, {color: theme.text}]}>
        {weatherData.name}
      </Text>
      <Text style={[styles.infoText, {color: theme.text}]}>
        {weatherData.weather.description} / {weatherData.tmp}
      </Text>
      <Text style={[styles.infoText, {color: theme.text}]}>
        last update: {weatherData.lastUpdated}
      </Text>
    </View>
  );
};

export default WeatherComponent;
