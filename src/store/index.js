import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  value: 10,
  showCounter: true
}

const counterSlice = createSlice({
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

const initialAuthenticationState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthenticationState,
  reducers: {
    login(state){
      state.isAuthenticated = true;
    },
    logOut(state){
      state.isAuthenticated = false;
    }
  }
})

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});
