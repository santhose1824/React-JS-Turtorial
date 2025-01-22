document.addEventListener('DOMContentLoaded',()=>{
    const postContainer = document.querySelector('.posts-container')
    const ApiUrl="https://jsonplaceholder.typicode.com/posts"
    async function fetchPosts(){
        try{
            // Make API Call
            const response= await fetch(ApiUrl);
            const actucalPosts = await response.json();
            // clear loading element
            postContainer.innerHTML="";
            // display posts

           actucalPosts.forEach((posts)=>{
              const postElement = createPostElement(posts);
              postContainer.appendChild(postElement);
           });
        }
        catch(error){
            postContainer.innerHTML = `<p style="color:red";text-align:"center";> Error Loading Post .Please try again</p>`
        }
    }
    //  create post HTML element
    function createPostElement(posts){
      const article = document.createElement('article');
      article.className = 'post-card';
      const title = document.createElement('h2');
      title.className='post-title';
      title.textContent = posts.title;
      const body = document.createElement('p');
      body.className = 'post-body';
      body.textContent = posts.body;

      article.appendChild(title);
      article.appendChild(body);

      return article;
    }

    fetchPosts();
});


