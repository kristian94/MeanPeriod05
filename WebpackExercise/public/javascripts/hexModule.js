/**
 * Created by Kristian on 13-11-2016.
 */

let getHex = function(size) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let hexes = [];
        for(let i = 1; i <= size; i++){

            require('crypto').randomBytes((i*4), function(err, buffer) {
                let random = buffer.toString('hex');
                let length = i*8;
                hexes[size-i] = ({length, random})
                count++;
                if(count == size){
                    resolve(hexes)
                }
            });
        }
    })
}





module.exports = {
    getHexes: getHex
}
