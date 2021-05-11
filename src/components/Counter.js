import React, {useState} from 'react';

export default () => {

    // const state = {
    //     counter: 0,
    //     setCounter: () => {
    //         this.counter = this.counter + 1
    //     }
    // } // - Abstraction


    const [counter, setCounter] = useState(0)
    const increaseHandle = () => {
        setCounter( counter + 10 )
    }
    const decreaseHandle = () => {
        setCounter( counter - 10 )
    }
    return (
        <div>
            <button onClick={() => increaseHandle()}>+10</button>
            <span>{counter}</span>
            <button onClick={() => decreaseHandle()}>-10</button>
        </div>
    )
}