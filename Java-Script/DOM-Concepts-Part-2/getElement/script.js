const allTheImageElement = document.getElementById("imageGallery").querySelectorAll('img');

let imagesByALice = [];


allTheImageElement.forEach((image)=>{
    const author = image.getAttribute("data-author");
    console.log(author);

    if(author=='Alice'){
        imagesByALice.push(image);
    }
});

console.log(imagesByALice);

imagesByALice.forEach((img)=>console.log(img)
)


allTheImageElement.forEach((imges)=>{
    if(!imagesByALice.includes(imges)){
        imges.style.display="none";
    }
})

