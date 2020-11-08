import {combineReducers} from 'redux';
import weather from './weather';
import theme from './theme';

const rootReducer = combineReducers({
  weather,
  theme,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
