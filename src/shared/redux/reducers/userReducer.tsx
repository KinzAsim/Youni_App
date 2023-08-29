import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.User = action.payload;
    // },
  },
});

export const {} = userReducer.actions;

export default userReducer.reducer;
