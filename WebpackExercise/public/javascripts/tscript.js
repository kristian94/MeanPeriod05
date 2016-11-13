/**
 * Created by Kristian on 13-11-2016.
 */
"use strict";
;
var Todo = (function () {
    function Todo(todo, importance) {
        var _this = this;
        this.todo = todo;
        this.importance = importance;
        this.toString = function () { return ("Todo: " + _this.todo + ", Importance: " + _this.importance + " "); };
    }
    Todo.maxImportance = 5;
    return Todo;
}());
var todos = [new Todo("Drink beer", 5), new Todo("Learn TS", 4)];
exports.__esModule = true;
exports["default"] = todos;
