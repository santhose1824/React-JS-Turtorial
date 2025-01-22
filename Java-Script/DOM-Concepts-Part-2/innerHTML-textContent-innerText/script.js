const blogTtilElement = document.getElementById("title");


console.log(blogTtilElement.textContent);

blogTtilElement.textContent="New Blog Title";

console.log(blogTtilElement);

blogTtilElement.style.backgroundColor ="red";

blogTtilElement.style.color ="white"


// Inner HTML


const paragraphElement = document.getElementById("paragraph");

paragraphElement.innerHTML+=`<br><h1>New Paragph ,This is new Paragraph</h1>`;


// Inner Text


const firstCOmmnetElement = document.getElementById("comment1").querySelector(".commentText");


console.log(firstCOmmnetElement);


firstCOmmnetElement.innerText = "Updated First comment";



