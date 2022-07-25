import { createSlice } from "@reduxjs/toolkit";

const name = "Count";
const initialState = 0;

const reducers = {
  increaseOne: (state) => {
    return state + 1;
  },
  decreaseOne: (state) => {
    return state - 1;
  },
};

const slice = createSlice({ initialState, name, reducers });

export const { increaseOne, decreaseOne } = slice.actions;

export default slice.reducer;
