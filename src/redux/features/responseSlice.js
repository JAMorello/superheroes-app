import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return { token: token, error: "", date: Date.now() };
  }
  return { token: "", error: "", date: Date.now() };
};

const initialState = getInitialState();

export const responseSlice = createSlice({
  name: "response",
  initialState: initialState,
  reducers: {
    updateResponse: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateResponse } = responseSlice.actions;

export default responseSlice.reducer;
