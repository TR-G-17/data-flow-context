import React from 'react'

export default ({id, counter, increaseHandle, decreaseHandle}) => {
    return (
        <div>
            <button onClick={() => increaseHandle(id)}>+1</button>
            <span>{counter}</span>
            <button onClick={() => decreaseHandle(id)}>-1</button>
        </div>
    )
}