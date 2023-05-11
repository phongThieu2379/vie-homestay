import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listRoom:[],
}

const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    listRoomAction:(state,action) => { 
        state.listRoom=action.payload
     }
  }
});

export const {listRoomAction} = detailSlice.actions

export default detailSlice.reducer