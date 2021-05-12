import React from 'react'
import Product from "./Product";

export default ({products}) => {
    return (
        <ul>
            { products.map(p => (
                <li key={p.id}>
                    <Product
                        id={p.id}
                        title={p.title}
                        price={p.price}
                        counter={p.counter}
                    />
                </li>
            )) }
        </ul>
    )
}