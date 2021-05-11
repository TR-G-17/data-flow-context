import React from 'react'
import ProductCounter from "./ProductCounter";

export default ({id, title, price, counter, increaseHandle, decreaseHandle}) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <ProductCounter
                id={id}
                counter={counter}
                increaseHandle={increaseHandle}
                decreaseHandle={decreaseHandle}
            />
        </div>
    )
}