import { useState } from "react";
import "./Counter.css";
const Counter = () =>{
    const [count, setCount] = useState(0);
    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <p style={{fontSize:30}}>{count}</p>
            <div className="buttons">
                <button onClick={()=> setCount(count+1)}>Increment</button>
                <button onClick={()=>{
                    setCount(count-1);
                    if(count ===0){
                        setCount(0);
                        alert("Minimum limit Reached");
                    }
                }}>Decrement</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;