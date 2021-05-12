import React from 'react'
import ProductCounter from "./ProductCounter";
import ProductCounterClass from "./ProductCounterClass";

export default ({id, title, price, counter}) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <ProductCounter
                id={id}
                counter={counter}
            />
        </div>
    )
}