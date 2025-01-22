function replaceArticle(articleId,newContent){
    const existsingArticle = document.getElementById(articleId);
    const newArticleElement = document.createElement("div");

    newArticleElement.className="article";
    newArticleElement.id = articleId;

    const newTextNode = document.createTextNode(newContent);
    newArticleElement.appendChild(newTextNode);

    existsingArticle.parentNode.replaceChild(newArticleElement,existsingArticle);
}

replaceArticle("article1","Something");
replaceArticle("article2","Something2");