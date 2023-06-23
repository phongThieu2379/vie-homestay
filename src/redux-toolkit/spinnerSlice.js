import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOnAction: (state) => {
      state.isLoading = true;
    },

    setLoadingOffAction: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setLoadingOffAction, setLoadingOnAction } = spinnerSlice.actions;

export default spinnerSlice.reducer;
