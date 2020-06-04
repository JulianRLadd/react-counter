import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';


function Counter() {
    const [display, setDisplay] = useState(0);
    const [history, setHistory] = useState([]);

    // const buttonFunction = (target) => {
    //     return <button onClick={setDisplay(target)}>{target}</button>
    // }
    const handleIncrement = () => {
        setDisplay(display + 1)
    }
    const incrementTwo = () => {
        setDisplay(display + 2)
    }
    const incrementFive = () => {
        setDisplay(display + 5)
    }
    const incrementTen = () => {
        setDisplay(display + 10)
    }
    const handleDecrement = () => {
        setDisplay(display - 1)
    }
    const reset = () => {
        setDisplay(display * 0)
    }
    const save = () => {
        history.push(display)
        setHistory(history)
    }
    // const showHistory = (history) => {
    //     history.map(checkpoint => {
    //         buttonFunction(checkpoint)
    //     })
    // }
    return (
        <div className="counter">
            <Display display={display} />
            <ButtonPad onSave={save} onDecrement={handleDecrement}
                onIncrement={handleIncrement} onReset={reset} onTwo={incrementTwo}
                onFive={incrementFive} onTen={incrementTen} /*onHistory={showHistory}*/ />
        </div>
    )
}

export default Counter;