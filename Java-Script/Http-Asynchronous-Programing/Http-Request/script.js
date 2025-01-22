
// function userData(callback){
//     fetch("https://jsonplaceholder.typicode.com/users/10").then((response)=>{
//        return response.json().then((users)=>{
//         console.log(users.id);
//         callback(users.id);
//        });
//     }).catch((error)=>{
//         console.log(error);
//     });
// }
// function fetchUserPosts(id){
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((response)=>{
//         return response.json().then((posts)=>{
//          console.log("Post Fetched Successfully");
//          console.log(posts);
//         });
//      }).catch((error)=>{
//          console.log("Error on fetching Data :",error);
//      });
// }


// userData(fetchUserPosts);


// Create Promise


// const myPromise = new Promise((resolve,reject)=>{
//     let success = false;
//    if(success){
//     resolve('Operation Successfully');
//    }
//    else{
//     reject('Operation Failed')
//    }
// });

// // Consume Promise
// myPromise.then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=>{
//   console.log("Operation Called");
// });



//  Promise Example



// const fetchDatPromise=fetch("https://jsonplaceholder.typicode.com/albums");


// fetchDatPromise.then((response)=>{
//     return response.json().then((data)=>{
//         console.log(data);
//     })
// }).catch((error)=>{
//     console.log(error);
// })



async function allAlbums(){
    try{
      const albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums");
      const ablums = await albumsResponse.json();
      console.log(ablums);
    }
    catch(error){
      console.log(error);
    }
}


allAlbums();