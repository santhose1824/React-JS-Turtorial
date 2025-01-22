const pElement = document.getElementById("textElement");
function addClass(){
  pElement.classList.add('highlight','bold','italic');
  console.log(pElement);
}

function removeClass(){
    pElement.classList.remove('highlight','bold','italic');
    console.log(pElement);
}

function toggleClass(){
    pElement.classList.toggle('highlight');
    pElement.classList.toggle('italic');
    console.log(pElement);
}

// Like this for all the classes


