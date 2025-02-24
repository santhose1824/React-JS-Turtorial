const fs  = require("fs");

// console.log(fs);

//! Read a file
// Synchronous
// const data = fs.readFileSync("./sample.txt");
// const content = data.toString();
// console.log(content);


// Asynchronous

// fs.readFile("./sample.txt","utf-8",(err,content)=>{
//     if(err){
//         console.error(err);
//         throw err;
//     }
//     else{
//         console.log(content);
//     }
// });


//! Write a content in a file
fs.writeFile("./writingContent.txt","This content is written vai writeFile Function from File System API",(err,data)=>{
    if(err) {
        console.error(err);
        throw err;
        return;
    }

    else{
        console.log("The file is written successfully");
    }
});