import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("team")) || [];

export const teamSlice = createSlice({
  name: "team",
  initialState: initialState,
  reducers: {
    addMember: (state, action) => {
      const newTeam = [...state, action.payload];
      localStorage.setItem("team", JSON.stringify(newTeam));
      return newTeam;
    },
    removeMember: (state, action) => {
      const heroID = action.payload.id;
      const newTeam = state.filter((e) => e.id !== heroID);
      localStorage.setItem("team", JSON.stringify(newTeam));
      return newTeam;
    },
  },
});

// Action creators
export const { addMember, removeMember } = teamSlice.actions;

export default teamSlice.reducer;
