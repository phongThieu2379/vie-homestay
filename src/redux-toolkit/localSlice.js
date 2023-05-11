import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    localInfo:[],
}

const localSlice = createSlice({
  name: "localSlice",
  initialState,
  reducers: {
    setLocalAction:(state,action) => { 
        state.localInfo=action.payload
     }
  }
});

export const {setLocalAction} = localSlice.actions

export default localSlice.reducer