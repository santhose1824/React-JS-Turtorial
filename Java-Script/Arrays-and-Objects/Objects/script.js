//  creating Objects


const userData = {
    name:"Santhose",
    age:21,
    job:"Developer",
    isMale:true
};

console.log(userData);

// Adding properties

userData.isMarried = false;
userData.country = "IN";

console.log(userData);

userData['hobby'] ='coding';
console.log(userData);

userData['courses']= ['JS,Node Js,SQL,Flutter,Dart,Firebasse'];
console.log(userData);


// const userData1=["Santhose",21,"Developer",false];


// Accessing Object Properties

// 1)Dot Notation
console.log("Accessing object properties using dot notation");
const personName = userData.name;
console.log(personName);
const personAge = userData.age;
console.log(personAge);
const personJob = userData.job;
console.log(personJob);
const personGender =  userData.isMale;
console.log(personGender);
const personCourses =userData.courses;
console.log(personCourses);
const personHobby = userData.hobby;
console.log(personHobby);
console.log("---------------------------------------------------------------");


// 2)Bracket Notation
console.log("Accessing object properties using bracket notation");
const userName = userData['name'];
console.log(userName);
const userAge = userData['age'];
console.log(userAge);
const userJob = userData['job'];
console.log(userJob);
const userGender =  userData['isMale'];
console.log(userGender);
const userCourses =userData['courses'];
console.log(userCourses);
const userHobby = userData['hobby'];
console.log(userHobby);
console.log("---------------------------------------------------------------");


// Object Properties Methods

// 1) object.keys()

console.log("Method 1 object.keys");
const keys = Object.keys(userData);
console.log(keys);
console.log("Length of the Object");
console.log(keys.length);



//  2) object.values

const value = Object.values(userData);
console.log(value);

// 3)HasOwnProperty

const hasOwnProperty = userData.hasOwnProperty('hobby');
console.log(hasOwnProperty);


// 4)Object.Assign

const targetOb={name:"Thomas"};
const sourceObj ={age:'21',country:'USA'};
console.log(Object.assign(targetOb,sourceObj));


// 5)Delete

delete userData.hobby;
console.log(userData);



// 6) Object Freeze

Object.freeze(userData);
userData.hobby = 'coding';
console.log(userData);


// Nested Object


const user={
    name:'Santhose',
    age:'21',
    job_role:'Full stack Software Developer',
    address:{
        street:'287, Jawaharlal Nehru Road',
        city:'Sivakasi',
        state:'Tamil Nadu',
        country:{
            name:'India',
            code:'IN'
        }
    }
};

console.log(user);



// Accessing Nested Object Properties

const username = user.name
console.log(username);

const userAddress = user.address.street;
console.log(userAddress);

const userCountry = user['address']['country']['name'];
console.log(userCountry);

















