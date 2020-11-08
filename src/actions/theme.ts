import {Theme} from '@app/interfaces';
import {CHANGE_THEME} from './types';

export const changeTheme = (theme: Theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};
