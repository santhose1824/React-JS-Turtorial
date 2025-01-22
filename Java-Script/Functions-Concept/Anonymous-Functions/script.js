// Anonymous Functions


// Function Decleration

// IFI
(function(){
    console.log("Hello");
})(); // Invoke this function or calling the functions


(function(a,b){
    let result = a+b
    console.log(result);
})(10,3);

// Arrow function anonymous function
((a,b)=>{
    let result = a-b
    console.log(result);
})(20,10);

