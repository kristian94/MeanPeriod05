/**
 * Created by Kristian on 13-11-2016.
 */
let express = require('express')
let app = express()
let http = require('http')
// let https = require('https')

let jokes = [
    {
        joke: "Lars' joke-API returnerede engang en sjov joke. Så vågnede jeg.",
        reference: "Local"
    },
    {
        joke: 'Der var engang en joke jeg troede var sjov. Så brugte Lars den i sit API.',
        reference: 'Local'
    }]

function getRandomJoke() {
    let i = Math.floor((Math.random() * jokes.length));
    return jokes[i];
}


function getJokesFromUrls() {
    return new Promise((resolve, reject) => {
        let jokes = []
        let count = 0;
        let urls = [
            'http://jokes-plaul.rhcloud.com/api/joke',
            'http://api.icndb.com/jokes/random'
        ]
        urls.forEach(function (value, key) {
            http.get(value, (res) => {
                let rawData = '';
                res.on('data', (chunk) => rawData += chunk)
                res.on('end', () => {
                    let parsedData = JSON.parse(rawData)
                    jokes[key] = parsedData
                    count++
                    if (count == urls.length) {
                        resolve(jokes)
                    }
                })
            })
        })
    })
}

app.get('/api/3jokes', function(req, res){
    getJokesFromUrls().then((jokes) => {
        jokes.push(getRandomJoke())
        res.send(jokes)
    })
})


app.listen(1234, function(){
    console.log('listening on 1234')
})