/**
 * Created by Kristian on 13-11-2016.
 */

function titleContains3Words(obj){
    let words = obj.title.split(' ')
    return words.length == 3
}

let getAlbumsAsync = function () {
    return new Promise((resolve, reject) => {
        let ids = [1, 3, 5, 7, 9];
        let count = 0;
        var albums = [];
        ids.forEach((value, key) => {
            let url = `http://jsonplaceholder.typicode.com/photos?albumId=${value}`
            http.get(url, (res) => {
                let rawData = '';
                res.on('data', (chunk) => rawData += chunk)
                res.on('end', () => {
                    let parsedData = JSON.parse(rawData)
                    albums[value] = parsedData.filter(titleContains3Words)
                    count++
                    if(count == ids.length){
                        resolve(albums)
                    }
                })
            })
        })
    })
}

getAlbumsAsync().then((albums) => {
    console.log('yay')
})

module.exports = {
    getAlbumsAsync: getAlbumsAsync
}
