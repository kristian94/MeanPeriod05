/**
 * Created by Kristian on 11-11-2016.
 */
require('../stylesheets/main.css');
let hex = require('./hexModule.js')
import todos from "./tscript.js";


console.log("Funking you from webpack");

const name = 'Scotch.io';

setTimeout(() => {
    document.getElementById("msg").innerHTML= `Name: ${name}`
    hex.getHexes(6).then((hexes) => {
        document.getElementById("randoms").innerHTML = hexes[0].random;
    })
    document.getElementById("todos").innerHTML= `todo: ${todos[0].todo}`
}, 300);

console.log(todos[0].todo);
