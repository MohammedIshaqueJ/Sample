import React, { useReducer, useState } from 'react';
import './App.css';

const initialState = 0;

const reducer = (state, action) => {
    if (action.type === 'INC')
        return state + 1;
    else if (action.type === 'DEC')
        return state - 1;
}

function Reducer1() {

    // const [count, setcount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Reducer1 Example - {state} </h1>
            <div className='App-header'>
                <button onClick={() => dispatch({ type: 'INC' })}>INC +</button>
                <button onClick={() => dispatch({ type: 'DEC' })}>DEC -</button>
            </div>
        </>
    );
}

export default Reducer1;