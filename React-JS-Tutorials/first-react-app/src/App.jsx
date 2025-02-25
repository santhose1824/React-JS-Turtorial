// import Profile from "./Profile/Profile";

import CounterAppReducer from "./UseReducer/CounterApp";
// import StudentForm from "./Forms/StudentForm";
//! This is for useContext
// import CounterApp from "./UseContext/Counter";
// import { useState, createContext, } from "react";


// import Post from "./UseEffect/Post";

// import Tasks from "./Tasks/Tasks";

// import Counter from "./Counter/Counter";

//! This is fro Use Context
// const CounteraContext = createContext();

// const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return (
//     <CounteraContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </CounteraContext.Provider>
//   );
// };

// export { CounteraContext, CounterProvider };

const initialState ={
    counter: 0,
}

const reducer = (state,action) =>{
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter : state.counter+1
        }
    }
    else if (action.type === "DECREMENT"){
        return {
            ...state,
            counter : state.counter-1
        }
    }

    else{
        return state
    }
};

export {initialState,reducer};


const App = ()=>{
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            margin:100
        }}>
            {/* This if for Components */}
            {/* <Profile/> */}
            {/* This if for Use State */}
            {/* <Counter/> */}
            {/* <Tasks/> */}
            {/* This if for Use Effecr and Use State */}
            {/* <Post/> */}
            {/* <StudentForm/> */}
            {/* This if for Use Context and Use State */}
            {/* <CounterProvider>
                <CounterApp/>
            </CounterProvider> */}

            <CounterAppReducer/>
        </div>
    );
}

export default App;