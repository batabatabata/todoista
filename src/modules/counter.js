import { configureStore } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state -1
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

const {actions, reducer} = counterSlice
const {increment, decrement} = actions

// const counterSlice = createSlice({
//     name: 'counter', // reducers名
//     initialState: 0, // initialState
//     reducers: { // reducers
//       increment: state => state + 1,
//       decrement: state => state - 1
//     }
// })
  
// // configureStore を使用、middleware や devTools の設定済み
// const store = configureStore({
// reducer: counterSlice.reducer
// })
  
// document.getElementById('increment').addEventListener('click', () => {
// store.dispatch(counterSlice.actions.increment())
// })