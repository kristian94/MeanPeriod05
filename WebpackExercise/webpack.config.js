/**
 * Created by Kristian on 12-11-2016.
 */
module.exports = {
    entry: './public/javascripts/script.js',
    output: {
        filename: './public/javascripts/bundle.js'
    },
    // watch: true,
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};