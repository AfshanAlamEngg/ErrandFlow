import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LocationState = {
  latitude: number;
  longitude: number;
};

const initialState: LocationState = {
  latitude: 0,
  longitude: 0,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      return action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
