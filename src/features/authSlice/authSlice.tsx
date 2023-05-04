import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthSliceInitialStateProps = {
  username: string | null;
  email: string | null;
  id: number | null;
};

const initialState: AuthSliceInitialStateProps = {
  username: null,
  email: "",
  id: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getAuth: (state, action: PayloadAction<AuthSliceInitialStateProps>) => {
      const { username, email, id } = action.payload;

      (state.username = username), (state.email = email), (state.id = id);
    },
    logOut: (state) => {
      (state.username = null), (state.email = null), (state.id = null);
    },
  },
});

export const { getAuth, logOut } = authSlice.actions;

export default authSlice.reducer;
