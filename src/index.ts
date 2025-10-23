// let names = <string>"katari";
// let names: string | number;
// names = "233";

// console.log(names);

// const fun = (a: number, b: number):number=>{
//     console.log(a + b);
//     return a + b
// }
// fun(2, 3);

type username = (n: number, m: number) => number;
const func: username = (a, b) => {
    console.log(a + b);
    return a + b;
};

//==========================Array==================//

const arr:number[] = [1, 2, 3, 4, 5]

// arr.forEach(element => {
//    element. 
// });

const arr1:string[] = ["katari", "233", "hello"] //or
const arr2:Array<string> = ["katari", "233", "hello"] //important
// arr2.forEach(element => {
//     console.log(element);
// });

//==========================Tuple==================//

let tup:[string, number, boolean] = ["katari", 233, true];


//==========================Object==================//

type Obj = {
    name: string,
    age: number,
    isAdmin?: boolean //optional
}

const obj:Obj ={
    name: "katari",
    age: 233,
    isAdmin: true
}

const obj1:Obj ={
    name: "katari",
    age: 233,
}
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


//==========================Function with object==================//

interface Product {
    name: string, 
    price: number, 
    photo?: string,
    readonly id: number | string
}

type GetDataType = (product: Product)=> void;

const getData:GetDataType = (product)=>{
    // product.id = 456; //readonly property can't be changed
    console.log(product);
}

const prod1:Product = {
    name: "katari",
    price: 233,
    photo: "photo.jpg",
    id: 123
}

getData(prod1);

//==========================Union Type==================//

type themeMdoe = "dark" | "light" | "system";
const mode:themeMdoe = "dark"; //or "light" or "system"

//==========================Classes==================//

class Player{
    height;
    weight;
    
    constructor(height: number, weight: number){
        this.height = height;
        this.weight = weight;
    }
}

const player1 = new Player(180, 75);
