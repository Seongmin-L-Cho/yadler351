import { configureStore, createSlice } from "@reduxjs/toolkit";

const roundStack = createSlice({
  name: "roundStack",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    set: (state, action) => {
      state = action.payload;
    },
    remove: (state, action) =>
      state.filter((roundStack) => roundStack !== action.payload),
  },
});

export const { add, remove, set } = roundStack.actions;

export default configureStore({ reducer: roundStack.reducer });
