import React, {useContext} from 'react'
import Button from "./Button";
import ButtonClass from "./ButtonClass";
import {MyContextFunct} from "./App";

const ProductCounter = ({id, counter}) => {
    const cnt = useContext(MyContextFunct)
    return (
        <div>
            <Button
                id={id}
                actionFunction={cnt.increaseHandle}
                name="+1"
            />
            <span>{counter}</span>
            <Button
                id={id}
                actionFunction={cnt.decreaseHandle}
                name="-1"
                disabled={!counter}
            />
        </div>
    )
}

export default  ProductCounter