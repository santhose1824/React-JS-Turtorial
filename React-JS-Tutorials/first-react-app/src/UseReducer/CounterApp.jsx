import { initialState, reducer } from "../App";
import "./CounterApp.css";
import { useReducer } from "react";
const CounterAppReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
      <div className="counter-container">
        <h1>Counter : {state.counter}</h1>
        <div className="btns">
          <button className="btn" onClick={()=>dispatch({type:"INCREMENT"})}>
            +
          </button>
          <button className="btn" onClick={()=>dispatch({type:"DECREMENT"})}>
            -
          </button>
        </div>
      </div>
  );
};

export default CounterAppReducer;
