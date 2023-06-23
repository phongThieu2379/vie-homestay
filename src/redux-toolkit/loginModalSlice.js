import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: false,
};

const loginModalSlice = createSlice({
  name: "loginModalSlice",
  initialState,
  reducers: {
    setModalOpen: (state,action) => {
      state.modalIsOpen= true ;
    },
    setModalClose: (state) => {
        state.modalIsOpen= false ;
      },
  },
});

export const {setModalClose,setModalOpen} = loginModalSlice.actions;

export default loginModalSlice.reducer;
