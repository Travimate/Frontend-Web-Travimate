import { combineReducers } from '@reduxjs/toolkit';
import clientReducer from './clients/client.slice';
import flightReducer from './flights/flights.slice';

const rootReducers = combineReducers({
  client: clientReducer,
  flight: flightReducer
});

export default rootReducers;
