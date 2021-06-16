import { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const addCounter = () => {
        setCounter(counter + 1)
    }

    const subCounter = () => {
        setCounter(counter - 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={addCounter}>+1</button>
            <button onClick={subCounter}>-1</button>
        </div>
    )
}

// export default Counter


// const addCounter = () => {
//     counter.dispatch(counterSlice.actions.increment)
// }


// const subCounter = () => {
//     counter.dispatch(counterSlice.actions.decrement)
// }