// import { useContext } from "react";
import "./Counter.css";

// import {CounteraContext } from "../App";


const CounterApp = () => {
    // const {count,increment,decrement} = useContext(CounteraContext);
  return (
      <div className="counter-container">
        {/* <h1>Counter : {count}</h1> */}
        <div className="btns">
          {/* <button className="btn" onClick={increment}>
            +
          </button> */}
          {/* <button className="btn" onClick={decrement}>
            -
          </button> */}
        </div>
      </div>
  );
};

export default CounterApp;
