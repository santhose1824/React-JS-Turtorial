// const app = process.env.APP_ENV || 'development'

// console.log(`Our Node Environment is runnig in ${app}`);



// const env = process.env.NODE_ENV;
// console.log(env);


// console.log(process);

const interval = setInterval(() => {
    if(process.env.NODE_ENV !== "production") {
        console.log("This script is not run  in the production");
        process.exit();
    }
    else{
        console.log("The script isrun in the production");
    }
});