import React, {Component} from "react";
import ProductList from "./ProductList";
import Counter from "./Counter";

const getProductsList = () => {
    return [
        {id: 1, title: 'Product 1', price: 100, counter: 0},
        {id: 2, title: 'Product 2', price: 120, counter: 0},
        {id: 3, title: 'Product 3', price: 170, counter: 0},
        {id: 4, title: 'Product 4', price: 150, counter: 0},
    ]
}

export const MyContext = React.createContext()

export default class AppClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: getProductsList()
        }
    }
    increaseHandle = (id) => {
        this.changeCounter(id, 1)
    }
    decreaseHandle = (id) => {
        this.changeCounter(id, -1)
    }
    changeCounter = (id, alpha) => {
        const arr = [...this.state.products]
        const idx = arr.findIndex( p => p.id === id )
        if ( idx !== -1 ) {
            if ( arr[idx].counter === 0 && alpha < 0 ) {
                alpha = 0
            }
            arr[idx].counter += alpha
        }
        this.setState({...this.state, products: arr})
    }

    render() {
        return (
            <div>
                <MyContext.Provider value={{
                    increaseHandle: this.increaseHandle,
                    decreaseHandle: this.decreaseHandle
                }}>
                    <ProductList
                        products={this.state.products}
                    />
                </MyContext.Provider>
            </div>
        )
    }

}