import React, {useState} from "react"

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0)
    }

    const xIncrement = () => {
        setCount(count + 8);
    }

    const xDecrement = () => {
        setCount(count - 8);
    }

    

    return( <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="increment-button" onClick={increment} onDoubleClick={xIncrement}>Increment</button>
            <button className="reset-button" onClick={reset}>reset</button>
            <button className="decrement-button" onClick={decrement} onDoubleClick={xDecrement}>decrement</button>

            </div>)
}

export default Counter