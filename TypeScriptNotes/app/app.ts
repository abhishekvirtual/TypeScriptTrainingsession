import {Category} from './enums';
import {Book,Author,Logger,Librarian,Magazine} from './interfaces';
import {UniversityLibrarian, ReferenceItem,Employee,Researcher} from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo(item:Book):void{
    console.log(`${item.title} was authored by ${item.author}`);
}
let [book1,book2,...restbooks] = util.GetAllBooks(); 

// function logFavoritBooks([book1,book2,...restbooks]:Book[]){
//     console.log(book1);
//     console.log(book2);
//     console.log(restbooks);
// }

// logFavoritBooks(util.GetAllBooks());

// let {title,author} = book1;

// console.log(title);
// console.log(author);

//============================== Mixing examples in details ======================================

function applyMixins(derivedCtor:any,baseCtors:any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=>{
           derivedCtor.prototype[name] = baseCtor.prototype[name];
        }) 
    });
}

applyMixins(UniversityLibrarian,[Employee,Researcher]); 
let newLibrarian = new UniversityLibrarian();

//newLibrarian.doResearch('zology');
