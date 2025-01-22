const students = [
    {
        name:'Santhose',
        age:21,
        skilled_in:'Full Stack Development',
        city:'Sivakasi',
    },
    {
        name:'Roshan Kumar',
        age:21,
        skilled_in:'Full Stack Development and AI&Ml&DL',
        city:'Madurai',
    },
    {
        name:'Nhiranjan',
        age:21,
        skilled_in:'AI & ML',
        city:'Maduari',
    },
    {
        name:'Santhosh Kumar',
        age:21,
        skilled_in:'AI & ML and Dijango',
        city:'Dindugul',
    },
    {
        name:'Harini',
        age:21,
        skilled_in:'AI Engineer and Developer',
        city:'Maduari',
    },

];

console.log(students);



// Accessing the array of Objects


const firstUser = students[0];
console.log(firstUser);

const lastUser = students[4];
console.log(lastUser);


// Add new user

students.push(
    {
        name:'Hayagreevan',
        age:21,
        skilled_in:'Electronics and Communication Engineer',
        city:'Sivakasi',
    },
)


console.log(students);



// Update the objects inside the Array


const firstUserData = students[0].name='H.M.Santhose';


console.log(students[0]);




