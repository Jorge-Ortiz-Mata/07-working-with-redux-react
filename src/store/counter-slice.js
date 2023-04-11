import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  value: 10,
  showCounter: true
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state){
      state.value++;
    },
    decrement(state){
      state.value--;
    },
    increaseByFive(state, action){
      state.value = state.value + action.payload;
    },
    showCounter(state){
      state.showCounter = !state.showCounter;
    },
  }
});

export const counterActions = counterSlice.actions;
