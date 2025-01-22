// Child Node
const paranetElement = document.getElementById('parent');
console.log(paranetElement.childNodes);

paranetElement.childNodes.forEach(node=>console.log(node.nodeType));


// Children Nodes

console.log(paranetElement.children);
const convertedHTMlCollection = Array.from(paranetElement.children)
convertedHTMlCollection.forEach(node=>console.log(node));