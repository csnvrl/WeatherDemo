import {themes, Theme} from '@app/interfaces';
import {CHANGE_THEME} from '@app/actions';

export const initialState: Theme = themes.clear;

const theme = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;

    default:
      return state;
  }
};

export default theme;
