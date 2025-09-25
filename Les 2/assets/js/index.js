// // For in ES5 
// // shortcut: select ctrl + / or cmd + /
// // for (var i = 0; i < 10; i++) {
// //     console.log(i);
// // }

// // es6 
// const app_name = "I love collins classes";
// let first_name = "Collin";
// first_name = "test";
// // Want to copy+paste a line? 
// // shortcut:  option + shift + arrow down / alt + shift + arrow down
// console.log(app_name); 
// console.log(first_name); 

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// 2 variables fn ln 
// log fullname
// let fn = "Collin";
// let ln = "Van der Vorst";
// let fullname = `${fn} ${ln}`; // f"" $""
// console.log(fullname);

// ES5
// const square = (number) => {
//     return number * number;
// }
// const square = number => {
//     return number * number;
// }
// const square = number => number * number;

// console.log(square(5));

// let user = {
//   lastname: "Van der Vorst",
//   firstname: "Collin",
//   age: 30
// };

// let {lastname, firstname:fn } = user;
// console.log(lastname);
// console.log(fn);
// console.log(firstname);

let goats = ["T-rex", "Connie", "Clyde"];
// let [goats1, goats2, goats3] = goats;
// console.log(goats1);
// console.log(goats2);
// console.log(goats3);

let sheeps = ["sheep1", "sheep2", "sheep3", "sheep4"];
let animals = [...goats, ...sheeps];

// let smallest = [];
// let largest = [];

// let mixedAnimals = [];

// if (sheeps.length > goats.length) {
//     largest = sheeps;
//     smallest = goats;
// } else {
//     largest = goats;
//     smallest = sheeps;
// }

// for(let i = 0; i < largest.length; i++) {
//     mixedAnimals.push(largest[i]);

//     if (i < smallest.length) {
//         mixedAnimals.push(smallest[i]);
//     }
// }

// console.log(mixedAnimals);
// Mix goats and sheeps in a new array called animals
// .push()
// let animals = [];
// for(let i = 0; i < goats.length;i++) {
//     animals.push(goats[i]);
// }
// sheeps.forEach((sheep) => {
//     animals.push(sheep);
// });

// console.log(animals);

// class Person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }

//     sayYourAge() {
//         console.log(`I am ${this.age} years old`);
//     }
// }

// class Teacher extends Person {
//     constructor(_name, _age, _degree) {
//         super(_name, _age);
//         this.degree = _degree;
//     }
// }

// let person1 = new Person("Collin", 34);
// person1.sayYourAge();

let grades = [6, 3, 10, 14, 20];

let gradesOn100 = grades.map(grade => grade / 20 * 100);

let failedGrades = gradesOn100.filter(grade => grade < 50);
console.log(gradesOn100);
console.log(failedGrades);

let users = [
    {
        fn: "Collin",
        isBlocked: true
    },
    {
        fn: "Lisa",
        isBlocked: true
    },
];
users = users.map((user) => {
    user.isMarried = true;
    return user;
})
let blockedUsers = users.filter(user => user.isBlocked == true);
console.log(blockedUsers);