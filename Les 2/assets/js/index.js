// ES 5 way 
// COMMENT OUT -> ctrl+/ of cmd+/
// var firstname = "Collin";

// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// ES6 variable
// let firstname = "Collin";
// const appname = "Tinder";
// var age = 31;

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// let fn = "Collin";
// let ln = "Van der Vorst";
// console.log(`${fn} ${ln}`);

// ES 5 
// const square = (getal) => {
//     return getal * getal;
// }

// console.log(square(5));

// let user = {
//     fn: "Collin",
//     password: "IHateFifa26",
//     isBlocked: true
// };

// let {password: pass, isBlocked} = user;

// console.log(isBlocked);
// console.log(pass);

// let goats = ["T-rex", "Connie", "Clyde"];
// let [goat1, goat2, goat3] = goats;
// console.log(goat1);
// console.log(goat2);
// console.log(goat3);

// let goats = ["T-rex", "Connie", "Clyde"];
// let sheeps = ["sheep1", "sheep2", "sheep3", "sheep4"];


// const mergeArrays = (array1, array2) => {
//     let mergedArrays = [];
//     let smallest = [];
//     let largest = [];
    
//     // Bepalen wat de grootste array is
//     if (array1.length > array2.length) {
//         largest = array1;
//         smallest = array2;
//     } else {
//         largest = array2;
//         smallest = array1;
//     }

//     // Mengen 
//     for (let i = 0; i < largest.length; i++) {
//         mergedArrays.push(largest[i]);

//         if (smallest[i] != null) {
//             mergedArrays.push(smallest[i]);
//         }
//     }

//     return mergedArrays;
// }

// let animals = mergeArrays(sheeps, goats);
// console.log(animals);



// O: "sheep1", "t-rex", "sheep2", "connie", "sheep3", "clyde", "sheep4"

// for (let i = 0; i < goats.length; i++) {
//     animals.push(goats[i]);
// }
// for (let i = 0; i < sheeps.length; i++) {
//     animals.push(sheeps[i]);
// }

// Ik wil een nieuwe array, Animals 
// Alle goats en alle sheeps 
// .push()
// goats.length
// animals = ["t-rex", "Connie", "clyde", "sheep1" ..]

// class Person {
//     constructor (fn, age) {
//         this.fn = fn;
//         this.age = age;
//     }

//     sayAge() {
//         console.log(`I am ${this.fn}, my age is ${this.age}`);
//     }
// }

// class Teacher extends Person {
//     constructor(fn, age, degree) {
//         super(fn, age);
//         this.degree = degree;
//     }

//     teach() {
//         console.log("teachaaah");
//     }
// }

// let collin = new Person("collin", 32);
// collin.sayAge();

// let elke = new Teacher("elke", 0, "master");
// elke.sayAge();
// elke.teach();

let grades = [7, 14, 8, 6, 19]; // PF 
let gradesOn100 = grades.map((grade) => {
    grade = grade / 20 * 100;
    return grade;
});
console.log(gradesOn100);

let users = [
    {
        id: 1,
        name: "Collin",
        isBlocked: false
    },
    {
        id: 2,
        name: "Lisa",
        isBlocked: false
    },
    {
        id: 1,
        name: "John",
        isBlocked: true
    },
];

let blockedUsers = users.filter((user) => user.isBlocked == true);

blockedUsers.forEach((user) => {
    console.log(user.name);
});