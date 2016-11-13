///<reference path="node_modules/@types/node/index.d.ts"/>
let http = require("http");

function speak(food: string, energy: number): void{
    console.log("Our " + food + " has " + energy + " calories.");
}

// Arguments don't match the function parameters.
speak("tripple cheesburger", 500);


interface Point {
    readonly x: number;
    readonly y: number;
}

interface IBook{
    title: string;
    author: string;
    published?: Date;
    pages?: number;
}

function speak2(book: IBook): void{
    console.log(`${book.title} was written by ${book.author} and published on ${book.published}. It's ${book.pages} pages long.`)
}


let book = {
    title: 'Mein Kampf',
    author: 'Adolf \"A-Hizzle\" Hitler',
    published: new Date(),
    pages: 69
}

speak2(book)

class Book {
    title: string;
    author: string;
    published?: Date;
    pages?: number;
}

let book2 = new Book();

book2.title = "No Regrets"


interface myFunc{
    (one: string, two: string, three: string): string[];
}

var funcOne:myFunc = function(one, two, three): string[]{
    return [one, two, three]
};

var funcTwo:myFunc = function(one, two, three): string[]{
    return [one.toUpperCase(), two.toUpperCase(), three.toUpperCase()]
};

let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}



console.log(funcOne('one', 'two', 'three'))
console.log(funcTwo('one', 'two', 'three'))


function printType<T>(argument: T): void{

    console.log(argument.constructor.name)
}

printType<string>("hello");
printType<number>(2);

function printTypes<T>(...rest: Array<any>){
    rest.forEach(function(value, key){
        console.log(value.constructor.name)
    })
}

printTypes<string, number, boolean>('hey', 3, true)




function reverseArr(arr: Array<any>): Array<any>{
    return arr.reverse();
}

console.log(reverseArr(['a', 'b', 'c']));
console.log(reverseArr([1, 2, 3]))

class DataHolder{
    _value
    constructor<T>(argument: T){
        this._value = argument;
    }
    setValue (value){this._value = value}
    getValue (){return this._value}

}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());


let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue("hello");
console.log(d2.getValue());


interface Owner {
    owner: String;
}

function printOwner<Owner>(owner: Owner){
    console.log(owner.owner)
}