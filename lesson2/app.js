

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

// let product = {
//     name: 'iphone',
//     price: 900,
//     supplier: 'Apple'
// }

// function getProduct(product){
//     // product.name = 'Samsung galaxy';
//     // product.price = 800;
//     // product.supplier = 'Samsung'
//     // return product;
//     return {
//         ...product, // toan tu clone
//         name: 'Samsung Galaxy',
//         price: 800,
//         supplier: 'Samsung'
//     }
// }

// let myProduct = getProduct(product);


// console.log('product 1', myProduct); // giong hay khac
// console.log('product 2', product);

// // spread operator

// let myPer = {
//     name: 'toan'
// }

// let myPer2 = {
//     address: 'Hanoi'
// }



// let yourPer = {...myPer, age: 100, ...myPer2}

// // console.log(yourPer);
// let arr = [1,2,3]
// let arr3 = [4,5,6]

// let arr2 = [...arr, ...arr3];
// let arr2 = arr.concat(arr3, arr3); spread operator

// console.log('push', arr2);
// console.log(`gaeihgaoi eghawe oighawe oig`); ' ', ``, "", [], {}, ();

// let obj ={
//     id: 1,
//     name: 'halong-bay'
// }

// function getAddress(obj){
//     // fetch('http://google.com/api/address/'+ obj.id+'/name/'+obj.name)
//     fetch(`http://google.com/api/address/${obj.id}/name/${obj.name}`)
// }
// rest operator

// declare
// function getVal(a, ...params){
//     console.log(params, a);
//     // return a;
// }
// // call, usage
// getVal(5, 6, 9,7,4,6);
// map, filter, reduce, forEach, find, findIndex, sort

// Higher Order Function
// let arr = [1,2,3,4,5,6,7,8,9];

// arr = arr.filter(e => e % 2 ==0);

// console.log(arr);
// arr = arr.map((e) => e+3);
// let total = arr.reduce((curr, acc) => {
//     return curr + acc;
// }, 2)
// console.log(total);

// let arrNums = [7,5,34,9,42];

// arrNums.sort((a, b) => a-b);

// console.log(arrNums);

// let person = {
//     name: 'Linh',
//     members: ['you',  'me'],
//     getName: function(){
//         return this.name;
//     },
//     isMerried: true
// }


// factory function
// function getPerson(){
//     return {
//             name: 'Linh',
//             members: ['you',  'me'],
//             getName: function(){
//                 return this.name;
//             },
//             isMerried: true
//         }
// }

// let myPerson = getPerson();
// console.log(myPerson);

// constructor function
// Pascal Case
// function Person(name, age, address){
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.getName = function(){
//         return 8989
//     }
// }

// let linh = new Person('Linh', 20, 'HCM');
// let linh1 = new Person('Linh 1', 30, 'HCM');
// console.log(linh);

// asynchronus, non-block

//
// function getNaem(){
//     setTimeout(()=> {
//         console.log('gaegag');
//     }, 30000)
// }
// let x = 66
// console.log(x);
// callBack
// Promise
// async/await
// generator
// observable



// function getVal2(){
//     setTimeout(() => {

//         console.log('Value 2');
//     }, 0)
// }

// function getVal3(){
//     setTimeout(() => {
//         console.log('Value 3');
//     })
// }

// function getVal1(){
//     console.log('Value 1');
// }


// function getVal4(){
//     setTimeout(() => {

//         console.log('Value 4');
//     }, 1000)
// }

// // 1, 3,2,4
// getVal1();
// getVal2();
// getVal3();
// getVal4();

let products = [
    {id: 1, name: 'Iphone 5s', price: 1200},
    {id: 2, name: 'Iphone 12s', price: 2200},
];


function getProducts(products){
    let output = "";
    products.forEach(product => {
        output += `<li>name: ${product.name}, price: ${product.price}</li>`;
    });
    document.getElementById('root').innerHTML = output;
}

// function createProduct(product, callback){
//     setTimeout(() => {
//         products.push(product);
//         callback(products);
//     }, 2000)
// }

// createProduct({id: 3, name: 'Samsung lalaxy', price: 1500}, getProducts);

// getProducts(products); // callback hell
// function createProduct(product){
//     return new 
// }

// function getNames(){
//     let error = true;
//     if(!error){
//         return Promise.resolve(5);

//     }
//     return Promise.reject('Something went wrong');
// }


// getNames().then(res => {
//     console.log(res + 9);
// }).catch(err => console.log(err))


// let total = 4 + num1();
// console.log(total);


// function createProduct(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             products.push({id: 4, name: 'Vio', price: 3000});
//             resolve(products);
//         }, 2000);

//     })
// }

// createProduct().then((res)=> {
//     getProducts(res);
// }).catch((err) => console.log(err))

// function getMe(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6);
//         }, 2000);
//     })
    
// }

// async function getValue(){
//     let xx = await getMe();
//     let yy = xx + 99;
//     return yy;
// }


// // ham async return promise, not value
// let num = getValue();

// num.then(res => {
//     console.log(res);
// })

// generator;

// function* getName(){
//     yield 5;
//     console.log('My Name is Toan');
//     yield 10;
//     console.log('My Name is Toan');
// }

// // getName();
// let x = getName();
// x.next();
// x.next();
// console.log(x.value);
// console.log(x.value);
// console.log(x.value);
// console.log(x);
