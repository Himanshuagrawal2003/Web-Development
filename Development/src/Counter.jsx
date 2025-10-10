import {useState, useEffect} from 'react'

export default function Counter(){
    let [count, setCount] = useState(0);

    let incCounter = ()=>{
        setCount((currCount) => currCount +1 );
    };

    useEffect(function printSomething(){           //useEffect  for render somthing or (function) on second render time. 
        console.log("Hi, I rendered");
    });

    return(
        <div>
            <h2>Counter</h2>
            <p>Counter Is:  {count}</p>
            <button onClick={incCounter}>Increase Counter</button>
        </div>
    );
};