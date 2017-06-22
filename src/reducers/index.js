import { combineReducers } from 'redux';
import { WeatherReducer } from './weather_reducer';

const rootReducer = combineReducers({
  weahter: WeatherReducer
});

export default rootReducer;
