/**
 * Created by Kristian on 13-11-2016.
 */
let express = require('express')
let app = express()
let http = require('http')

let albumModule = require('./modules/albumModule')



getAlbumsAsync().then((albums) => {
    console.log('hmm')
    console.log(albums);
})

