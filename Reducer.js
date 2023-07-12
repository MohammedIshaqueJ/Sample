import React, {useState} from 'react';
import './App.css'
function Reducer() {

    const [count, setcount] = useState(0);
    
    return ( 
        <>
            <h1>Reducer Example - {count} </h1>
            <div className='App-header'>
                <button onClick={ ()=> setcount(count+1)}>INC +</button>
                <button onClick={ ()=> setcount(count-1)}>DEC -</button>
            </div>
        </>
    );
}

export default Reducer;