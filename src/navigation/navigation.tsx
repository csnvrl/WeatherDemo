import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {WeatherScreen} from '@app/screens/weather/weather_screen';

export const Navigation = (): JSX.Element => {
  const Stack = createStackNavigator();
  const screenOptions: StackNavigationOptions = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather" screenOptions={screenOptions}>
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
