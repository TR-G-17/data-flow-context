import React from "react";

export default ({id, actionFunction, name, disabled}) => {
    return (
        <button
            disabled={disabled}
            onClick={() => {
                actionFunction(id)
            }
            }>{name}</button>
    )
}