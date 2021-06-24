import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, subIncrement} from "../modules/counter";

const Counter = () => {

    const [inputNum, setInputNum] = useState(0)

    // storeからstateを取得
    const counter = useSelector(state => state.counter)

    // storeからstateを更新する関数を取得
    const dispatch = useDispatch()

    const addNum = () => {
        // +1する処理
        dispatch(increment(inputNum));
    };

    const subNum = () => {
        // -1する処理
        dispatch(decrement());
    };

    const handleChange = (e) => {
        const num = Number(e.target.value);
        setInputNum(num);
    };

    const addInputNum = () => {
        dispatch(subIncrement(inputNum))
    };

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={addNum}>+</button>
            <button onClick={subNum}>-</button>
            <input onChange={handleChange}/>
            <button onClick={addInputNum}>加算</button>
        </div>
    )
}

export default Counter