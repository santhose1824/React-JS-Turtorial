global.myGlobalObject = "Hello World";

console.log(global);


//! setInterval and clearInterval

let count = 0;
const interval =
    setInterval(() => {
        console.log("Hello World");
        count++;
        if (count == 5) {
            clearInterval(interval);
        }
    }, 1000);




// setTimeOut

setTimeout(()=>{
    console.log("This message is delayed in 5s");
},5000);