import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FlightState {
  data?: any;
  query?: any;
  orderDetail? : any;
  orderPayment?: any;
  [key: string]: any;
}

const initialState: FlightState = {
    data: {},
    query: {},
    orderDetail: {},
    orderPayment: {},
};

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    orderData: (state, actions) => {
        state.data = {
          flights: actions.payload.data,
        };
        state.isDomestic = actions.payload.isDomestic;
        state.query = actions.payload.query;
    },
    checkoutData: (state, actions) => {
        state.orderDetail = actions.payload.orderDetail;
    },
    resetDataFlight: (state) => {
        state.data = {};
        state.query = {};
        state.orderDetail = {};
        state.orderPayment = {};
    },
  },
});

export const { orderData, checkoutData, resetDataFlight } = flightSlice.actions;

export const selectDataFlighState = (state: { flight: FlightState }) => state.flight.data;
export const selectQueryFlighState = (state: { flight: FlightState }) => state.flight.query;
export const selectCheckoutData = (state: { flight: FlightState }) => state.flight.orderDetail;

const flightReducer = flightSlice.reducer;
export default flightReducer;
