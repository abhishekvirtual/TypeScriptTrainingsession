/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./TypeScriptNotes/app/enums.ts":
/*!**************************************!*\
  !*** ./TypeScriptNotes/app/enums.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
    Category[Category["Software"] = 5] = "Software";
})(Category || (Category = {}));
exports.Category = Category;


/***/ }),

/***/ "./TypeScriptNotes/app/index.ts":
/*!**************************************!*\
  !*** ./TypeScriptNotes/app/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./enums */ "./TypeScriptNotes/app/enums.ts");
var shelf_1 = __importDefault(__webpack_require__(/*! ./shelf */ "./TypeScriptNotes/app/shelf.ts"));
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//*********************************************
var inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: enums_1.Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: enums_1.Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: enums_1.Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: enums_1.Category.Software }
];
// let purgedBooks: Array<Book> = Purge(inventory);
// purgedBooks.forEach(book => console.log(book.title));
// let purgedNums: Array<number> = Purge<number>([1, 2, 3, 4]);
// console.log(purgedNums);
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
var magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
var magazineShelf = new shelf_1.default();
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
// let numberShelf: Shelf<number> = new Shelf<number>();
// [5, 10, 15].forEach(num => numberShelf.add(num));
magazineShelf.printTitles();
var softwareBook = bookShelf.find('Code Complete');
console.log(softwareBook.title + " (" + softwareBook.author + ")");


/***/ }),

/***/ "./TypeScriptNotes/app/shelf.ts":
/*!**************************************!*\
  !*** ./TypeScriptNotes/app/shelf.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shelf = /** @class */ (function () {
    function Shelf() {
        this._items = new Array();
    }
    Shelf.prototype.add = function (item) {
        this._items.push(item);
    };
    Shelf.prototype.getFirst = function () {
        return this._items[0];
    };
    Shelf.prototype.find = function (title) {
        return this._items.filter(function (item) { return item.title === title; })[0];
    };
    Shelf.prototype.printTitles = function () {
        this._items.forEach(function (item) { return console.log(item.title); });
    };
    return Shelf;
}());
exports.default = Shelf;


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./TypeScriptNotes/app/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\vscodeWorkSpace\TypeScriptTrainingsession\TypeScriptNotes\app\index.ts */"./TypeScriptNotes/app/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdE5vdGVzL2FwcC9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0Tm90ZXMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHROb3Rlcy9hcHAvc2hlbGYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3Qjs7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsK0NBQVM7QUFDL0IsOEJBQThCLG1CQUFPLENBQUMsK0NBQVM7QUFDL0M7QUFDQTtBQUNBLFNBQVMsc0dBQXNHO0FBQy9HLFNBQVMsdUhBQXVIO0FBQ2hJLFNBQVMsOEhBQThIO0FBQ3ZJLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMkNBQTJDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx3QkFBd0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHVCQUF1QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHdCQUF3QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHdCQUF3QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsscUhBQXFIO0FBQzFILEtBQUssa0hBQWtIO0FBQ3ZILEtBQUssb0hBQW9IO0FBQ3pILEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNEJBQTRCLEVBQUU7QUFDakU7QUFDQTtBQUNBLEtBQUssZ0VBQWdFO0FBQ3JFLEtBQUssa0VBQWtFO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0NBQWtDLCtCQUErQixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JJYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsNkJBQTZCLEVBQUU7QUFDbEY7QUFDQTtBQUNBLDZDQUE2QyxnQ0FBZ0MsRUFBRTtBQUMvRTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYXRlZ29yeTtcclxuKGZ1bmN0aW9uIChDYXRlZ29yeSkge1xyXG4gICAgQ2F0ZWdvcnlbQ2F0ZWdvcnlbXCJCaW9ncmFwaHlcIl0gPSAwXSA9IFwiQmlvZ3JhcGh5XCI7XHJcbiAgICBDYXRlZ29yeVtDYXRlZ29yeVtcIlBvZXRyeVwiXSA9IDFdID0gXCJQb2V0cnlcIjtcclxuICAgIENhdGVnb3J5W0NhdGVnb3J5W1wiRmljdGlvblwiXSA9IDJdID0gXCJGaWN0aW9uXCI7XHJcbiAgICBDYXRlZ29yeVtDYXRlZ29yeVtcIkhpc3RvcnlcIl0gPSAzXSA9IFwiSGlzdG9yeVwiO1xyXG4gICAgQ2F0ZWdvcnlbQ2F0ZWdvcnlbXCJDaGlsZHJlblwiXSA9IDRdID0gXCJDaGlsZHJlblwiO1xyXG4gICAgQ2F0ZWdvcnlbQ2F0ZWdvcnlbXCJTb2Z0d2FyZVwiXSA9IDVdID0gXCJTb2Z0d2FyZVwiO1xyXG59KShDYXRlZ29yeSB8fCAoQ2F0ZWdvcnkgPSB7fSkpO1xyXG5leHBvcnRzLkNhdGVnb3J5ID0gQ2F0ZWdvcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbnVtc18xID0gcmVxdWlyZShcIi4vZW51bXNcIik7XHJcbnZhciBzaGVsZl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoZWxmXCIpKTtcclxuZnVuY3Rpb24gR2V0QWxsQm9va3MoKSB7XHJcbiAgICB2YXIgYm9va3MgPSBbXHJcbiAgICAgICAgeyBpZDogMSwgdGl0bGU6ICdVbHlzc2VzJywgYXV0aG9yOiAnSmFtZXMgSm95Y2UnLCBhdmFpbGFibGU6IHRydWUsIGNhdGVnb3J5OiBlbnVtc18xLkNhdGVnb3J5LkZpY3Rpb24gfSxcclxuICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ0EgRmFyZXdlbGwgdG8gQXJtcycsIGF1dGhvcjogJ0VybmVzdCBIZW1pbmd3YXknLCBhdmFpbGFibGU6IGZhbHNlLCBjYXRlZ29yeTogZW51bXNfMS5DYXRlZ29yeS5GaWN0aW9uIH0sXHJcbiAgICAgICAgeyBpZDogMywgdGl0bGU6ICdJIEtub3cgV2h5IHRoZSBDYWdlZCBCaXJkIFNpbmdzJywgYXV0aG9yOiAnTWF5YSBBbmdlbG91JywgYXZhaWxhYmxlOiB0cnVlLCBjYXRlZ29yeTogZW51bXNfMS5DYXRlZ29yeS5Qb2V0cnkgfSxcclxuICAgICAgICB7IGlkOiA0LCB0aXRsZTogJ01vYnkgRGljaycsIGF1dGhvcjogJ0hlcm1hbiBNZWx2aWxsZScsIGF2YWlsYWJsZTogdHJ1ZSwgY2F0ZWdvcnk6IGVudW1zXzEuQ2F0ZWdvcnkuRmljdGlvbiB9XHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGJvb2tzO1xyXG59XHJcbmZ1bmN0aW9uIExvZ0ZpcnN0QXZhaWxhYmxlKGJvb2tzKSB7XHJcbiAgICBpZiAoYm9va3MgPT09IHZvaWQgMCkgeyBib29rcyA9IEdldEFsbEJvb2tzKCk7IH1cclxuICAgIHZhciBudW1iZXJPZkJvb2tzID0gYm9va3MubGVuZ3RoO1xyXG4gICAgdmFyIGZpcnN0QXZhaWxhYmxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGJvb2tzXzEgPSBib29rczsgX2kgPCBib29rc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBjdXJyZW50Qm9vayA9IGJvb2tzXzFbX2ldO1xyXG4gICAgICAgIGlmIChjdXJyZW50Qm9vay5hdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgZmlyc3RBdmFpbGFibGUgPSBjdXJyZW50Qm9vay50aXRsZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ1RvdGFsIEJvb2tzOiAnICsgbnVtYmVyT2ZCb29rcyk7XHJcbiAgICBjb25zb2xlLmxvZygnRmlyc3QgQXZhaWxhYmxlOiAnICsgZmlyc3RBdmFpbGFibGUpO1xyXG59XHJcbmZ1bmN0aW9uIEdldEJvb2tUaXRsZXNCeUNhdGVnb3J5KGNhdGVnb3J5RmlsdGVyKSB7XHJcbiAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIgPT09IHZvaWQgMCkgeyBjYXRlZ29yeUZpbHRlciA9IGVudW1zXzEuQ2F0ZWdvcnkuRmljdGlvbjsgfVxyXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgYm9va3MgaW4gY2F0ZWdvcnk6ICcgKyBlbnVtc18xLkNhdGVnb3J5W2NhdGVnb3J5RmlsdGVyXSk7XHJcbiAgICB2YXIgYWxsQm9va3MgPSBHZXRBbGxCb29rcygpO1xyXG4gICAgdmFyIGZpbHRlcmVkVGl0bGVzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJvb2tzXzEgPSBhbGxCb29rczsgX2kgPCBhbGxCb29rc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBjdXJyZW50Qm9vayA9IGFsbEJvb2tzXzFbX2ldO1xyXG4gICAgICAgIGlmIChjdXJyZW50Qm9vay5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlGaWx0ZXIpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRUaXRsZXMucHVzaChjdXJyZW50Qm9vay50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbHRlcmVkVGl0bGVzO1xyXG59XHJcbmZ1bmN0aW9uIExvZ0Jvb2tUaXRsZXModGl0bGVzKSB7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHRpdGxlc18xID0gdGl0bGVzOyBfaSA8IHRpdGxlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciB0aXRsZSA9IHRpdGxlc18xW19pXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gR2V0Qm9va0J5SUQoaWQpIHtcclxuICAgIHZhciBhbGxCb29rcyA9IEdldEFsbEJvb2tzKCk7XHJcbiAgICByZXR1cm4gYWxsQm9va3MuZmlsdGVyKGZ1bmN0aW9uIChib29rKSB7IHJldHVybiBib29rLmlkID09PSBpZDsgfSlbMF07XHJcbn1cclxuZnVuY3Rpb24gQ3JlYXRlQ3VzdG9tZXJJRChuYW1lLCBpZCkge1xyXG4gICAgcmV0dXJuIG5hbWUgKyBpZDtcclxufVxyXG5mdW5jdGlvbiBDcmVhdGVDdXN0b21lcihuYW1lLCBhZ2UsIGNpdHkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBjdXN0b21lciAnICsgbmFtZSk7XHJcbiAgICBpZiAoYWdlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FnZTogJyArIGFnZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2l0eSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaXR5OiAnICsgY2l0eSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gQ2hlY2tvdXRCb29rcyhjdXN0b21lcikge1xyXG4gICAgdmFyIGJvb2tJRHMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYm9va0lEc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdDaGVja2luZyBvdXQgYm9va3MgZm9yICcgKyBjdXN0b21lcik7XHJcbiAgICB2YXIgYm9va3NDaGVja2VkT3V0ID0gW107XHJcbiAgICBmb3IgKHZhciBfYSA9IDAsIGJvb2tJRHNfMSA9IGJvb2tJRHM7IF9hIDwgYm9va0lEc18xLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgIHZhciBpZCA9IGJvb2tJRHNfMVtfYV07XHJcbiAgICAgICAgdmFyIGJvb2sgPSBHZXRCb29rQnlJRChpZCk7XHJcbiAgICAgICAgaWYgKGJvb2suYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgIGJvb2tzQ2hlY2tlZE91dC5wdXNoKGJvb2sudGl0bGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBib29rc0NoZWNrZWRPdXQ7XHJcbn1cclxuZnVuY3Rpb24gR2V0VGl0bGVzKGJvb2tQcm9wZXJ0eSkge1xyXG4gICAgdmFyIGFsbEJvb2tzID0gR2V0QWxsQm9va3MoKTtcclxuICAgIHZhciBmb3VuZFRpdGxlcyA9IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBib29rUHJvcGVydHkgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBnZXQgYWxsIGJvb2tzIGJ5IGEgcGFydGljdWxhciBhdXRob3JcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFsbEJvb2tzXzIgPSBhbGxCb29rczsgX2kgPCBhbGxCb29rc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgYm9vayA9IGFsbEJvb2tzXzJbX2ldO1xyXG4gICAgICAgICAgICBpZiAoYm9vay5hdXRob3IgPT09IGJvb2tQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRUaXRsZXMucHVzaChib29rLnRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBib29rUHJvcGVydHkgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgLy8gZ2V0IGFsbCBib29rcyBiYXNlZCBvbiBzcGVjaWZpZWQgYXZhaWxhYmlsaXR5XHJcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBhbGxCb29rc18zID0gYWxsQm9va3M7IF9hIDwgYWxsQm9va3NfMy5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIGJvb2sgPSBhbGxCb29rc18zW19hXTtcclxuICAgICAgICAgICAgaWYgKGJvb2suYXZhaWxhYmxlID09PSBib29rUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kVGl0bGVzLnB1c2goYm9vay50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm91bmRUaXRsZXM7XHJcbn1cclxuZnVuY3Rpb24gUHJpbnRCb29rKGJvb2spIHtcclxuICAgIGNvbnNvbGUubG9nKGJvb2sudGl0bGUgKyAnIGJ5ICcgKyBib29rLmF1dGhvcik7XHJcbn1cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxudmFyIGludmVudG9yeSA9IFtcclxuICAgIHsgaWQ6IDEwLCB0aXRsZTogJ1RoZSBDIFByb2dyYW1taW5nIExhbmd1YWdlJywgYXV0aG9yOiAnSyAmIFInLCBhdmFpbGFibGU6IHRydWUsIGNhdGVnb3J5OiBlbnVtc18xLkNhdGVnb3J5LlNvZnR3YXJlIH0sXHJcbiAgICB7IGlkOiAxMSwgdGl0bGU6ICdDb2RlIENvbXBsZXRlJywgYXV0aG9yOiAnU3RldmUgTWNDb25uZWxsJywgYXZhaWxhYmxlOiB0cnVlLCBjYXRlZ29yeTogZW51bXNfMS5DYXRlZ29yeS5Tb2Z0d2FyZSB9LFxyXG4gICAgeyBpZDogMTIsIHRpdGxlOiAnOC1CaXQgR3JhcGhpY3Mgd2l0aCBDb2JvbCcsIGF1dGhvcjogJ0EuIEIuJywgYXZhaWxhYmxlOiB0cnVlLCBjYXRlZ29yeTogZW51bXNfMS5DYXRlZ29yeS5Tb2Z0d2FyZSB9LFxyXG4gICAgeyBpZDogMTMsIHRpdGxlOiAnQ29vbCBhdXRvZXhlYy5iYXQgU2NyaXB0cyEnLCBhdXRob3I6ICdDLiBELicsIGF2YWlsYWJsZTogdHJ1ZSwgY2F0ZWdvcnk6IGVudW1zXzEuQ2F0ZWdvcnkuU29mdHdhcmUgfVxyXG5dO1xyXG4vLyBsZXQgcHVyZ2VkQm9va3M6IEFycmF5PEJvb2s+ID0gUHVyZ2UoaW52ZW50b3J5KTtcclxuLy8gcHVyZ2VkQm9va3MuZm9yRWFjaChib29rID0+IGNvbnNvbGUubG9nKGJvb2sudGl0bGUpKTtcclxuLy8gbGV0IHB1cmdlZE51bXM6IEFycmF5PG51bWJlcj4gPSBQdXJnZTxudW1iZXI+KFsxLCAyLCAzLCA0XSk7XHJcbi8vIGNvbnNvbGUubG9nKHB1cmdlZE51bXMpO1xyXG52YXIgYm9va1NoZWxmID0gbmV3IHNoZWxmXzEuZGVmYXVsdCgpO1xyXG5pbnZlbnRvcnkuZm9yRWFjaChmdW5jdGlvbiAoYm9vaykgeyByZXR1cm4gYm9va1NoZWxmLmFkZChib29rKTsgfSk7XHJcbnZhciBmaXJzdEJvb2sgPSBib29rU2hlbGYuZ2V0Rmlyc3QoKTtcclxudmFyIG1hZ2F6aW5lcyA9IFtcclxuICAgIHsgdGl0bGU6ICdQcm9ncmFtbWluZyBMYW5ndWFnZSBNb250aGx5JywgcHVibGlzaGVyOiAnQ29kZSBNYWdzJyB9LFxyXG4gICAgeyB0aXRsZTogJ0xpdGVyYXJ5IEZpY3Rpb24gUXVhcnRlcmx5JywgcHVibGlzaGVyOiAnQ29sbGVnZSBQcmVzcycgfSxcclxuICAgIHsgdGl0bGU6ICdGaXZlIFBvaW50cycsIHB1Ymxpc2hlcjogJ0dTVScgfVxyXG5dO1xyXG52YXIgbWFnYXppbmVTaGVsZiA9IG5ldyBzaGVsZl8xLmRlZmF1bHQoKTtcclxubWFnYXppbmVzLmZvckVhY2goZnVuY3Rpb24gKG1hZykgeyByZXR1cm4gbWFnYXppbmVTaGVsZi5hZGQobWFnKTsgfSk7XHJcbnZhciBmaXJzdE1hZ2F6aW5lID0gbWFnYXppbmVTaGVsZi5nZXRGaXJzdCgpO1xyXG4vLyBsZXQgbnVtYmVyU2hlbGY6IFNoZWxmPG51bWJlcj4gPSBuZXcgU2hlbGY8bnVtYmVyPigpO1xyXG4vLyBbNSwgMTAsIDE1XS5mb3JFYWNoKG51bSA9PiBudW1iZXJTaGVsZi5hZGQobnVtKSk7XHJcbm1hZ2F6aW5lU2hlbGYucHJpbnRUaXRsZXMoKTtcclxudmFyIHNvZnR3YXJlQm9vayA9IGJvb2tTaGVsZi5maW5kKCdDb2RlIENvbXBsZXRlJyk7XHJcbmNvbnNvbGUubG9nKHNvZnR3YXJlQm9vay50aXRsZSArIFwiIChcIiArIHNvZnR3YXJlQm9vay5hdXRob3IgKyBcIilcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTaGVsZiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNoZWxmKCkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBTaGVsZi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfTtcclxuICAgIFNoZWxmLnByb3RvdHlwZS5nZXRGaXJzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNbMF07XHJcbiAgICB9O1xyXG4gICAgU2hlbGYucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAodGl0bGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLnRpdGxlID09PSB0aXRsZTsgfSlbMF07XHJcbiAgICB9O1xyXG4gICAgU2hlbGYucHJvdG90eXBlLnByaW50VGl0bGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGNvbnNvbGUubG9nKGl0ZW0udGl0bGUpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2hlbGY7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNoZWxmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9