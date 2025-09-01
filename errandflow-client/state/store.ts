import { configureStore } from '@reduxjs/toolkit';
import errandsReducer from './errandsSlice';
import locationReducer from './locationSlice';
import assistantReducer from './assistantSlice';

export const store = configureStore({
  reducer: {
    errands: errandsReducer,
    location: locationReducer,
    assistant: assistantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
