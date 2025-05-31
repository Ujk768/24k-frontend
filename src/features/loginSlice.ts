import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loginState: "pending", // pending, success, error
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  //this will be removed and useed by api later
  reducers: {
    loginUser: (state) => {
      state.loginState = "success";
      state.error = null;
    },
    logOutUser: (state) => {
      state.loginState = "failure";
      state.error = null;
    },
  },
});

export default loginSlice.reducer;
// will add login through api call later
export const { loginUser, logOutUser } = loginSlice.actions;
