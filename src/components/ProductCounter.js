import React from 'react'
import Button from "./Button";

export default ({id, counter, increaseHandle, decreaseHandle}) => {
    return (
        <div>
            <Button
                id={id}
                actionFunction={increaseHandle}
                name="+1"
            />
            {/*<button onClick={() => increaseHandle(id)}>+1</button>*/}
            <span>{counter}</span>
            <Button
                id={id}
                actionFunction={decreaseHandle}
                name="-1"
                disabled={!counter}
            />
            {/*<button disabled={!counter} onClick={() => decreaseHandle(id)}>-1</button>*/}
        </div>
    )
}