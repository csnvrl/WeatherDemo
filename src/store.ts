import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '@app/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

//Persisted Reducer To Show Last Updated Weather if Weather Data cannot be updated
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
let persistor = persistStore(store, null);

export {store, persistor};
