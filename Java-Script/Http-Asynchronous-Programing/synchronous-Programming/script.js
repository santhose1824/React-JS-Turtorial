// // Synchrounous
// console.log("Step 1 : Start boiling ");
// console.log("Step 2: Add pasta to the pot");
// console.log("Step 3: Stir and wait for 10 min");
// console.log("Step 3 : Drain the pasta and serve");


function bloackingTasks(){
    console.log("Step 1 : Start a long-running taks");
    // Simulate the blocking tasks
    const startTime = Date.now();
    while(Date.now()- startTime<5000){}

    console.log("Step 2: Long-running taks finsihed ");
}

bloackingTasks();



