import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import dashboardReducer from './reducers/dashboardReducer';
import favouriteReducer from './reducers/favouriteReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favouriteList'],
};

const rootReducer = combineReducers({
  dashboardReducer,
  favouriteReducer: persistReducer(persistConfig, favouriteReducer),
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(Store);
