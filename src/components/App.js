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
        console.log( id )
    }
    const decreaseHandle = (id) => {
        console.log(id)
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