import {useReducer, useState} from "react";
import Info from "./Info";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <Info/>
    );
}

export default Counter;