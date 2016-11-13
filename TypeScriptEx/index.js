///<reference path="node_modules/@types/node/index.d.ts"/>
var http = require("http");
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
// Arguments don't match the function parameters.
speak("tripple cheesburger", 500);
function speak2(book) {
    console.log(book.title + " was written by " + book.author + " and published on " + book.published + ". It's " + book.pages + " pages long.");
}
var book = {
    title: 'Mein Kampf',
    author: 'Adolf \"A-Hizzle\" Hitler',
    published: new Date(),
    pages: 69
};
speak2(book);
var Book = (function () {
    function Book() {
    }
    return Book;
}());
var book2 = new Book();
book2.title = "No Regrets";
var funcOne = function (one, two, three) {
    return [one, two, three];
};
var funcTwo = function (one, two, three) {
    return [one.toUpperCase(), two.toUpperCase(), three.toUpperCase()];
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
console.log(funcOne('one', 'two', 'three'));
console.log(funcTwo('one', 'two', 'three'));
function printType(argument) {
    console.log(argument.constructor.name);
}
printType("hello");
printType(2);
function printTypes() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i - 0] = arguments[_i];
    }
    rest.forEach(function (value, key) {
        console.log(value.constructor.name);
    });
}
printTypes('hey', 3, true);
function reverseArr(arr) {
    return arr.reverse();
}
console.log(reverseArr(['a', 'b', 'c']));
console.log(reverseArr([1, 2, 3]));
var DataHolder = (function () {
    function DataHolder(argument) {
        this._value = argument;
    }
    DataHolder.prototype.setValue = function (value) { this._value = value; };
    DataHolder.prototype.getValue = function () { return this._value; };
    return DataHolder;
}());
var d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
var d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue("hello");
console.log(d2.getValue());
function printOwner(owner) {
    console.log(owner.owner);
}
//# sourceMappingURL=index.js.map