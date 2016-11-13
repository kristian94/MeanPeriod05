/**
 * Created by Kristian on 12-11-2016.
 */


module.exports = {
    f: function (x, y, ...rest) {
        let obj = {}
        obj.sum = x + y;

        console.log('Sum: ' + (x + y))
        rest.forEach((key, index) => {
                let type = key.constructor.name
                console.log(`rest value ${index} is a: ${type}`)
                obj[`rest value ${++index} is a`] = type;
            }
        )
        return obj;
    }
}