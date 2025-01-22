function fetchData(callback){
    console.log("Fetching Weather Data");
    setTimeout(()=>{
        console.log("Weather Data is fetched Successfully");
        callback();
    },2000);
}

function processData(){
    console.log("Process the weather Data to display temperature and conditions");
}



fetchData(processData);