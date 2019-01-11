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

/***/ "./TypeScriptNotes/app/classes.ts":
/*!****************************************!*\
  !*** ./TypeScriptNotes/app/classes.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;


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

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ./enums */ "./TypeScriptNotes/app/enums.ts");
var classes_1 = __webpack_require__(/*! ./classes */ "./TypeScriptNotes/app/classes.ts");
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
var favoritLibrarian = new classes_1.UniversityLibrarian();
favoritLibrarian.name = "vishal ken";
favoritLibrarian.assistCustomer('abhishek verma');
//*********************************************


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdE5vdGVzL2FwcC9jbGFzc2VzLnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHROb3Rlcy9hcHAvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdE5vdGVzL2FwcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQywrQ0FBUztBQUMvQixnQkFBZ0IsbUJBQU8sQ0FBQyxtREFBVztBQUNuQztBQUNBO0FBQ0EsU0FBUyxzR0FBc0c7QUFDL0csU0FBUyx1SEFBdUg7QUFDaEksU0FBUyw4SEFBOEg7QUFDdkksU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQ0FBMkM7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsdUJBQXVCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0JBQXdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0JBQXdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVW5pdmVyc2l0eUxpYnJhcmlhbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVuaXZlcnNpdHlMaWJyYXJpYW4oKSB7XHJcbiAgICB9XHJcbiAgICBVbml2ZXJzaXR5TGlicmFyaWFuLnByb3RvdHlwZS5hc3Npc3RDdXN0b21lciA9IGZ1bmN0aW9uIChjdXN0TmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSArICcgaXMgYXNzaXN0aW5nICcgKyBjdXN0TmFtZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVuaXZlcnNpdHlMaWJyYXJpYW47XHJcbn0oKSk7XHJcbmV4cG9ydHMuVW5pdmVyc2l0eUxpYnJhcmlhbiA9IFVuaXZlcnNpdHlMaWJyYXJpYW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYXRlZ29yeTtcclxuKGZ1bmN0aW9uIChDYXRlZ29yeSkge1xyXG4gICAgQ2F0ZWdvcnlbQ2F0ZWdvcnlbXCJCaW9ncmFwaHlcIl0gPSAwXSA9IFwiQmlvZ3JhcGh5XCI7XHJcbiAgICBDYXRlZ29yeVtDYXRlZ29yeVtcIlBvZXRyeVwiXSA9IDFdID0gXCJQb2V0cnlcIjtcclxuICAgIENhdGVnb3J5W0NhdGVnb3J5W1wiRmljdGlvblwiXSA9IDJdID0gXCJGaWN0aW9uXCI7XHJcbiAgICBDYXRlZ29yeVtDYXRlZ29yeVtcIkhpc3RvcnlcIl0gPSAzXSA9IFwiSGlzdG9yeVwiO1xyXG4gICAgQ2F0ZWdvcnlbQ2F0ZWdvcnlbXCJDaGlsZHJlblwiXSA9IDRdID0gXCJDaGlsZHJlblwiO1xyXG59KShDYXRlZ29yeSB8fCAoQ2F0ZWdvcnkgPSB7fSkpO1xyXG5leHBvcnRzLkNhdGVnb3J5ID0gQ2F0ZWdvcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbnVtc18xID0gcmVxdWlyZShcIi4vZW51bXNcIik7XHJcbnZhciBjbGFzc2VzXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzXCIpO1xyXG5mdW5jdGlvbiBHZXRBbGxCb29rcygpIHtcclxuICAgIHZhciBib29rcyA9IFtcclxuICAgICAgICB7IGlkOiAxLCB0aXRsZTogJ1VseXNzZXMnLCBhdXRob3I6ICdKYW1lcyBKb3ljZScsIGF2YWlsYWJsZTogdHJ1ZSwgY2F0ZWdvcnk6IGVudW1zXzEuQ2F0ZWdvcnkuRmljdGlvbiB9LFxyXG4gICAgICAgIHsgaWQ6IDIsIHRpdGxlOiAnQSBGYXJld2VsbCB0byBBcm1zJywgYXV0aG9yOiAnRXJuZXN0IEhlbWluZ3dheScsIGF2YWlsYWJsZTogZmFsc2UsIGNhdGVnb3J5OiBlbnVtc18xLkNhdGVnb3J5LkZpY3Rpb24gfSxcclxuICAgICAgICB7IGlkOiAzLCB0aXRsZTogJ0kgS25vdyBXaHkgdGhlIENhZ2VkIEJpcmQgU2luZ3MnLCBhdXRob3I6ICdNYXlhIEFuZ2Vsb3UnLCBhdmFpbGFibGU6IHRydWUsIGNhdGVnb3J5OiBlbnVtc18xLkNhdGVnb3J5LlBvZXRyeSB9LFxyXG4gICAgICAgIHsgaWQ6IDQsIHRpdGxlOiAnTW9ieSBEaWNrJywgYXV0aG9yOiAnSGVybWFuIE1lbHZpbGxlJywgYXZhaWxhYmxlOiB0cnVlLCBjYXRlZ29yeTogZW51bXNfMS5DYXRlZ29yeS5GaWN0aW9uIH1cclxuICAgIF07XHJcbiAgICByZXR1cm4gYm9va3M7XHJcbn1cclxuZnVuY3Rpb24gTG9nRmlyc3RBdmFpbGFibGUoYm9va3MpIHtcclxuICAgIGlmIChib29rcyA9PT0gdm9pZCAwKSB7IGJvb2tzID0gR2V0QWxsQm9va3MoKTsgfVxyXG4gICAgdmFyIG51bWJlck9mQm9va3MgPSBib29rcy5sZW5ndGg7XHJcbiAgICB2YXIgZmlyc3RBdmFpbGFibGUgPSAnJztcclxuICAgIGZvciAodmFyIF9pID0gMCwgYm9va3NfMSA9IGJvb2tzOyBfaSA8IGJvb2tzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRCb29rID0gYm9va3NfMVtfaV07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCb29rLmF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICBmaXJzdEF2YWlsYWJsZSA9IGN1cnJlbnRCb29rLnRpdGxlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnVG90YWwgQm9va3M6ICcgKyBudW1iZXJPZkJvb2tzKTtcclxuICAgIGNvbnNvbGUubG9nKCdGaXJzdCBBdmFpbGFibGU6ICcgKyBmaXJzdEF2YWlsYWJsZSk7XHJcbn1cclxuZnVuY3Rpb24gR2V0Qm9va1RpdGxlc0J5Q2F0ZWdvcnkoY2F0ZWdvcnlGaWx0ZXIpIHtcclxuICAgIGlmIChjYXRlZ29yeUZpbHRlciA9PT0gdm9pZCAwKSB7IGNhdGVnb3J5RmlsdGVyID0gZW51bXNfMS5DYXRlZ29yeS5GaWN0aW9uOyB9XHJcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBib29rcyBpbiBjYXRlZ29yeTogJyArIGVudW1zXzEuQ2F0ZWdvcnlbY2F0ZWdvcnlGaWx0ZXJdKTtcclxuICAgIHZhciBhbGxCb29rcyA9IEdldEFsbEJvb2tzKCk7XHJcbiAgICB2YXIgZmlsdGVyZWRUaXRsZXMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYWxsQm9va3NfMSA9IGFsbEJvb2tzOyBfaSA8IGFsbEJvb2tzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRCb29rID0gYWxsQm9va3NfMVtfaV07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCb29rLmNhdGVnb3J5ID09PSBjYXRlZ29yeUZpbHRlcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFRpdGxlcy5wdXNoKGN1cnJlbnRCb29rLnRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlsdGVyZWRUaXRsZXM7XHJcbn1cclxuZnVuY3Rpb24gTG9nQm9va1RpdGxlcyh0aXRsZXMpIHtcclxuICAgIGZvciAodmFyIF9pID0gMCwgdGl0bGVzXzEgPSB0aXRsZXM7IF9pIDwgdGl0bGVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gdGl0bGVzXzFbX2ldO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBHZXRCb29rQnlJRChpZCkge1xyXG4gICAgdmFyIGFsbEJvb2tzID0gR2V0QWxsQm9va3MoKTtcclxuICAgIHJldHVybiBhbGxCb29rcy5maWx0ZXIoZnVuY3Rpb24gKGJvb2spIHsgcmV0dXJuIGJvb2suaWQgPT09IGlkOyB9KVswXTtcclxufVxyXG5mdW5jdGlvbiBDcmVhdGVDdXN0b21lcklEKG5hbWUsIGlkKSB7XHJcbiAgICByZXR1cm4gbmFtZSArIGlkO1xyXG59XHJcbmZ1bmN0aW9uIENyZWF0ZUN1c3RvbWVyKG5hbWUsIGFnZSwgY2l0eSkge1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGN1c3RvbWVyICcgKyBuYW1lKTtcclxuICAgIGlmIChhZ2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWdlOiAnICsgYWdlKTtcclxuICAgIH1cclxuICAgIGlmIChjaXR5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NpdHk6ICcgKyBjaXR5KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBDaGVja291dEJvb2tzKGN1c3RvbWVyKSB7XHJcbiAgICB2YXIgYm9va0lEcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBib29rSURzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ0NoZWNraW5nIG91dCBib29rcyBmb3IgJyArIGN1c3RvbWVyKTtcclxuICAgIHZhciBib29rc0NoZWNrZWRPdXQgPSBbXTtcclxuICAgIGZvciAodmFyIF9hID0gMCwgYm9va0lEc18xID0gYm9va0lEczsgX2EgPCBib29rSURzXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gYm9va0lEc18xW19hXTtcclxuICAgICAgICB2YXIgYm9vayA9IEdldEJvb2tCeUlEKGlkKTtcclxuICAgICAgICBpZiAoYm9vay5hdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgYm9va3NDaGVja2VkT3V0LnB1c2goYm9vay50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvb2tzQ2hlY2tlZE91dDtcclxufVxyXG5mdW5jdGlvbiBHZXRUaXRsZXMoYm9va1Byb3BlcnR5KSB7XHJcbiAgICB2YXIgYWxsQm9va3MgPSBHZXRBbGxCb29rcygpO1xyXG4gICAgdmFyIGZvdW5kVGl0bGVzID0gW107XHJcbiAgICBpZiAodHlwZW9mIGJvb2tQcm9wZXJ0eSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIGdldCBhbGwgYm9va3MgYnkgYSBwYXJ0aWN1bGFyIGF1dGhvclxyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgYWxsQm9va3NfMiA9IGFsbEJvb2tzOyBfaSA8IGFsbEJvb2tzXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBib29rID0gYWxsQm9va3NfMltfaV07XHJcbiAgICAgICAgICAgIGlmIChib29rLmF1dGhvciA9PT0gYm9va1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZFRpdGxlcy5wdXNoKGJvb2sudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGJvb2tQcm9wZXJ0eSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAvLyBnZXQgYWxsIGJvb2tzIGJhc2VkIG9uIHNwZWNpZmllZCBhdmFpbGFiaWxpdHlcclxuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGFsbEJvb2tzXzMgPSBhbGxCb29rczsgX2EgPCBhbGxCb29rc18zLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgICAgICB2YXIgYm9vayA9IGFsbEJvb2tzXzNbX2FdO1xyXG4gICAgICAgICAgICBpZiAoYm9vay5hdmFpbGFibGUgPT09IGJvb2tQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRUaXRsZXMucHVzaChib29rLnRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmb3VuZFRpdGxlcztcclxufVxyXG5mdW5jdGlvbiBQcmludEJvb2soYm9vaykge1xyXG4gICAgY29uc29sZS5sb2coYm9vay50aXRsZSArICcgYnkgJyArIGJvb2suYXV0aG9yKTtcclxufVxyXG52YXIgZmF2b3JpdExpYnJhcmlhbiA9IG5ldyBjbGFzc2VzXzEuVW5pdmVyc2l0eUxpYnJhcmlhbigpO1xyXG5mYXZvcml0TGlicmFyaWFuLm5hbWUgPSBcInZpc2hhbCBrZW5cIjtcclxuZmF2b3JpdExpYnJhcmlhbi5hc3Npc3RDdXN0b21lcignYWJoaXNoZWsgdmVybWEnKTtcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==