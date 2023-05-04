import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const initialState: initialStateProps = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const countDownSlice = createSlice({
  name: "countDownSlice",
  initialState,
  reducers: {
    setDays: (state, action: PayloadAction<number>) => {
      state.days = Math.floor(action.payload / (1000 * 60 * 60 * 24));
    },
    setHours: (state, action: PayloadAction<number>) => {
      state.hours = Math.floor(
        (action.payload % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
    },
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = Math.floor(
        (action.payload % (1000 * 60 * 60)) / (1000 * 60)
      );
    },
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = Math.floor((action.payload % (1000 * 60)) / 1000);
    },
  },
});

export const { setDays, setHours, setMinutes, setSeconds } =
  countDownSlice.actions;

export default countDownSlice.reducer;
