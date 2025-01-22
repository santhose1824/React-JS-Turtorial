function addNewStudent(name,grade){
    const studentElement = document.createElement('div');
    studentElement.className="student";
    const studentTextNode = document.createTextNode(`${name} : ${grade}`);
    studentElement.appendChild(studentTextNode);
    const studentListElement = document.getElementById("studentList");
    let beforeNode = null;
    for(const child of studentListElement.children){
        const childGrade = parseInt(child.textContent.split(":")[1]);
        console.log(child);
        if(grade<childGrade){
            beforeNode = child;
            break;
        }
    }
    studentListElement.insertBefore(studentElement,beforeNode);
}

addNewStudent("Emma",90);
addNewStudent("Ben",70);
addNewStudent("Sam",100);
addNewStudent("Arun",10)