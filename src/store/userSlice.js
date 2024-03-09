import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  reducers: {
    setUser: (state, action) => {
      // console.log("userdata",state, action)
      return action.payload;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice;
