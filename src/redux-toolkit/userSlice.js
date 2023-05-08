import { createSlice } from "@reduxjs/toolkit";
import { localStore } from "../service/localService";

const initialState = {
  userInfor: localStore.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLoginAction: (state, action) => {
        state.userInfor = action.payload;
    },

  },
});

export const {setLoginAction} = userSlice.actions;

export default userSlice.reducer;
