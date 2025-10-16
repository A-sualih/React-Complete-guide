import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // which is a map of all the reducers or to be precise it
    //  isa map of methods that represent all the diffrent caes
    // the diffrent action
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increment5(state, action) {
      {
        state.counter = state.counter + action.payload;
      }
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    }, //receve the current state as an argument
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //crate store
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
