import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("auth")) || null,
  },

  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;

      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.clear("auth");
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;
