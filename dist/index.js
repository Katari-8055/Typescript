"use strict";
// let names = <string>"katari";
// let names: string | number;
// names = "233";
const func = (a, b) => {
    console.log(a + b);
    return a + b;
};
//==========================Array==================//
const arr = [1, 2, 3, 4, 5];
// arr.forEach(element => {
//    element. 
// });
const arr1 = ["katari", "233", "hello"]; //or
const arr2 = ["katari", "233", "hello"]; //important
// arr2.forEach(element => {
//     console.log(element);
// });
//==========================Tuple==================//
let tup = ["katari", 233, true];
const obj = {
    name: "katari",
    age: 233,
    isAdmin: true
};
const obj1 = {
    name: "katari",
    age: 233,
};
console.log(obj);
//==========================function==================//
// type funcType = (a: number, b: number, c?: number) => number; //c is optional
// const functi: funcType = (a, b, c) => {
//     if (typeof c === 'undefined') return a + b;
//     return a + b + c;
// }
// functi(2, 3);
//-------Rest Oprater-------//
// type funcType = (...m: number[]) => number[]; //c is optional
// const functi: funcType = (...m) => {
//     m.filter((value) => value > 2);
//     return m;
// }
// functi(2, 3,23,45,77,5,1,9);
