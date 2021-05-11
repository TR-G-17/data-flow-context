import React, {useState} from "react";
import ProductList from "./ProductList";


const getProductsList = () => {
    return [
        {id: 1, title: 'Product 1', price: 100, counter: 0},
        {id: 2, title: 'Product 2', price: 120, counter: 0},
        {id: 3, title: 'Product 3', price: 170, counter: 0},
        {id: 4, title: 'Product 4', price: 150, counter: 0},
    ]
}

export default () => {
    const [products, setProducts] = useState( getProductsList() )

    const increaseHandle = (id) => {
        changeCounter(id, 1)
    }

    const decreaseHandle = (id) => {
        changeCounter(id, -1)
    }

    const changeCounter = (id, alpha) => {
        const arr = [...products]
        const idx = arr.findIndex( p => p.id === id )
        if ( idx !== -1 ) {
            if ( arr[idx].counter === 0 && alpha < 0 ) {
                alpha = 0
            }
            // const product = {...arr[ idx ]}
            // product.counter += alpha
            // arr[idx] = product
            arr[idx].counter += alpha
        }
        setProducts(arr)
    }

    return (
        <div>
            <ProductList
                products={products}
                increaseHandle={increaseHandle}
                decreaseHandle={decreaseHandle}
            />

        </div>
    )
}

// State = [{},{},{}]