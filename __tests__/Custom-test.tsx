/**
 * @format
 */

import 'react-native';
import {timestampToFormattedString} from '@app/utils/utils';
import {getTheme} from '@app/hooks';
import {themes} from '@app/interfaces';

describe('Check Get Theme Function for different cases', () => {
  test('For expected scenarios', () => {
    expect(getTheme('Clouds')).toBe(themes.cloud);
  });

  test('For unexpected scenarios', () => {
    expect(getTheme('sadsakj')).toBe(themes.clear);
  });
});

test('Get Formatted String From Timestamp', () => {
  expect(timestampToFormattedString(1604870864000)).toBe('09/11/2020 00:27');
});
