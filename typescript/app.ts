// function getBill(qty: number){
//     let price = 9;
//     return price+qty;
// }

// console.log(getBill(5));
// datatype
// JS: number, string, boolean, array, object, null, undefined;
// array, la 1 tap hop cac element co cung kieu du lieu
// union,
// void,
// any
// tuple
// never
// unknow
// let price: number | string = 9; // explixitly declaration--> union
// price = '9';
// let price2 = '9'; // inferer type
// price =  8;
// let myprice = 9;
// myprice.trim()
// let myTup = [1,4,'hello', {id: 'gaega'}]-->Tupple

// function getName(): never {
//     // return [1,4,5, 'hello'];
//     console.log('hello');
//     // throw Error('This always throw error')
//     // return 'hgoaiwehgoaw';
//     while(true){
//         console.log('hello');
        
//     }
    
// }

// let xx: unknown = 9;
// xx = 'hi';
// enum;
// enum DATE {
//     MON ='gaega',
//     TUE =0,
//     WED,
//     THU,
//     FRI,
//     SAT ='egaegaeg',
//     SUN ='MOn'
// }

// const myLickynumber = DATE.FRI;

// console.log(myLickynumber);

type myName = {
    name?: string;
    age: number;
    color?: string;
    getName: () => string;
    [key: string]: any
    
}

const ongA: myName = {
    age: 90,
    // color: 'Yello',
    getName(){
        return '9'
    }
}

const member: myName = {
    age: 90,
    // color: 'Yello',
    getName(){
        return '9'
    },
    address: 'Vietname',
    location: 'Hanoi, nam minh'
    // location: 'hanoi'
}