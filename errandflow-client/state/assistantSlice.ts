import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AssistantState = {
  nudgesEnabled: boolean;
  confidenceScore: number;
};

const initialState: AssistantState = {
  nudgesEnabled: true,
  confidenceScore: 0,
};

const assistantSlice = createSlice({
  name: 'assistant',
  initialState,
  reducers: {
    toggleNudges: (state) => {
      state.nudgesEnabled = !state.nudgesEnabled;
    },
    setConfidenceScore: (state, action: PayloadAction<number>) => {
      state.confidenceScore = action.payload;
    },
  },
});

export const { toggleNudges, setConfidenceScore } = assistantSlice.actions;
export default assistantSlice.reducer;
