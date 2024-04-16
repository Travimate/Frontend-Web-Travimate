import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface CounterState {
  // accessToken?: string;
  // ClientKey?: string;
  // subDomain?: string;
  // isAuth?: boolean;
  profileClient?: any;
  permissions?: any;
  [key: string]: any;
}

// Define the initial state using that type
const initialState: CounterState = {
  // accessToken: '',
  // ClientKey: '',
  // subDomain: '',
  // isAuth: false,
  profileClient: '',
  permissions: '',
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setDataClient: (state, action: PayloadAction<CounterState>) => {
      const newState = { ...state };
      const propertiesToUpdate = [
        // 'ClientKey',
        // 'accessToken',
        // 'subDomain',
        // 'isAuth',
        'permissions',
        'profileClient',
      ];

      propertiesToUpdate.forEach((property: string) => {
        if (action.payload[property] !== undefined) {
          newState[property] = action.payload[property];
        }
      });

      Object.assign(state, newState);
    },

    logoutClient: (state) => initialState,
  },
});

export const { setDataClient, logoutClient } = clientSlice.actions;

export const selectClientKey = (state: { client: CounterState }) => state.client.ClientKey;
export const selectAccessToken = (state: { client: CounterState }) => state.client.accessToken;

const clientReducer = clientSlice.reducer;
export default clientReducer;
