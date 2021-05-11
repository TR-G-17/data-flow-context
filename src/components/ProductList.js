import React from 'react'
import Product from "./Product";

export default ({products, increaseHandle, decreaseHandle}) => {
    return (
        <ul>
            { products.map(p => (
                <li key={p.id}>
                    <Product
                        id={p.id}
                        title={p.title}
                        price={p.price}
                        counter={p.counter}
                        increaseHandle={increaseHandle}
                        decreaseHandle={decreaseHandle}
                    />
                </li>
            )) }
        </ul>
    )
}