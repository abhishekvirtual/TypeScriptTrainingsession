console.log('hello world');

enum cataegory{"abhi"=1,"mark","bill"};
enum cataegory{"steve"=3,"vijay","ajay"};
enum cataegory{"lete"=5,"varp","ld"};

let cataegorys:cataegory = cataegory.abhi;


let cataegoryString = cataegory[cataegorys];


//console.log(cataegoryString);

//----------------Tuples-----------------

let myTuple: [string,number] = ['abhi',25];

// console.log(myTuple[0]);
// console.log(myTuple[1]);

let a = myTuple[0];
let b = myTuple[1];

//-----------------arrow function--------------

let allbooks = [{name:"abc",price:123},{name:"xyz",price:222},{name:"pqr",price:333}]  

let arr = allbooks.filter(book=>book.name==="abc");

console.log(arr);