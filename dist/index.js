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

/***/ "./TypeScriptNotes/app/app.ts":
/*!************************************!*\
  !*** ./TypeScriptNotes/app/app.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = __webpack_require__(/*! ./classes */ "./TypeScriptNotes/app/classes.ts");
var util = __importStar(__webpack_require__(/*! ./lib/utilityFunctions */ "./TypeScriptNotes/app/lib/utilityFunctions.ts"));
function PrintBookInfo(item) {
    console.log(item.title + " was authored by " + item.author);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1], restbooks = _a.slice(2);
// function logFavoritBooks([book1,book2,...restbooks]:Book[]){
//     console.log(book1);
//     console.log(book2);
//     console.log(restbooks);
// }
// logFavoritBooks(util.GetAllBooks());
// let {title,author} = book1;
// console.log(title);
// console.log(author);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
var newLibrarian = new classes_1.UniversityLibrarian();
newLibrarian.doResearch('zology');


/***/ }),

/***/ "./TypeScriptNotes/app/classes.ts":
/*!****************************************!*\
  !*** ./TypeScriptNotes/app/classes.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addToSchedule = function () {
        console.log('Employee added to schedule.');
    };
    Employee.prototype.logTitle = function () {
        ;
        console.log("Employee has the title " + this.title + ".");
    };
    return Employee;
}());
exports.Employee = Employee;
var Researcher = /** @class */ (function () {
    function Researcher() {
    }
    Researcher.prototype.doResearch = function (topic) {
        console.log("Doing research on " + topic + ".");
    };
    return Researcher;
}());
exports.Researcher = Researcher;
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
        console.log("Department: " + ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;


/***/ }),

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

/***/ "./TypeScriptNotes/app/lib/utilityFunctions.ts":
/*!*****************************************************!*\
  !*** ./TypeScriptNotes/app/lib/utilityFunctions.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ../enums */ "./TypeScriptNotes/app/enums.ts");
function CalculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log('This is private...');
}
function Purge(inventory) {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
exports.GetAllBooks = GetAllBooks;
function GetAllMagazines() {
    var magazines = [
        { title: 'Python Programmer Review', publisher: 'Smarty Publishing' },
        { title: 'Five Points', publisher: 'Georgia State University' },
        { title: 'Poetry Quarterly', publisher: 'Literary Press' },
        { title: 'Baseball News', publisher: 'Sports Press' }
    ];
    return magazines;
}
exports.GetAllMagazines = GetAllMagazines;
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
exports.LogFirstAvailable = LogFirstAvailable;
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
exports.GetBookTitlesByCategory = GetBookTitlesByCategory;
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
exports.LogBookTitles = LogBookTitles;
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
exports.GetBookByID = GetBookByID;
function CreateCustomerID(name, id) {
    return name + id;
}
exports.CreateCustomerID = CreateCustomerID;
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
exports.CreateCustomer = CreateCustomer;
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
exports.CheckoutBooks = CheckoutBooks;
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
exports.GetTitles = GetTitles;
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
exports.PrintBook = PrintBook;


/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./TypeScriptNotes/app/app.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\vscodeWorkSpace\TypeScriptTrainingsession\TypeScriptNotes\app\app.ts */"./TypeScriptNotes/app/app.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdE5vdGVzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdE5vdGVzL2FwcC9jbGFzc2VzLnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHROb3Rlcy9hcHAvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdE5vdGVzL2FwcC9saWIvdXRpbGl0eUZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtREFBVztBQUNuQyx3QkFBd0IsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGFBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4RGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxnREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzR0FBc0c7QUFDL0csU0FBUyx1SEFBdUg7QUFDaEksU0FBUyw4SEFBOEg7QUFDdkksU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0VBQW9FO0FBQzdFLFNBQVMsOERBQThEO0FBQ3ZFLFNBQVMseURBQXlEO0FBQ2xFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDJDQUEyQztBQUMvRTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsdUJBQXVCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2xhc3Nlc18xID0gcmVxdWlyZShcIi4vY2xhc3Nlc1wiKTtcclxudmFyIHV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbGliL3V0aWxpdHlGdW5jdGlvbnNcIikpO1xyXG5mdW5jdGlvbiBQcmludEJvb2tJbmZvKGl0ZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW0udGl0bGUgKyBcIiB3YXMgYXV0aG9yZWQgYnkgXCIgKyBpdGVtLmF1dGhvcik7XHJcbn1cclxudmFyIF9hID0gdXRpbC5HZXRBbGxCb29rcygpLCBib29rMSA9IF9hWzBdLCBib29rMiA9IF9hWzFdLCByZXN0Ym9va3MgPSBfYS5zbGljZSgyKTtcclxuLy8gZnVuY3Rpb24gbG9nRmF2b3JpdEJvb2tzKFtib29rMSxib29rMiwuLi5yZXN0Ym9va3NdOkJvb2tbXSl7XHJcbi8vICAgICBjb25zb2xlLmxvZyhib29rMSk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhib29rMik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXN0Ym9va3MpO1xyXG4vLyB9XHJcbi8vIGxvZ0Zhdm9yaXRCb29rcyh1dGlsLkdldEFsbEJvb2tzKCkpO1xyXG4vLyBsZXQge3RpdGxlLGF1dGhvcn0gPSBib29rMTtcclxuLy8gY29uc29sZS5sb2codGl0bGUpO1xyXG4vLyBjb25zb2xlLmxvZyhhdXRob3IpO1xyXG5mdW5jdGlvbiBhcHBseU1peGlucyhkZXJpdmVkQ3RvciwgYmFzZUN0b3JzKSB7XHJcbiAgICBiYXNlQ3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoYmFzZUN0b3IpIHtcclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgZGVyaXZlZEN0b3IucHJvdG90eXBlW25hbWVdID0gYmFzZUN0b3IucHJvdG90eXBlW25hbWVdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuYXBwbHlNaXhpbnMoY2xhc3Nlc18xLlVuaXZlcnNpdHlMaWJyYXJpYW4sIFtjbGFzc2VzXzEuRW1wbG95ZWUsIGNsYXNzZXNfMS5SZXNlYXJjaGVyXSk7XHJcbnZhciBuZXdMaWJyYXJpYW4gPSBuZXcgY2xhc3Nlc18xLlVuaXZlcnNpdHlMaWJyYXJpYW4oKTtcclxubmV3TGlicmFyaWFuLmRvUmVzZWFyY2goJ3pvbG9neScpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRW1wbG95ZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbXBsb3llZSgpIHtcclxuICAgIH1cclxuICAgIEVtcGxveWVlLnByb3RvdHlwZS5hZGRUb1NjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbXBsb3llZSBhZGRlZCB0byBzY2hlZHVsZS4nKTtcclxuICAgIH07XHJcbiAgICBFbXBsb3llZS5wcm90b3R5cGUubG9nVGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW1wbG95ZWUgaGFzIHRoZSB0aXRsZSBcIiArIHRoaXMudGl0bGUgKyBcIi5cIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVtcGxveWVlO1xyXG59KCkpO1xyXG5leHBvcnRzLkVtcGxveWVlID0gRW1wbG95ZWU7XHJcbnZhciBSZXNlYXJjaGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVzZWFyY2hlcigpIHtcclxuICAgIH1cclxuICAgIFJlc2VhcmNoZXIucHJvdG90eXBlLmRvUmVzZWFyY2ggPSBmdW5jdGlvbiAodG9waWMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvaW5nIHJlc2VhcmNoIG9uIFwiICsgdG9waWMgKyBcIi5cIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2VhcmNoZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmVzZWFyY2hlciA9IFJlc2VhcmNoZXI7XHJcbnZhciBVbml2ZXJzaXR5TGlicmFyaWFuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVW5pdmVyc2l0eUxpYnJhcmlhbigpIHtcclxuICAgIH1cclxuICAgIFVuaXZlcnNpdHlMaWJyYXJpYW4ucHJvdG90eXBlLmFzc2lzdEN1c3RvbWVyID0gZnVuY3Rpb24gKGN1c3ROYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgJyBpcyBhc3Npc3RpbmcgJyArIGN1c3ROYW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVW5pdmVyc2l0eUxpYnJhcmlhbjtcclxufSgpKTtcclxuZXhwb3J0cy5Vbml2ZXJzaXR5TGlicmFyaWFuID0gVW5pdmVyc2l0eUxpYnJhcmlhbjtcclxudmFyIFJlZmVyZW5jZUl0ZW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWZlcmVuY2VJdGVtKHRpdGxlLCB5ZWFyKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGEgbmV3IFJlZmVyZW5jZUl0ZW0uLi4nKTtcclxuICAgIH1cclxuICAgIFJlZmVyZW5jZUl0ZW0ucHJvdG90eXBlLnByaW50SXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlICsgXCIgd2FzIHB1Ymxpc2hlZCBpbiBcIiArIHRoaXMueWVhciArIFwiLlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlcGFydG1lbnQ6IFwiICsgUmVmZXJlbmNlSXRlbS5kZXBhcnRtZW50KTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlSXRlbS5wcm90b3R5cGUsIFwicHVibGlzaGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B1Ymxpc2hlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHVibGlzaGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlciA9IG5ld1B1Ymxpc2hlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFJlZmVyZW5jZUl0ZW0uZGVwYXJ0bWVudCA9ICdSZXNlYXJjaCc7XHJcbiAgICByZXR1cm4gUmVmZXJlbmNlSXRlbTtcclxufSgpKTtcclxuZXhwb3J0cy5SZWZlcmVuY2VJdGVtID0gUmVmZXJlbmNlSXRlbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENhdGVnb3J5O1xyXG4oZnVuY3Rpb24gKENhdGVnb3J5KSB7XHJcbiAgICBDYXRlZ29yeVtDYXRlZ29yeVtcIkJpb2dyYXBoeVwiXSA9IDBdID0gXCJCaW9ncmFwaHlcIjtcclxuICAgIENhdGVnb3J5W0NhdGVnb3J5W1wiUG9ldHJ5XCJdID0gMV0gPSBcIlBvZXRyeVwiO1xyXG4gICAgQ2F0ZWdvcnlbQ2F0ZWdvcnlbXCJGaWN0aW9uXCJdID0gMl0gPSBcIkZpY3Rpb25cIjtcclxuICAgIENhdGVnb3J5W0NhdGVnb3J5W1wiSGlzdG9yeVwiXSA9IDNdID0gXCJIaXN0b3J5XCI7XHJcbiAgICBDYXRlZ29yeVtDYXRlZ29yeVtcIkNoaWxkcmVuXCJdID0gNF0gPSBcIkNoaWxkcmVuXCI7XHJcbiAgICBDYXRlZ29yeVtDYXRlZ29yeVtcIlNvZnR3YXJlXCJdID0gNV0gPSBcIlNvZnR3YXJlXCI7XHJcbn0pKENhdGVnb3J5IHx8IChDYXRlZ29yeSA9IHt9KSk7XHJcbmV4cG9ydHMuQ2F0ZWdvcnkgPSBDYXRlZ29yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVudW1zXzEgPSByZXF1aXJlKFwiLi4vZW51bXNcIik7XHJcbmZ1bmN0aW9uIENhbGN1bGF0ZUxhdGVGZWUoZGF5c0xhdGUpIHtcclxuICAgIHJldHVybiBkYXlzTGF0ZSAqIC4yNTtcclxufVxyXG5leHBvcnRzLkNhbGN1bGF0ZUxhdGVGZWUgPSBDYWxjdWxhdGVMYXRlRmVlO1xyXG5mdW5jdGlvbiBNYXhCb29rc0FsbG93ZWQoYWdlKSB7XHJcbiAgICBpZiAoYWdlIDwgMTIpIHtcclxuICAgICAgICByZXR1cm4gMztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAxMDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1heEJvb2tzQWxsb3dlZCA9IE1heEJvb2tzQWxsb3dlZDtcclxuZnVuY3Rpb24gcHJpdmF0ZUZ1bmMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBwcml2YXRlLi4uJyk7XHJcbn1cclxuZnVuY3Rpb24gUHVyZ2UoaW52ZW50b3J5KSB7XHJcbiAgICAvLyBpbXBsZW1lbnQgZmFuY3kgbG9naWMgaGVyZS4uLlxyXG4gICAgcmV0dXJuIGludmVudG9yeS5zcGxpY2UoMiwgaW52ZW50b3J5Lmxlbmd0aCk7XHJcbn1cclxuZXhwb3J0cy5QdXJnZSA9IFB1cmdlO1xyXG5mdW5jdGlvbiBHZXRBbGxCb29rcygpIHtcclxuICAgIHZhciBib29rcyA9IFtcclxuICAgICAgICB7IGlkOiAxLCB0aXRsZTogJ1VseXNzZXMnLCBhdXRob3I6ICdKYW1lcyBKb3ljZScsIGF2YWlsYWJsZTogdHJ1ZSwgY2F0ZWdvcnk6IGVudW1zXzEuQ2F0ZWdvcnkuRmljdGlvbiB9LFxyXG4gICAgICAgIHsgaWQ6IDIsIHRpdGxlOiAnQSBGYXJld2VsbCB0byBBcm1zJywgYXV0aG9yOiAnRXJuZXN0IEhlbWluZ3dheScsIGF2YWlsYWJsZTogZmFsc2UsIGNhdGVnb3J5OiBlbnVtc18xLkNhdGVnb3J5LkZpY3Rpb24gfSxcclxuICAgICAgICB7IGlkOiAzLCB0aXRsZTogJ0kgS25vdyBXaHkgdGhlIENhZ2VkIEJpcmQgU2luZ3MnLCBhdXRob3I6ICdNYXlhIEFuZ2Vsb3UnLCBhdmFpbGFibGU6IHRydWUsIGNhdGVnb3J5OiBlbnVtc18xLkNhdGVnb3J5LlBvZXRyeSB9LFxyXG4gICAgICAgIHsgaWQ6IDQsIHRpdGxlOiAnTW9ieSBEaWNrJywgYXV0aG9yOiAnSGVybWFuIE1lbHZpbGxlJywgYXZhaWxhYmxlOiB0cnVlLCBjYXRlZ29yeTogZW51bXNfMS5DYXRlZ29yeS5GaWN0aW9uIH1cclxuICAgIF07XHJcbiAgICByZXR1cm4gYm9va3M7XHJcbn1cclxuZXhwb3J0cy5HZXRBbGxCb29rcyA9IEdldEFsbEJvb2tzO1xyXG5mdW5jdGlvbiBHZXRBbGxNYWdhemluZXMoKSB7XHJcbiAgICB2YXIgbWFnYXppbmVzID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICdQeXRob24gUHJvZ3JhbW1lciBSZXZpZXcnLCBwdWJsaXNoZXI6ICdTbWFydHkgUHVibGlzaGluZycgfSxcclxuICAgICAgICB7IHRpdGxlOiAnRml2ZSBQb2ludHMnLCBwdWJsaXNoZXI6ICdHZW9yZ2lhIFN0YXRlIFVuaXZlcnNpdHknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ1BvZXRyeSBRdWFydGVybHknLCBwdWJsaXNoZXI6ICdMaXRlcmFyeSBQcmVzcycgfSxcclxuICAgICAgICB7IHRpdGxlOiAnQmFzZWJhbGwgTmV3cycsIHB1Ymxpc2hlcjogJ1Nwb3J0cyBQcmVzcycgfVxyXG4gICAgXTtcclxuICAgIHJldHVybiBtYWdhemluZXM7XHJcbn1cclxuZXhwb3J0cy5HZXRBbGxNYWdhemluZXMgPSBHZXRBbGxNYWdhemluZXM7XHJcbmZ1bmN0aW9uIExvZ0ZpcnN0QXZhaWxhYmxlKGJvb2tzKSB7XHJcbiAgICBpZiAoYm9va3MgPT09IHZvaWQgMCkgeyBib29rcyA9IEdldEFsbEJvb2tzKCk7IH1cclxuICAgIHZhciBudW1iZXJPZkJvb2tzID0gYm9va3MubGVuZ3RoO1xyXG4gICAgdmFyIGZpcnN0QXZhaWxhYmxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGJvb2tzXzEgPSBib29rczsgX2kgPCBib29rc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBjdXJyZW50Qm9vayA9IGJvb2tzXzFbX2ldO1xyXG4gICAgICAgIGlmIChjdXJyZW50Qm9vay5hdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgZmlyc3RBdmFpbGFibGUgPSBjdXJyZW50Qm9vay50aXRsZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ1RvdGFsIEJvb2tzOiAnICsgbnVtYmVyT2ZCb29rcyk7XHJcbiAgICBjb25zb2xlLmxvZygnRmlyc3QgQXZhaWxhYmxlOiAnICsgZmlyc3RBdmFpbGFibGUpO1xyXG59XHJcbmV4cG9ydHMuTG9nRmlyc3RBdmFpbGFibGUgPSBMb2dGaXJzdEF2YWlsYWJsZTtcclxuZnVuY3Rpb24gR2V0Qm9va1RpdGxlc0J5Q2F0ZWdvcnkoY2F0ZWdvcnlGaWx0ZXIpIHtcclxuICAgIGlmIChjYXRlZ29yeUZpbHRlciA9PT0gdm9pZCAwKSB7IGNhdGVnb3J5RmlsdGVyID0gZW51bXNfMS5DYXRlZ29yeS5GaWN0aW9uOyB9XHJcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBib29rcyBpbiBjYXRlZ29yeTogJyArIGVudW1zXzEuQ2F0ZWdvcnlbY2F0ZWdvcnlGaWx0ZXJdKTtcclxuICAgIHZhciBhbGxCb29rcyA9IEdldEFsbEJvb2tzKCk7XHJcbiAgICB2YXIgZmlsdGVyZWRUaXRsZXMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYWxsQm9va3NfMSA9IGFsbEJvb2tzOyBfaSA8IGFsbEJvb2tzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRCb29rID0gYWxsQm9va3NfMVtfaV07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCb29rLmNhdGVnb3J5ID09PSBjYXRlZ29yeUZpbHRlcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFRpdGxlcy5wdXNoKGN1cnJlbnRCb29rLnRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlsdGVyZWRUaXRsZXM7XHJcbn1cclxuZXhwb3J0cy5HZXRCb29rVGl0bGVzQnlDYXRlZ29yeSA9IEdldEJvb2tUaXRsZXNCeUNhdGVnb3J5O1xyXG5mdW5jdGlvbiBMb2dCb29rVGl0bGVzKHRpdGxlcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0aXRsZXNfMSA9IHRpdGxlczsgX2kgPCB0aXRsZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgdGl0bGUgPSB0aXRsZXNfMVtfaV07XHJcbiAgICAgICAgY29uc29sZS5sb2codGl0bGUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9nQm9va1RpdGxlcyA9IExvZ0Jvb2tUaXRsZXM7XHJcbmZ1bmN0aW9uIEdldEJvb2tCeUlEKGlkKSB7XHJcbiAgICB2YXIgYWxsQm9va3MgPSBHZXRBbGxCb29rcygpO1xyXG4gICAgcmV0dXJuIGFsbEJvb2tzLmZpbHRlcihmdW5jdGlvbiAoYm9vaykgeyByZXR1cm4gYm9vay5pZCA9PT0gaWQ7IH0pWzBdO1xyXG59XHJcbmV4cG9ydHMuR2V0Qm9va0J5SUQgPSBHZXRCb29rQnlJRDtcclxuZnVuY3Rpb24gQ3JlYXRlQ3VzdG9tZXJJRChuYW1lLCBpZCkge1xyXG4gICAgcmV0dXJuIG5hbWUgKyBpZDtcclxufVxyXG5leHBvcnRzLkNyZWF0ZUN1c3RvbWVySUQgPSBDcmVhdGVDdXN0b21lcklEO1xyXG5mdW5jdGlvbiBDcmVhdGVDdXN0b21lcihuYW1lLCBhZ2UsIGNpdHkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBjdXN0b21lciAnICsgbmFtZSk7XHJcbiAgICBpZiAoYWdlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FnZTogJyArIGFnZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2l0eSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaXR5OiAnICsgY2l0eSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DcmVhdGVDdXN0b21lciA9IENyZWF0ZUN1c3RvbWVyO1xyXG5mdW5jdGlvbiBDaGVja291dEJvb2tzKGN1c3RvbWVyKSB7XHJcbiAgICB2YXIgYm9va0lEcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBib29rSURzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ0NoZWNraW5nIG91dCBib29rcyBmb3IgJyArIGN1c3RvbWVyKTtcclxuICAgIHZhciBib29rc0NoZWNrZWRPdXQgPSBbXTtcclxuICAgIGZvciAodmFyIF9hID0gMCwgYm9va0lEc18xID0gYm9va0lEczsgX2EgPCBib29rSURzXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gYm9va0lEc18xW19hXTtcclxuICAgICAgICB2YXIgYm9vayA9IEdldEJvb2tCeUlEKGlkKTtcclxuICAgICAgICBpZiAoYm9vay5hdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgYm9va3NDaGVja2VkT3V0LnB1c2goYm9vay50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvb2tzQ2hlY2tlZE91dDtcclxufVxyXG5leHBvcnRzLkNoZWNrb3V0Qm9va3MgPSBDaGVja291dEJvb2tzO1xyXG5mdW5jdGlvbiBHZXRUaXRsZXMoYm9va1Byb3BlcnR5KSB7XHJcbiAgICB2YXIgYWxsQm9va3MgPSBHZXRBbGxCb29rcygpO1xyXG4gICAgdmFyIGZvdW5kVGl0bGVzID0gW107XHJcbiAgICBpZiAodHlwZW9mIGJvb2tQcm9wZXJ0eSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIGdldCBhbGwgYm9va3MgYnkgYSBwYXJ0aWN1bGFyIGF1dGhvclxyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgYWxsQm9va3NfMiA9IGFsbEJvb2tzOyBfaSA8IGFsbEJvb2tzXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBib29rID0gYWxsQm9va3NfMltfaV07XHJcbiAgICAgICAgICAgIGlmIChib29rLmF1dGhvciA9PT0gYm9va1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZFRpdGxlcy5wdXNoKGJvb2sudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGJvb2tQcm9wZXJ0eSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAvLyBnZXQgYWxsIGJvb2tzIGJhc2VkIG9uIHNwZWNpZmllZCBhdmFpbGFiaWxpdHlcclxuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGFsbEJvb2tzXzMgPSBhbGxCb29rczsgX2EgPCBhbGxCb29rc18zLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgICAgICB2YXIgYm9vayA9IGFsbEJvb2tzXzNbX2FdO1xyXG4gICAgICAgICAgICBpZiAoYm9vay5hdmFpbGFibGUgPT09IGJvb2tQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRUaXRsZXMucHVzaChib29rLnRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmb3VuZFRpdGxlcztcclxufVxyXG5leHBvcnRzLkdldFRpdGxlcyA9IEdldFRpdGxlcztcclxuZnVuY3Rpb24gUHJpbnRCb29rKGJvb2spIHtcclxuICAgIGNvbnNvbGUubG9nKGJvb2sudGl0bGUgKyAnIGJ5ICcgKyBib29rLmF1dGhvcik7XHJcbn1cclxuZXhwb3J0cy5QcmludEJvb2sgPSBQcmludEJvb2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=