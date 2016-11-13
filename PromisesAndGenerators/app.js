/**
 * Created by Kristian on 13-11-2016.
 */

var hex = require('./modules/hexModule.js');
var express = require('express')

var app = express()


// function* idMaker(){
//     var index = 0;
//     while(true)
//         yield index++;
// }
//
// var gen = idMaker();
//
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
//
// for(let i of gen){
//     console.log(i);
//     if(i === 5) //Will continue "forever" without this
//         break;
// }



app.get('/api/securerandom', function(req, res, err){
    hex.getHexes(6).then((hexes) => {
        res.send(hexes);
    })
});

app.listen(1337, function(){
    console.log('listening on 1337')
})

