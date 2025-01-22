const containerElement = document.getElementById("container");
function createTask(newTask){
    const taskElement = document.createElement('div');
    // taskElement.setAttribute('class','task');
    taskElement.className='task'
    console.log(taskElement);

    const taksNodesList=document.createTextNode(newTask);
    console.log(taksNodesList);

    taskElement.appendChild(taksNodesList);

    containerElement.appendChild(taskElement);
}

createTask("Programming");
createTask("Coding");
createTask("Playing");