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
const getData = (product) => {
    // product.id = 456; //readonly property can't be changed
    console.log(product);
};
const prod1 = {
    name: "katari",
    price: 233,
    photo: "photo.jpg",
    id: 123
};
getData(prod1);
const mode = "dark"; //or "light" or "system"
//==========================Classes==================//
class Player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
const player1 = new Player(180, 75);
