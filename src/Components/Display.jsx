import React, { useState } from 'react';
import FlipNumbers from 'react-flip-numbers';

function Display({ display }) {
    return (
        <section className="display">
            <FlipNumbers height={125} width={125} color="gold" background="" play={true} play perspective={1000} numbers={display.toString()} />
        </section>
    )

}

export default Display;

