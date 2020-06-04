import React from 'react'
import one from '../Assets/one.png';
import two from '../Assets/two.png';
import five from '../Assets/five.png';
import ten from '../Assets/ten.png';
import minus from '../Assets/minus.png';
import save from '../Assets/save.png';
import reset from '../Assets/reset.png';
import history from '../Assets/history.png';
export default function ButtonPad({ onHistory, onDecrement, onIncrement, onTwo, onFive, onTen, onReset, onSave }) {

    return (

        <div style={{ textAlign: "center" }}>
            <img onClick={onIncrement} src={one} alt="Hello" width="100rem" />
            <img onClick={onTwo} src={two} alt="Hello" width="100rem" />
            <img onClick={onFive} src={five} alt="Hello" width="100rem" />
            <img onClick={onTen} src={ten} alt="Hello" width="100rem" />
            <img onClick={onDecrement} src={minus} alt="Hello" width="100rem" />
            <img onClick={onSave} src={save} alt="Hello" width="100rem" />
            <img onClick={onReset} src={reset} alt="Hello" width="100rem" />
            {/* <img onClick={onHistory} src={history} alt="Hello" width="100rem" /> */}

        </div>
    )
}
