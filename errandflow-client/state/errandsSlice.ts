import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Errand = {
  id: string;
  type: string;
  priority: string;
};

const initialState: Errand[] = [];

const errandsSlice = createSlice({
  name: 'errands',
  initialState,
  reducers: {
    addErrand: (state, action: PayloadAction<Errand>) => {
      state.push(action.payload);
    },
    removeErrand: (state, action: PayloadAction<string>) => {
      return state.filter(errand => errand.id !== action.payload);
    },
    clearErrands: () => [],
  },
});

export const { addErrand, removeErrand, clearErrands } = errandsSlice.actions;
export default errandsSlice.reducer;
