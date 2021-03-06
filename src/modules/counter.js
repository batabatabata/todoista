import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state -1,
        subIncrement: (state, action) => {
            console.log(action)
            return state + action.payload
        }
    }
})

export const {increment, decrement, subIncrement} = counterSlice.actions

export const counterReducer = counterSlice.reducer;