"use strict";

/**
 * Created by Kristian on 24-10-2016.
 */

var evens = [0, 2, 4, 6, 8];

var odds = evens.map(function (v) {
    return v + 1;
});
var pairs = evens.map(function (v) {
    return { even: v, odd: v + 1 };
});
var nums = evens.map(function (v, i) {
    return v + i;
});

odds = evens.map(function (v) {
    return v + 1;
});

console.log(odds);
console.log(pairs);
console.log(nums);

function Numbers(numbs) {
    var _this = this;

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            _this.fives.push(v);
        }
    });
}

var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);