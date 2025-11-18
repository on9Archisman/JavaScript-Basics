console.log("After a decade");
console.log("Variables & Data Types");

var fullName = "Archisman";
console.log(fullName);

// JS is a dynamic typed language

let age = 33;
console.log(age);

const PI = 3.142
console.log(PI);

x = null;
y = undefined;
let z;

console.log(x);
console.log(y);
console.log(typeof x);
console.log(z);

let isFollow = true;
console.log(!isFollow);

{
    let a = 10;
    a = 98;
    console.log(a);
}

{
    let a = "bla bla";
    console.log(a);
}

let someBigInt = BigInt(123);
console.log(someBigInt); // O/P > 123n

let someSymbol = Symbol("AA");
console.log(someSymbol); // O/P > Symbol(AA)

// var > use for global scope variable || can be re-declared & can be updated
// let > use for block scope variable || can't re-declared & can be updated
// const > use for block scope variable || can't re-declared & can't updated
// type to see the variable type

/// ABOVE ARE PRIMITIVE DATA TYPES
/// BELOW ARE NON PREMITIVE DATA TYPES

// Object is a collection of multiple datatype if required to design like that
// basically same as dictionary in swift
const student = {
    age : 33,
    fullName : "Archisman Banerjee",
    cgpa : 8.16,
    isActive : true
};
console.log(student);
console.log(student["cgpa"]);
console.log(student.cgpa);

student.age = student.age + 1;
console.log(student.age);

student["fullName"] = "A Banerjee";
console.log(student["fullName"]);