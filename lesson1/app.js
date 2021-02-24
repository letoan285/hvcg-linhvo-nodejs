

// console.log('Hello World');

// git remote / tren web/(server)
// git local (our machine)
// Data type
// 1. boolean,
// 2. number,
// 3. string  
// var x = 'hello';
// // 4. 
// var y = null;
// // 5. undefince
// var z = undefined;
// // 
// var xx
// object,
// array
// symbol
//

// let val = 1; // primitive type

// var obj = {num: 1}; // reference type

// heap,--> reference type

// stack--> primitive type, no co limit

// let x = 'my name ';
// let x = new String('My name is ling');

// let myVar = val;

// myVar = 9;

// console.log(val);

// let val2 = {
//     name: 'Linh',
//     age: 20
// }

// let me = val2;

// me.age = 99;
// me.name = 'Toan';

// console.log(val2);

// array, object, function.

// 2. hoisting


// console.log(xx);

// let xx = 99;

// console.log(xx);

// var xx;
// xx = 99
// let x = 1;
// let i = 0;
// for(i = 0; i < 5; i++){
//     console.log('I--'+ i);
//     x = 99;
// }

// console.log('X--'+x);
//

//3. arrow function; anonymous function

// console.log(getVal1());

// function getVal1(){
//     return 8
// }


// let getVal2 = x => 9*x // single line function

// console.log(getVal2(5));

// destructuring; object destructuring, array destructuring
//
// let obj = {
//     name: 'Toan',
//     age: 30,
//     address: 'Hanoi'
// }

// let address = 'my adress is Vietname'; // lin viet

// let name = obj.name;
// let age = obj.age;
// let address = obj.address;

// DRY--> dont repeat yourself

// let {name, age, address: myAddress} = obj; // toan viet


// console.log(name, age, address, myAddress);


// let myname = 'toan'
// let myname = 'linh';

// let youraddress = address;

// let person = {
//     country: {
//         name: 'VIetnam',
//         population: 9900000
//     }
// }

// let {country: {population}} = person;

// let xxxxx = person.country;
// let population = xxxxx.population;

// console.log(population);

// function getName(isMerried){
//     return isMerried ? 'Toan' : 'Linh';
// }
// console.log(getName(true));

// array destructuring

// let names = ['Toan', 'Linh', 'Tinh', 'nhang', 'nhit'];

// let myName = names[0];
// let yourName = names[1];
// let yourName1 = names[2];

// let [myName, yourName, _, __, herName] = names;

// let ourName = names[5];

// console.log(herName);

// const y = undefined;

// let x;
// x = 3;

// const val = 3;
// val = 7;

// const people = {
//     name: 'Ling',
//     age: 20
// }

// people.name = 'Hung';
// people = {
//     name: 'Toan',
//     age: 40
// }

// console.log(people);

// add: 'xx013x' = , 9
// 'xx014x' = 9
// 'xx014x' = 7

let product = {
    name: 'iphone',
    price: 900,
    supplier: 'Apple'
}

function getProduct(product){
    // product.name = 'Samsung galaxy';
    // product.price = 800;
    // product.supplier = 'Samsung'
    // return product;
    return {
        ...product, // toan tu clone
        name: 'Samsung Galaxy',
        price: 800,
        supplier: 'Samsung'
    }
}

let myProduct = getProduct(product);


console.log('product 1', myProduct); // giong hay khac
console.log('product 2', product);

// spread operator

let myPer = {
    name: 'toan'
}

let myPer2 = {
    address: 'Hanoi'
}



let yourPer = {...myPer, age: 100, ...myPer2}

// console.log(yourPer);
let arr = [1,2,3]
let arr3 = [4,5,6]

// let arr2 = [...arr, ...arr3];
// let arr2 = arr.concat(arr3, arr3);

// console.log('push', arr2);