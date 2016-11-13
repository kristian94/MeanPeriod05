/**
 * Created by Kristian on 24-10-2016.
 */

myModule = require("./myModule.js")

let evens = [0, 2, 4, 6, 8]

let odds  = evens.map(v => v + 1)
let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
let nums  = evens.map((v, i) => v + i)

odds = evens.map(v => {
    return v + 1
});


console.log(odds)
console.log(pairs)
console.log(nums)

function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}

var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

var counter = {
    count: 0,
    inc: () => {
        this.count++;
    }
}

var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count);

let name = "Kristian"

console.log(`my name is ${name}`)



let obj = f(5, 2, true, {}, [], 'hello')

console.log('==========')

console.log(obj)


var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams));

var chars = [f(5,2,...restParams)];

console.log(chars)

let fName = "Kurt";
let lName = "Wonnegut";
let age = 98;

let obj = {fName, lName, age};

let fName = "Kurt", lName = "Wonnegut";

[fName, lName] = [lName, fName];

console.log(`First: ${fName}, Last: ${lName}`);



function getPerson(){
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender : "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

var {lastName, phone} = getPerson();

console.log(lastName)
console.log(phone)

myModule.f(1,2,3,4,5,6,7,8,true)

console.log(obj)

var list = [1, 2, 3];
var [ a, , b ] = list;
[b, a] = [a, b];

console.log(b)

console.log(list)

class Shape {
    constructor(color){
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    toString() {
        return `Color: ${this._color}`;
    }
    getColor(){
        return this._color;
    }
    setColor(color){
        this._color = color;
    }

}

var shape = new Shape("red");

console.log(shape.toString())

shape.setColor("blue")

console.log(shape.toString())

class Circle extends Shape{

    constructor(radius, color){
        super(color);
        this._radius = radius;
    }

    toString(){
        return `Color: ${this._color}, Radius: ${this._radius}`
    }
    getArea() {
        return this._radius * this._radius * 3.1415;
    }
    getCircumference() {
        return (this._radius + this._radius) * 3.1415;
    }
    getRadius(){
        return this._radius;
    }
    setRadius(radius){
        this._radius = radius;
    }

}

var circle = new Circle(3, 'red')

console.log(`Circle - circumference: ${circle.getCircumference()}, area: ${circle.getArea()}`)

circle.setRadius(5)

console.log(`Circle - circumference: ${circle.getCircumference()}, area: ${circle.getArea()}`)


class Cylinder extends Circle{

    constructor(color, radius, height){
        super(radius, color);
        this._height = height;
    }
    get height(){
        return this._height;
    }
    set height(height){ this._height = height}

    getCircumference(){
        return null;
    }
    toString(){
        return `Color: ${this._color}, Radius: ${this._radius}, Height: ${this._height}, Volume: ${this.getVolume()}`
    }
    getVolume(){
        return Number(this.getArea() * this._height);
    }
}

var cylinder = new Cylinder('blue', 2, 3)

console.log(cylinder.toString())

cylinder.height = 4

console.log(cylinder.toString())


function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
            {
                value: array[nextIndex++],
                done: false
            } :
            {
                done: true
            };
        }
    }
}
//Here we can do:
let it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

function makeIterator2(array) {
    var itt= {};
    itt[Symbol.iterator] = function() {
        var nextIndex = 0;
        return {
            next: function () {
                return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
            }
        }
    }
    return itt;
}
//Here we can iterate using the for-of syntax:
var it2 = makeIterator2(['yo', 'ya']);
for(let i of it2){
    console.log(i);
}

function* makeNames() {

    let firstNames = ["Lars", "Jan", "Ida", "Tine","Thomas"];
    let lastNames = ["Mortensen","Peterson","Obama","Jensen","Hansen"];
    for (;;) {

        let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        yield {firstName, lastName}
    }

}


let index = 0;
for(let name of makeNames()){
    console.log(name);
    if(index++ === 50){
        break;
    }
}


