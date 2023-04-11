import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 10,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increaseByFive(state, action){
      state.counter = state.counter + action.payload;
    },
    showCounter(state){
      state.showCounter = !state.showCounter;
    },
  }
});

export const counterActions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer
});
