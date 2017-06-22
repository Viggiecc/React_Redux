import { FETCH_WEATHER } from '../actions/index';

export function WeatherReducer(state = [], action) {
  console.log('Action:', action);
  switch(action.type) {
    case FETCH_WEATHER:
      //ES6 sytax
      return [action.payload.data, ...state];
      //ES5 both return a new array, not mutate the existing state array
      // return state.concat([action.payload.data]);
  }
  return state;
}
