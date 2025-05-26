import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    addMood: (state, action) => {
      state.entries.push(action.payload);
    },
  },
});

export const { addMood } = moodSlice.actions;
export default moodSlice.reducer;