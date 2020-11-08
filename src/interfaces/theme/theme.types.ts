export type WeatherTheme =
  | 'Clear'
  | 'Rain'
  | 'Snow'
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Clouds'
  | string;

export type Theme = {
  text: string;
  background: string;
};

export type Themes = {
  clear: Theme;
  rain: Theme;
  snow: Theme;
  cloud: Theme;
};

export const themes: Themes = {
  clear: {
    text: '#ffffff',
    background: '#1da1f2',
  },
  rain: {
    text: '#1da1f2',
    background: '#A9A9A9',
  },
  snow: {
    text: '#000000',
    background: '#ffffff',
  },
  cloud: {
    text: '#ffffff',
    background: '#A9A9A9',
  },
};
