const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist'),
    },
    plugins: [
        new htmlPlugin({
            template: 'index.html',
        }),
    ],
};
